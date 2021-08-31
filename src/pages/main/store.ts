import { createStore } from 'vuex'
import { AttrsGroup, Attr, Theme, Property } from '@/constant/interface'
import {
  setVarStyleByConfig,
  getComponentStyle,
  setVarStyle,
  getTime,
  scribeToHump
} from '@/utils'
import { postMessageToChild } from '@/utils/iframeRouter'

import {
  APP_THEME_USER_CONFIG,
  APP_THEME_PREVIEW_CONFIG,
  APP_THEME_PREVIEW_ID
} from '@/constant'
import useLocalStorage from '@/utils/useLocalStorage'
import { APP_STYLE_LIST as styleList } from '@/constant'
import download from '@/utils/download'

const storage = useLocalStorage()

export default createStore({
  state: {
    menuActive: 'Base',
    isIframeReady: false,
    themeUserConfig: storage.getItem(APP_THEME_USER_CONFIG) || [],
    themePreviewConfig: storage.getItem(APP_THEME_PREVIEW_CONFIG) || {},
    themePreviewId: storage.getItem(APP_THEME_PREVIEW_ID),
    componentConsoleStyle: []
  },
  mutations: {
    /**
     * 设置菜单
     * @param state
     * @param value
     */
    SET_MENU_ACTIVE(state, value) {
      if (state.menuActive !== value) {
        state.menuActive = value
      }
    },
    /**
     * 添加用户主题
     * @param state
     * @param payload
     */
    ADD_THEME(state, payload) {
      state.themeUserConfig.push(payload)
      storage.setItem(APP_THEME_USER_CONFIG, state.themeUserConfig)
    },
    /**
     * 修改某个主题的信息
     * @param state
     * @param payload
     */
    UPDATE_THEME(state, payload) {
      const { id, name, theme, update } = payload
      const config = state.themeUserConfig.filter(
        (item: Theme) => item.id === id
      )[0]
      config.name = name
      config.theme = theme
      config.update = update
      storage.setItem(APP_THEME_USER_CONFIG, state.themeUserConfig)
    },
    /**
     * 删除某个主题
     * @param state
     * @param payload
     */
    DELETE_THEME(state, payload) {
      const configList = state.themeUserConfig
      const index = configList.findIndex((item: Theme) => item.id === payload)
      if (index !== -1) {
        configList.splice(index, 1)
        state.themePreviewConfig = {}
        state.themePreviewId = null
        storage.setItem(APP_THEME_USER_CONFIG, state.themeUserConfig)
        storage.setItem(APP_THEME_PREVIEW_CONFIG, state.themePreviewConfig)
        storage.setItem(APP_THEME_PREVIEW_ID, state.themePreviewId)
      }
    },
    /**
     * 设置当前主题id
     * @param state
     * @param id
     */
    SET_THEME_PREVIEW_ID(state, id) {
      state.themePreviewId = id
      storage.setItem(APP_THEME_PREVIEW_ID, id)
    },
    /**
     * 初始化当前主题
     */
    SET_THEME_PREVIEW(state, theme = {}) {
      state.themePreviewConfig = theme
      storage.setItem(APP_THEME_PREVIEW_CONFIG, state.themePreviewConfig)
    },
    /**
     * 设置当期主题中的某个属性值
     * @param state
     * @param payload
     */
    SET_THEME_PREVIEW_CONFIG(state, payload) {
      const { varName, varValue } = payload
      state.themePreviewConfig[varName] = varValue
      storage.setItem(APP_THEME_PREVIEW_CONFIG, state.themePreviewConfig)
    },
    /**
     * 获取当前组件样式变量
     * @param state
     * @param payload
     */
    SET_COMPONENT_CONSOLE_STYLE(state, payload) {
      state.componentConsoleStyle = payload
    },
    /**
     * 设置当个组件样式变量
     */
    SET_SINGLE_COMPONENT_CONSOLE_STYLE(state, payload) {
      const { index, varValue } = payload
      ;(state.componentConsoleStyle[index] as Attr).varValue = varValue
    }
  },
  actions: {
    /**
     * 菜单变化处理
     * @param param0
     * @param payload
     */
    menuChange({ commit }, hash) {
      commit('SET_MENU_ACTIVE', hash)
      // dispatch('getComponentConsoleStyle', hash)
    },
    /**
     * 生成一个主题
     * @param context
     * @param payload
     * @returns
     */
    generateConfig(context, payload) {
      const _id = getTime()
      const {
        id = _id,
        name,
        update = _id,
        theme = {}
        // theme = { ...DEFAULT_COLOR }
      } = payload
      return { id, name, update, theme }
    },
    /**
     * 添加主题
     * @param context
     * @param payload
     */
    async addTheme({ commit, dispatch }, payload) {
      const config = await dispatch('generateConfig', payload)
      commit('ADD_THEME', config)
      return config
    },
    /**
     * 修改主题
     * @param context
     * @param payload
     */
    updateTheme({ commit }, payload) {
      commit('UPDATE_THEME', payload)
    },
    /**
     * 删除主题
     * @param context
     * @param payload
     */
    async deleteTheme({ commit }, payload) {
      document.documentElement.setAttribute('style', '')
      commit('DELETE_THEME', payload)
    },
    /**
     * 使用主题
     * @param context
     * @param payload
     */
    async useTheme({ commit }, payload) {
      const { id, theme } = payload
      commit('SET_THEME_PREVIEW_ID', id)
      commit('SET_THEME_PREVIEW', theme)
    },
    /**
     * 获取当前主题配置
     * @param context
     * @param context.state
     */
    async getThemePreviewConfig({ state }) {
      const theme = state.themePreviewConfig
      // 设置主题样式
      await setVarStyleByConfig(theme)
    },
    /**
     * 获取当前组件样式
     * @param context
     * @param context.commit
     * @param menuItemId 菜单id
     */
    getComponentConsoleStyle({ commit }, menuItemId) {
      const stylesItem = styleList.filter(item => item.id === menuItemId)[0]
      const componentStyle: AttrsGroup = getComponentStyle(stylesItem)
      commit('SET_COMPONENT_CONSOLE_STYLE', componentStyle)
    },
    /**
     * 设置属性
     */
    setComponentConsoleStyle({ state, commit }, payload) {
      const { index, varName, varValue } = payload
      setVarStyle(varName, varValue)
      commit('SET_THEME_PREVIEW_CONFIG', { varName, varValue })
      commit('SET_SINGLE_COMPONENT_CONSOLE_STYLE', { index, varValue })
      const currentThemeInfo = state.themeUserConfig.filter(
        (item: Theme) => item.id === state.themePreviewId
      )[0]
      const config = {
        id: currentThemeInfo.id,
        name: currentThemeInfo.name,
        theme: Object.assign(
          {},
          currentThemeInfo.theme,
          state.themePreviewConfig
        ),
        update: getTime()
      }
      commit('UPDATE_THEME', config)
      postMessageToChild({
        type: 'setStyles',
        value: JSON.stringify({ varName, varValue })
      })
    },
    /**
     * 下载主题
     */
    downloadTheme(context, payload) {
      const { name, theme: styles } = payload
      let styleCode = `:root {`
      const jsonCode: Property = {}
      for (const value in styles) {
        styleCode += `\n ${value}: ${styles[value]};`
        jsonCode[scribeToHump(value)] = styles[value]
      }
      styleCode += '\n}'
      download(styleCode, `${name} - ${getTime()}.css`)
      download(JSON.stringify(jsonCode), `${name} - ${getTime()}.json`)
    }
  }
})

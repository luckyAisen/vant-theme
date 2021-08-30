import { createStore } from 'vuex'
import { AttrsGroup, Attr, Theme, Property } from '@/constant/interface'
import {
  setVarStyleByConfig,
  getComponentStyle,
  setVarStyle,
  getTime,
  getVarStyle,
  scribeToHump
} from '@/utils'
import {
  APP_THEME_USER_CONFIG,
  APP_THEME_PREVIEW_CONFIG,
  APP_OLD_PREVIEW_CONFIG,
  APP_THEME_PREVIEW_ID
} from '@/constant'
import useLocalStorage from '@/utils/useLocalStorage'
import { APP_STYLE_LIST as styleList } from '@/constant'
import download from '@/utils/download'
import { DEFAULT_COLOR } from '@/constant'

const storage = useLocalStorage()

export default createStore({
  state: {
    menuActive: 'Base',
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
     * 初始化当前主题
     */
    INIT_THEME_PREVIEW(state, newTheme = {}) {
      state.themePreviewConfig = newTheme
      storage.setItem(APP_THEME_PREVIEW_CONFIG, state.themePreviewConfig)
    },
    /**
     * 添加用户主题
     * @param state
     * @param payload
     */
    ADD_USER_THEME(state, payload) {
      state.themeUserConfig.push(payload)
      storage.setItem(APP_THEME_USER_CONFIG, state.themeUserConfig)
    },
    /**
     * 修改某个主题的信息
     * @param state
     * @param payload
     */
    UPDATE_SINGLE_USER_THEME(state, payload) {
      const { id, name, newTheme, oldTheme, update } = payload
      const config = state.themeUserConfig.filter(
        (item: Theme) => item.id === id
      )[0]
      config.name = name
      config.newTheme = newTheme
      config.oldTheme = oldTheme
      config.update = update
      storage.setItem(APP_THEME_USER_CONFIG, state.themeUserConfig)
    },
    /**
     * 删除某个主题
     * @param state
     * @param payload
     */
    DELETE_SINGLE_USER_THEME(state, payload) {
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
    // SET_THEME_USER_CONFIG(state, payload) {
    //   state.themeUserConfig = payload
    //   storage.setItem(APP_THEME_USER_CONFIG, state.themeUserConfig)
    // },
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
     * 设置当前主题id
     * @param state
     * @param id
     */
    SET_THEME_PREVIEW_ID(state, id) {
      state.themePreviewId = id
      storage.setItem(APP_THEME_PREVIEW_ID, id)
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
    menuChange({ commit, dispatch }, payload) {
      const { hash } = payload
      commit('SET_MENU_ACTIVE', hash)
      dispatch('getComponentConsoleStyle', hash)

      // postMessage
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
        newTheme = { ...DEFAULT_COLOR },
        oldTheme = {}
      } = payload
      return { id, name, update, newTheme, oldTheme }
    },
    /**
     * 添加主题
     * @param context
     * @param payload
     */
    async addTheme({ commit, dispatch }, payload) {
      const { type = 'add' } = payload
      const config = await dispatch('generateConfig', payload)
      commit('ADD_USER_THEME', config)
      if (type === 'add') {
        dispatch('useTheme', config)
      }
    },
    /**
     * 修改主题
     * @param context
     * @param payload
     */
    updateTheme({ commit }, payload) {
      commit('UPDATE_SINGLE_USER_THEME', payload)
    },
    /**
     * 删除主题
     * @param context
     * @param payload
     */
    async deleteTheme({ state, commit }, payload) {
      // await setVarStyleByConfig(state.oldThemePreviewConfig)
      commit('DELETE_SINGLE_USER_THEME', payload)
    },
    /**
     * 使用主题
     * @param context
     * @param payload
     */
    async useTheme({ state, commit }, payload) {
      // await setVarStyleByConfig(state.oldThemePreviewConfig)
      const { id, newTheme = {} } = payload
      commit('INIT_THEME_PREVIEW', newTheme)
      // commit('INIT_OLD_THEME_PREVIEW', oldTheme)
      commit('SET_THEME_PREVIEW_ID', id)
    },
    /**
     * 获取当前主题配置
     * @param context
     */
    async getThemePreviewConfig({ state }) {
      const config = state.themePreviewConfig
      // 设置主题样式
      await setVarStyleByConfig(config)
    },
    /**
     * 获取当前组件样式
     * @param param0
     * @param menuItemId
     */
    getComponentConsoleStyle({ commit }, menuItemId) {
      debugger
      const stylesItem = styleList.filter(item => item.id === menuItemId)[0]
      const componentStyle: AttrsGroup = getComponentStyle(
        stylesItem || { id: null, styles: [] }
      )
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
        newTheme: state.themePreviewConfig,
        update: getTime()
      }
      commit('UPDATE_SINGLE_USER_THEME', config)
      // dispatch('getComponentConsoleStyle')
    },
    /**
     * 下载主题
     */
    downloadTheme(context, payload) {
      const { name, newTheme: styles } = payload
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
  },
  modules: {}
})

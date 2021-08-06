import { createStore } from 'vuex'
import { styleList } from '@/config'
import { AttrsGroup, Attr, Theme } from '@/interface'
import {
  setVarStyleByConfig,
  getComponentStyle,
  setVarStyle,
  getTime,
  getVarStyle
} from '@/utils'
import useLocalStorage from '@/utils/useLocalStorage'
import {
  APP_THEME_USER_CONFIG,
  APP_THEME_PREVIEW_CONFIG,
  APP_OLD_PREVIEW_CONFIG,
  APP_THEME_PREVIEW_ID
} from '@/constant'
const storage = useLocalStorage()

export default createStore({
  state: {
    themeUserConfig: storage.getItem(APP_THEME_USER_CONFIG) || [],
    themePreviewConfig: storage.getItem(APP_THEME_PREVIEW_CONFIG) || {},
    oldThemePreviewConfig: storage.getItem(APP_OLD_PREVIEW_CONFIG) || {},
    themePreviewId: storage.getItem(APP_THEME_PREVIEW_ID),
    componentConsoleStyle: []
  },
  mutations: {
    /**
     * 初始化当前主题
     */
    INIT_THEME_PREVIEW(state, newTheme = {}) {
      state.themePreviewConfig = newTheme
      storage.setItem(APP_THEME_PREVIEW_CONFIG, state.themePreviewConfig)
    },
    /**
     * 初始化当前主题更改记录
     */
    INIT_OLD_THEME_PREVIEW(state, oldTheme = {}) {
      state.oldThemePreviewConfig = oldTheme
      storage.setItem(APP_OLD_PREVIEW_CONFIG, state.oldThemePreviewConfig)
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
     * 记录当期主题中更新前的属性名和属性值
     * @param state
     * @param payload
     */
    SET_OLD_THEME_PREVIEW_CONFIG(state, payload) {
      const { varName, oldVarValue } = payload
      state.oldThemePreviewConfig[varName] = oldVarValue
      storage.setItem(APP_OLD_PREVIEW_CONFIG, state.oldThemePreviewConfig)
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
    // init({ state, dispatch }) {
    // if (
    //   state.themeUserConfig.length === 0 &&
    //   Object.keys(state.themePreviewConfig).length === 0
    // ) {
    //   dispatch('addTheme', {
    //     name: `主题${state.themeUserConfig.length + 1}`
    //   })
    // }
    // },
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
        newTheme = {},
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
    deleteTheme({ commit }, payload) {
      commit('DELETE_SINGLE_USER_THEME', payload)
    },
    /**
     * 使用主题
     * @param context
     * @param payload
     */
    useTheme({ state, commit }, payload) {
      setVarStyleByConfig(state.oldThemePreviewConfig)
      const { id, newTheme = {}, oldTheme = {} } = payload
      // commit('SET_THEME_PREVIEW_CONFIG', newTheme)
      // commit('SET_OLD_THEME_PREVIEW_CONFIG', oldTheme)
      commit('INIT_THEME_PREVIEW', newTheme)
      commit('INIT_OLD_THEME_PREVIEW', oldTheme)
      commit('SET_THEME_PREVIEW_ID', id)
    },
    /**
     * 获取当前主题配置
     * @param context
     */
    getThemePreviewConfig({ state }) {
      const config = state.themePreviewConfig
      // 设置主题样式
      setVarStyleByConfig(config)
    },
    /**
     * 获取当前组件样式
     * @param param0
     * @param menuItemId
     */
    getComponentConsoleStyle({ commit }, menuItemId) {
      const stylesItem = styleList.filter(item => item.id === menuItemId)[0]
      const componentStyle: AttrsGroup = getComponentStyle(stylesItem)
      commit('SET_COMPONENT_CONSOLE_STYLE', componentStyle)
    },
    setComponentConsoleStyle({ state, commit }, payload) {
      const { index, varName, varValue } = payload
      const oldVarValue = getVarStyle(varName)
      setVarStyle(varName, varValue)
      commit('SET_THEME_PREVIEW_CONFIG', { varName, varValue })
      commit('SET_OLD_THEME_PREVIEW_CONFIG', { varName, oldVarValue })
      commit('SET_SINGLE_COMPONENT_CONSOLE_STYLE', { index, varValue })
      const currentThemeInfo = state.themeUserConfig.filter(
        (item: Theme) => item.id === state.themePreviewId
      )[0]
      const config = {
        id: currentThemeInfo.id,
        name: currentThemeInfo.name,
        newTheme: state.themePreviewConfig,
        oldTheme: state.oldThemePreviewConfig,
        update: getTime()
      }
      commit('UPDATE_SINGLE_USER_THEME', config)
      // dispatch('getComponentConsoleStyle')
    }
  },
  modules: {}
})

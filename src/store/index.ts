import { createStore } from 'vuex'
import { menuList, styleList } from '@/config'
import { AttrsGroup, AttrsItem } from '@/interface'
import { getAttrsGroup } from '@/utils'
import useLocalStorage from '@/utils/useLocalStorage'
import { APP_THEME_CONFIG } from '@/constant'
const storage = useLocalStorage()

export default createStore({
  state: {
    menuList: [...menuList],
    styleList: [...styleList],
    attrsList: [],
    themeConfig: []
  },
  getters: {
    menuList: state => state.menuList,
    styleList: state => state.styleList,
    currentAttrsGroup: state => state.attrsList
  },
  mutations: {
    SET_ATTRSLIST(state, payload) {
      state.attrsList = payload
      console.log(state.attrsList)
    },
    CHANGE_ATTR_VALUE(state, payload) {
      const { index, value } = payload
      ;(state.attrsList[index] as AttrsItem).varValue = value
    },
    SET_THEMECONFIG(state, config) {
      state.themeConfig = config
    }
  },
  actions: {
    getCurrentThemeConfig({ commit }) {
      const config = storage.getItem(APP_THEME_CONFIG)
      commit('SET_THEMECONFIG', config)
      for (const varName in config) {
        const varValue = config[varName]
        document.documentElement.style.setProperty(varName, varValue)
      }
    },
    transform({ commit }, menuItemId) {
      const stylesItem = styleList.filter(item => item.id === menuItemId)[0]
      const attrsList: AttrsGroup = getAttrsGroup(stylesItem)
      commit('SET_ATTRSLIST', attrsList)
    },
    changeAttrValue({ commit, dispatch }, payload) {
      commit('CHANGE_ATTR_VALUE', payload)
      const { varName, varValue } = payload
      document.documentElement.style.setProperty(varName, varValue)
      dispatch('setThemeConfig', payload)
      // const a = storage.getItem(APP_THEME_CONFIG)
    },
    setThemeConfig({ state }, payload) {
      const { varName, varValue } = payload
      const themeConfigStorage = storage.getItem(APP_THEME_CONFIG)
      const config = {
        [varName]: varValue
      }
      const totalConfig = { ...themeConfigStorage, ...config }
      state.themeConfig = totalConfig
      storage.setItem(APP_THEME_CONFIG, totalConfig)
      console.log(state.themeConfig)
    }
  },
  modules: {}
})

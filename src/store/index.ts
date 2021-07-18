import { createStore } from 'vuex'
import { menuList, styleList } from '@/config'
import { AttrsGroup, AttrsItem } from '@/interface'
import { getAttrsGroup } from '@/utils'

export default createStore({
  state: {
    menuList: [...menuList],
    styleList: [...styleList],
    attrsList: []
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
    }
  },
  actions: {
    transform({ commit }, menuItemId) {
      const stylesItem = styleList.filter(item => item.id === menuItemId)[0]
      const attrsList: AttrsGroup = getAttrsGroup(stylesItem)
      commit('SET_ATTRSLIST', attrsList)
    },
    changeAttrValue({ commit }, payload) {
      commit('CHANGE_ATTR_VALUE', payload)
      const { varName, varValue } = payload
      document.documentElement.style.setProperty(varName, varValue)
    }
  },
  modules: {}
})

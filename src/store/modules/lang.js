/**
 * 选择语言
 */
import * as types from '../mutation_types.js'
import langs from 'assets/lang'
import ls from 'store2'

const state = {
  lang: ls.get('lang') || 'cn'
}
state.string = langs[state.lang]
const mutations = {
  [types.CHANGE_LANG] (state, lang) {
    state.string = langs[lang]
    state.lang = lang
    ls.set('lang', lang)
  }
}

const actions = {
  fnChangeLang ({ commit }, lang) {
    commit(types.CHANGE_LANG, lang)
  }
}

const getters = {
  lang: state => state.lang,
  string: state => state.string
}

export default {
  state,
  mutations,
  actions,
  getters
}

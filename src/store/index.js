import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    energia_heroi: 100,
    energia_monstro: 100,
    golpe_monstro: 0,
    golpe_heroi: 0,
    cura_monstro: 0,
    cura_heroi: 0
  },
  getters: {
    energiaHeroi: state => {
      return state.energia_heroi
    },
    golpeHeroi: state => {
      return state.golpe_heroi
    },
    curaHeroi: state => {
      return state.cura_heroi
    },
    energiaMonstro: state => {
      return state.energia_monstro
    },
    golpeMonstro: state => {
      return state.golpe_monstro
    },
    curaMonstro: state => {
      return state.cura_monstro
    }
  },
  mutations: {
    ataqueHeroi(state, payload) {
      state.golpe_heroi = payload
      state.golpe_monstro = 0
      state.cura_heroi = 0
      state.energia_monstro = state.energia_monstro - payload
    },
    ataqueMonstro(state, payload) {
      state.golpe_monstro = payload
      state.golpe_heroi = 0
      state.cura_monstro = 0
      state.energia_heroi = state.energia_heroi - payload
    },
    curaHeroi(state, payload) {
      state.golpe_heroi = 0
      state.golpe_monstro = 0
      state.cura_heroi = payload
      state.energia_heroi = state.energia_heroi + payload
    },
    curaMonstro(state, payload) {
      state.golpe_monstro = 0
      state.golpe_heroi = 0
      state.cura_monstro = payload
      state.energia_monstro = state.energia_monstro + payload
    }
  },
  actions: {
    heroiAtacar(store) {
      const sangue_ataque = Math.floor(Math.random() * 10) + 1

      db.collection('batalha')
        .doc('current')
        .set(
          {
            capital: true
          },
          { merge: true }
        )

      store.commit('ataqueHeroi', sangue_ataque)
    },
    monstroAtacar(store) {
      const sangue_ataque = Math.floor(Math.random() * 10) + 1
      store.commit('ataqueMonstro', sangue_ataque)
    },
    heroiCurar(store) {
      const sangue_cura = Math.floor(Math.random() * 10) + 1
      store.commit('curaHeroi', sangue_cura)
    },
    monstroCurar(store) {
      const sangue_cura = Math.floor(Math.random() * 10) + 1
      store.commit('curaMonstro', sangue_cura)
    }
  },
  modules: {}
})

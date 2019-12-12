import Vue from 'vue'
import Vuex from 'vuex'

import {dbMenuAdd} from '../../firebase'

import 'firebase/firestore'
// import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItem: [],
    menuItems: []
  },
  mutations: {
    addItemToBasket(state, payload) {
      if (
        state.basketItem.find(res => {
          return res.name === payload.name;
        })
      ) {
        payload = state.basketItem.find(res => {
          return res.name === payload.name;
        });
        payload.quantity++
        payload.price = payload.quantity * payload.stablePrice;
      } else {
        state.basketItem.push({
          ...payload,
          quantity: 1,
          stablePrice: payload.price
        });
      }
    },
    setMenuItem(state) {
      let menuItem = []
      dbMenuAdd.onSnapshot((querySnapshot) => {
        menuItem = []
        querySnapshot.forEach(doc => {
          var itemEach = doc.data()
          menuItem.push(
            {
              id: doc.id,
              ...itemEach
            }
          )
        })
        state.menuItems = menuItem
      })
    }
  },
  actions: {
    setMenuItems(context) {
      context.commit('setMenuItem')
    }
  },
  modules: {
  },
  getters: {
    getMenuItem: state => {
      return state.menuItems
    }
  }
})

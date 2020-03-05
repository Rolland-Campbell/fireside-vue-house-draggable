import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movingTruck: [],
    rooms: [
      { id: 1, name: "Bedroom", items: [] },
      { id: 2, name: "Living Room", items: [] },
      { id: 3, name: "Kitchen", items: [] },
      { id: 4, name: "Bathroom", items: [] }

    ],
    items: [
      { id: 1, name: "bed", url: "fas fa-bed" },
      { id: 2, name: "tv", url: "fas fa-tv" },
      { id: 3, name: "couch", url: "fas fa-couch" },
      { id: 4, name: "toilet", url: "fas fa-toilet" },
      { id: 5, name: "fan", url: "fas fa-fan" },

    ]
  },
  mutations: {
    removeFromTruck(state, id) {
      state.items = state.items.filter(i => i.id !== id)
    },
    removeFromRoom(state, payload) {
      let room = state.rooms.find(r => r.id == payload.roomId)
      room.items = room.items.filter(i => i.id != payload.itemId)
    }
  },
  actions: {
  },
  modules: {
  }
})

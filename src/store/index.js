import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//id fullname group_id teacherids
export default new Vuex.Store({
  state: {
    User:{
      id:null,
      fullName:'',
      group:'',
      groupHeadId:null,
      groupId:null,
    }
  },
  getters: {
  },
  mutations: {
    setUser (state,payload) {
      state.User.id = payload.user.studentId
      state.User.groupId = payload.user.groupId
      state.User.groupHeadId = payload.user.groupHeadId
      state.User.group = payload.group
      state.User.fullName = payload.name
    }
  },
  actions: {
  },
  modules: {
  }
})

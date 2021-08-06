import axios from 'axios'

export const actions = {
  async getAllTodos({ commit }, data) {
    // Todo: get the user's to-do items
    let fakeTodoItem = { text: 'Fake to-do item' }
    commit('loadTodos', [fakeTodoItem])
  },

  async addTodo({ dispatch }, data) {
    // Todo: save a new to-do item
    await dispatch('getAllTodos', data.$auth)
  },

  async toggleTodo({ dispatch }, data) {
    // Todo: toggle to-do item completed/not completed
    await dispatch('getAllTodos', data.$auth)
  },

  async deleteTodo({ dispatch }, data) {
    // Todo: delete to-do item
    await dispatch('getAllTodos', data.$auth)
  }
}
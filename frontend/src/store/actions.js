import axios from 'axios'

export const actions = {
  async getAllTodos({ commit }, data) {
    let response = await axios.get('http://localhost:5000/api/todo', await addAuthHeader(data.$auth))
    
    if (response && response.data) {
        let updatedTodos = response.data
        commit('loadTodos', updatedTodos)
    }
  },

  async addTodo({ dispatch }, data) {
    await axios.post(
      'http://localhost:5000/api/todo',
      { text: data.text },
      await addAuthHeader(data.$auth))
    await dispatch('getAllTodos', { $auth: data.$auth })
  },
  
  async toggleTodo({ dispatch }, data) {
    await axios.post(
      'http://localhost:5000/api/todo' + data.id,
      { completed: data.completed },
      await addAuthHeader(data.$auth))
  
    await dispatch('getAllTodos', { $auth: data.$auth })
  },
  
  async deleteTodo({ dispatch }, data) {
    await axios.delete('http://localhost:5000/api/todo' + data.id, await addAuthHeader(data.$auth))
    await dispatch('getAllTodos', { $auth: data.$auth })
  }
  
}
const addAuthHeader = async (auth) => {
  return {
    headers: { 'Authorization': 'Bearer ' + await auth.getAccessToken() }
  }
}
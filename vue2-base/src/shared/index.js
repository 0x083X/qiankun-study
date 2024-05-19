import state from '../store'

class Shared {

  add () {
    console.log('基座的vuex的commit被触发')
    state.commit('increment')
  }

  getNum () {
    return state.state.count
  }
}

export default new Shared()
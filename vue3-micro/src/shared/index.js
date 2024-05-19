// 如果子应用单独启动，那么子应用的共享状态就是独立的，不会影响到其他子应用
class Shared {
  getNum () {
    return localStorage.getItem('count') || 0
  }

  add () {
    const count = localStorage.getItem('count') || 0
    localStorage.setItem('count', count + 1)
  }
}

// 如果不是单独启动，那么子应用的共享状态就是全局的，会影响到其他子应用
class SharedModule {
  // 先创建一个子应用单独启动的实例
  static shared = new Shared()
  // 获取实例
  static getShared () {
    return SharedModule.shared
  }
  // 重置实例
  static overrideShared (shared) {
    SharedModule.shared = shared
  }
}

export default SharedModule
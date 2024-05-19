/* eslint-disable */ 
import './public-path.js'
import { createApp } from 'vue'
import App from './App.vue'
import shareModule from './shared'
export async function bootstrap() {
}

function render (props) {
  const { container, shared = shareModule.getShared() } = props
  // 重写shared
  shareModule.overrideShared(shared)
  createApp(App).mount(container ? container.querySelector('#app1') : '#app1')
}

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}

// createApp(App).mount('#app')

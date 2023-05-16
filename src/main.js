import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 测试接口函数
// import {getApitest} from '@/apis/testApi';
// getApitest().then(res=>{
//     console.log(res);
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

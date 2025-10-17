import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Playground from './Playground.vue'

const app = createApp(Playground, {
  //Put things here!
})

app.mount('#app')

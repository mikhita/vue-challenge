import { createApp } from 'vue'
import store from './store'
import App from './App.vue' 
import {createRouter, createWebHashHistory} from "vue-router"
import HelloWorld from './components/HelloWorld.vue'



import './assets/main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
       {path: "/" , component: HelloWorld},
       {path: "/about" , component: HelloWorld},
    ]


})




const app = createApp(App)
app.use(router)


app.use(store)


app.mount("#app")


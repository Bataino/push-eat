import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Icon} from "@iconify/vue"
import BadgeDirective from 'primevue/badgedirective';
import store from '@/store'
import primevue from "primevue/config"

// import './assets/main.css'
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "primevue/resources/primevue.min.css"               //core css
import "primevue/resources/themes/saga-blue/theme.css"     //theme
import "primeicons/primeicons.css";
import './themes/bootstrap/bootstrap.css'
import './themes/bootstrap/bootstrap.min.css'
import './themes/styles.less'
import 'animate.css/animate.min.css'
import './../public/magic-master/assets/scss/magic.scss'

const app = createApp(App)

app
.use(router)
.use(store)
.use(primevue)
.component("icon", Icon)
.directive('badge', BadgeDirective);

app.mount('#app')

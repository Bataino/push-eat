import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Icon} from "@iconify/vue"
import BadgeDirective from 'primevue/badgedirective';

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

const app = createApp(App)

app.use(router)
.component("icon", Icon)
.directive('badge', BadgeDirective);

app.mount('#app')

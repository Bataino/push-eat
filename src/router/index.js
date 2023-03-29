import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/dish',
      name: 'dish',
      component: () => import('../views/DishView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/OrderRequestView.vue')
    },
    {
      path: '/order/success',
      name: 'orderSuccess',
      component: () => import('../views/OrderSuccessView.vue')
    },
    {
      path: '/order/failure',
      name: 'orderFailure',
      component: () => import('../views/OrderFailureView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckOutView.vue')
    },
    {
      path: '/checkout/complete',
      name: 'completeCheckout',
      component: () => import('../views/CheckOutDetails.vue')
    },
    {
      path: '/terms/service',
      name: 'serviceAgreement',
      component: () => import('../views/policy/ServiceAgreement.vue')
    },
    {
      path: '/terms/policy',
      name: 'privacyPolicy',
      component: () => import('../views/policy/PrivacyPolicy.vue')
    },
    {
      path: '/terms/refund',
      name: 'refundPolicy',
      component: () => import('../views/policy/RefundPolicy.vue')
    },
    

  ]
})

export default router

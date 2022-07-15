import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: { index: 1 },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/client',
    name: 'layout',
    meta: { index: 2 },
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { index: 3 },
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: '/panel',
        name: 'panel',
        meta: { index: 3 },
        component: () => import('@/views/panel/index.vue')
      },
      {
        path: '/func',
        name: 'func',
        meta: { index: 3 },
        component: () => import('@/views/func/index.vue')
      },
      {
        path: '/blacklist',
        name: 'blacklist',
        meta: { index: 3 },
        component: () => import('@/views/blacklist/index.vue')
      },
      {
        path: '/hero-data',
        name: 'hero-data',
        meta: { index: 3 },
        component: () => import('@/views/hero-data/index.vue')
      },
      {
        path: '/send-settings',
        name: 'send-settings',
        meta: { index: 3 },
        component: () => import('@/views/send-settings/index.vue')
      },
      {
        path: '/auto-game',
        name: 'auto-game',
        meta: { index: 3 },
        component: () => import('@/views/auto-game/index.vue')
      }
      
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
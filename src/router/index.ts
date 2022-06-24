import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import('../views/especialidades/especialidadeView-list.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/convenios/convenioView-list.vue')
  },
  {
    path: '/pacientes',
    name: 'paciente',
    component: () => import('../views/pacientes/pacienteView-list.vue')
  },
  {
    path: '/medicos',
    name: 'medico',
    component: () => import('../views/medicos/medicoView-list.vue')
  },
  {
    path: '/secretarias',
    name: 'secretaria',
    component: () => import('../views/secretarias/secretariaView-list.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

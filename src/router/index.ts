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
    path: '/especialidades',
    name: 'especialidade',
    component: () => import('../views/especialidades/especialidadeView-list.vue')
  },
  {
    path: '/especialidades-new',
    name: 'especialidade-new',
    component: () => import('../views/especialidades/especialidadeView-new.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/convenios/convenioView-list.vue')
  },
  {
    path: '/convenios-new',
    name: 'convenios-new',
    component: () => import('../views/convenios/convenioView-new.vue')
  },
  {
    path: '/pacientes',
    name: 'paciente',
    component: () => import('../views/pacientes/pacienteView-list.vue')
  },
  {
    path: '/pacientes-new',
    name: 'paciente-new',
    component: () => import('../views/pacientes/pacienteView-new.vue')
  },
  {
    path: '/medicos',
    name: 'medico',
    component: () => import('../views/medicos/medicoView-list.vue')
  },
  {
    path: '/medicos-new',
    name: 'medico-new',
    component: () => import('../views/medicos/medicoView-new.vue')
  },
  {
    path: '/secretarias',
    name: 'secretaria',
    component: () => import('../views/secretarias/secretariaView-list.vue')
  },
  {
    path: '/secretarias-new',
    name: 'secretaria-new',
    component: () => import('../views/secretarias/secretariaView-new.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

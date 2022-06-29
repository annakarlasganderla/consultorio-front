<template>
  <nav
    class="navbar has-background-link-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item is-size-4" href="/"> Consultorio </a>
    </div>
  </nav>

  <div class="container columns">
    <aside class="menu column is-one-quarter pt-6">
      <p class="menu-label pl-5"><router-link to="/">Home</router-link></p>
      <p class="menu-label pl-5">Agenda</p>
      <ul class="menu-list pl-6 has-text-weight-semibold">
        <li><router-link to="/agendamento">Agendamentos</router-link></li>
        <li><router-link to="/historico">Histórico</router-link></li>
      </ul>
      <p class="menu-label pl-5">Pessoa</p>
      <ul class="menu-list pl-6 has-text-weight-semibold">
        <li><router-link to="/pacientes">Pacientes</router-link></li>
        <li><router-link to="/medicos">Médicos</router-link></li>
        <li><router-link to="/secretarias">Secretaria</router-link></li>
      </ul>
      <p class="menu-label pl-5">Administrativo</p>
      <ul class="menu-list pl-6 has-text-weight-semibold">
        <li><router-link to="/especialidades">Especialidades</router-link></li>
        <li><router-link to="/convenio">Convênios</router-link></li>
      </ul>
    </aside>

    <div class="column is-fullwidth">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      
    }
  }
}
/*
.sideBar-container {
  height: 100vh;
  width: 20%;
  padding: 5rem 3rem;
} */

p {
  text-align: left;
}

li {
  text-align: left;
}
</style>

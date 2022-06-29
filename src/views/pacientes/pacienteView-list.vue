<template>
  <div class="paciente">
    <section class="hero">
      <div class="hero-body py-5 pt-6">
        <p class="title">Pacientes</p>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body columns py-4">
        <div class="column is-four-fifths">
          <input
            class="input is-link"
            type="text"
            placeholder="Pesquisa por nome"
          />
        </div>
        <div class="column buttons is-one-fifth">
         <button class="button is-link">
            <router-link to="/pacientes-new">+ Cadastrar novo paciente</router-link>

          </button>
        </div>
      </div>
    </section>

    <div class="is-flex is-justify-content-start ml-6 my-5">
      <table class="table table is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo de atendimento</th>
            <th>Convenio</th>
            <th>Sexo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Fulano da silva</th>
            <th>Particular</th>
            <th>-</th>
            <th>Feminino</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>Fulano da silva</th>
            <th>Particular</th>
            <th>-</th>
            <th>Feminino</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>Fulano da silva</th>
            <th>Convenio</th>
            <th>Unimed</th>
            <th>Feminino</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>


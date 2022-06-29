<template>
  <div class="convenio">
    <section class="hero">
      <div class="hero-body py-5 pt-6">
        <p class="title">Convenios</p>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body columns py-4">
        <div class="column is-four-fifths">
          <input class="input is-link" type="text" placeholder="Pesquisa por nome" />
        </div>
        <div class="column buttons is-one-fifth">
          <button class="button is-link">
            <router-link to="/convenios-new">+ Cadastrar novo convenio</router-link>

          </button>
        </div>
      </div>
    </section>

    <div class="is-flex is-justify-content-start ml-6 my-5">
      <table class="table table is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cadastrado em</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Cardiologista</th>
            <th>R$ 100,00</th>
            <th>12/05/2021</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>Neurologista</th>
            <th>R$ 100,00</th>
            <th>12/05/2021</th>

            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>Otorrinolaringologista</th>
            <th>R$ 100,00</th>
            <th>12/05/2021</th>

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
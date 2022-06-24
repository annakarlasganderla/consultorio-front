<template>
  <div class="medico">
    <section class="hero">
      <div class="hero-body py-5 pt-6">
        <p class="title">Medicos</p>
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
          <button class="button is-link">+ Cadastrar novo medico</button>
        </div>
      </div>
    </section>

    <div class="is-flex is-justify-content-start ml-6 my-5">
      <table class="table table is-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            <th>Especialidade</th>
            <th>Valor consulta</th>
            <th>Consultorio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Fulano da silva</th>
            <th>123.000.458-86</th>
            <th>Cardiologista</th>
            <th>R$ 400,00</th>
            <th>Vila mariana</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>Fulano da silva</th>
            <th>123.000.458-86</th>
            <th>Cardiologista</th>
            <th>R$ 400,00</th>
            <th>Vila mariana</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined">Detalhar</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>Fulano da silva</th>
            <th>123.000.458-86</th>
            <th>Cardiologista</th>
            <th>R$ 400,00</th>
            <th>Vila mariana</th>
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


<template>
  <div class="especialidade">
    <section class="hero">
      <div class="hero-body py-5 pt-6">
        <p class="title">Especialidades</p>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body columns py-4">
        <div class="column is-four-fifths">
          <input class="input is-link" type="text" placeholder="Pesquisa por nome" />
        </div>
        <div class="column buttons is-one-fifth">
          <button class="button is-link">
            <router-link to="/especialidades-new">+ Cadastrar nova especialidade</router-link>

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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in especialidadeList" :key="item.id">
            <th>{{ item.nome }}</th>
            <th>{{ item.cadastro }}</th>
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

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Especialidade } from '@/model/especialidade.model'
import { EspecialidadeClient } from '@/client/especialidade.client'

export default class EspecialidadeList extends Vue {
  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Especialidade> = new PageResponse()
  especialidadeList: Especialidade[] = []
  especialidadeClient!: EspecialidadeClient
  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient()
    this.getEspecialidade()
  }
  getEspecialidade(): void {
    this.especialidadeClient.getEspecialidades(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.especialidadeList = this.pageResponse.content
          console.log(this.especialidadeList)
        },
        error => console.log(error)
      )
  }
}
</script>

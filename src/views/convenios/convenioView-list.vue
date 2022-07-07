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

            <th>Valor</th>
            <th>Cadastrado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in convenioList" :key="item.id">
            <th>{{ item.nome }}</th>
            <th>{{ `R$ ${item.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }}</th>
            <th>{{ item.cadastro }}</th>
            <td>
              <div class="column buttons is-one-fifth">
                <button class="button is-link is-outlined" @click="getConvenioById(item.id)">Detalhar</button>
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

import { Convenio } from '@/model/convenio.model'
import { ConvenioClient } from '@/client/convenio.client'

export default class ConvenioList extends Vue {
  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Convenio> = new PageResponse()
  convenioList: Convenio[] = []
  conenioClient!: ConvenioClient
  public mounted(): void {
    this.conenioClient = new ConvenioClient()
    this.getConvenios()
  }
  getConvenios(): void {
    this.conenioClient.getConvenios(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.convenioList = this.pageResponse.content

        },
        error => console.log(error)
      )
  }

  getConvenioById(idCovenio: number): void {
    this.$router.push({ name: 'convenio-detalhar', params: { id: idCovenio, model: 'detalhar' } })
  }

}
</script>

<template>
  <div class="medico is-fullwidth">
    <section class="hero">
      <div class="hero-body py-5 pt-6">
        <p class="title">Medicos</p>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body columns py-4">
        <div class="column is-four-fifths">
          <input class="input is-link" type="text" placeholder="Pesquisa por nome" />
        </div>
        <div class="column buttons is-one-fifth">
          <button class="button is-link">
            <router-link to="/medicos-new">+ Cadastrar novo medico</router-link>

          </button>
        </div>
      </div>
    </section>

    <div class="is-flex is-justify-content-start ml-6 my-5">
      <table class="table table is-fullwidth">
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
          <tr v-for="item in medicoList" :key="item.id">
            <th>{{ item.nome }}</th>
            <th>{{ item.crm }}</th>
            <th>{{ item.especialidade.nome }}</th>
            <th>{{ item.valorConsulta }}</th>
            <th>{{ item.consultorio }}</th>
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

import { PageRequest } from '@/model/page/page-request';
import { PageResponse } from '@/model/page/page-response';

import { Medico } from '@/model/medico.model';
import { MedicoClient } from '@/client/medico.client';

export default class MedicoList extends Vue {
  pageRequest: PageRequest = new PageRequest();
  pageResponse: PageResponse<Medico> = new PageResponse();
  medicoList: Medico[] = []
  medicoClient!: MedicoClient

  public mounted(): void {
    this.medicoClient = new MedicoClient();
    this.getMedicos()
  }

  public getMedicos(): void {
    this.medicoClient.getMedicos(this.pageRequest).then((success) => {
      this.pageResponse = success;
      this.medicoList = this.pageResponse.content

    }).catch((error) => { console.log(error) })
  }

}


</script>


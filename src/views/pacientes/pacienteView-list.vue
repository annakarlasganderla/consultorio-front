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
          <input class="input is-link" type="text" placeholder="Pesquisa por nome" />
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
          <tr v-for="item in pacienteList" :key="item.id">
            <th>{{ item.nome }}</th>
            <th>{{ item.tipoAtendimento }}</th>
            <th>{{ item.convenio }}</th>
            <th>{{ item.sexo }}</th>
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

import { Paciente } from '@/model/paciente.model';
import { PacienteClient } from '@/client/paciente.client';

export default class PacienteList extends Vue {
  pageRequest: PageRequest = new PageRequest();
  pageResponse: PageResponse<Paciente> = new PageResponse();

  pacienteList: Paciente[] = []
  pacienteClient!: PacienteClient

  public mounted(): void {
    this.pacienteClient = new PacienteClient();
    this.getPacientes();
  }

  public getPacientes(): void {
    this.pacienteClient.getPacientes(this.pageRequest).then((success) => {
      this.pageResponse = success;
      this.pacienteList = this.pageResponse.content
    }).catch((error) => { console.log(error) })
  }

}

</script>


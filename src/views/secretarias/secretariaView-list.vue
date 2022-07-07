<template>
  <div class="secretaria">
    <section class="hero">
      <div class="hero-body py-5 pt-6">
        <p class="title">Secretarias</p>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body columns py-4">
        <div class="column is-four-fifths">
          <input class="input is-link" type="text" placeholder="Pesquisa por nome" />
        </div>
        <div class="column buttons is-one-fifth">
          <button class="button is-link">
            <router-link to="/secretarias-new">+ Cadastrar nova secretaria</router-link>

          </button>
        </div>
      </div>
    </section>

    <div class="is-flex is-justify-content-start ml-6 my-5">
      <table class="table table is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in secretariaList" :key="item.id">
            <th>{{ item.nome }}</th>
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

import { Secretaria } from '@/model/secretaria.model';
import { SecretariaClient } from '@/client/secretaria.client';

export default class SecretariaList extends Vue {
  pageRequest: PageRequest = new PageRequest();
  pageResponse: PageResponse<Secretaria> = new PageResponse();

  secretariaList: Secretaria[] = []
  secretariaClient!: SecretariaClient

  public mounted(): void {
    this.secretariaClient = new SecretariaClient();
    this.getSecretarias()
  }

  public getSecretarias(): void {
    this.secretariaClient.getSecretarias(this.pageRequest).then((success) => {
      this.pageResponse = success;
      this.secretariaList = this.pageResponse.content
    }).catch((error) => { console.log(error) })
  }

}

</script>


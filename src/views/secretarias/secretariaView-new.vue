<template>
    <div class="columns">
        <div class="column is-flex is-justify-content-flex-start is-size-3 m-4">
            Cadastrar Secretaria
        </div>
    </div>

    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete"></button>
                {{ notification.mensagem }}
            </div>
        </div>
    </div>

     <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome da secretaria</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.nome" placeholder="Nome da secretaria">
            </div>
        </div>
    </div>


    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Salário</label>
            <div class="control">
                <input class="input is-link" type="number" step=0.01 v-model="secretaria.salario" placeholder="R$">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Data da contratação</label>
            <div class="control">
                <input class="input is-link" type="datetime-local" v-model="secretaria.dataContratacao" placeholder="Data da contratação">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">PIS</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.pis" placeholder="PIS">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-flex is-justify-content-flex-start is-size-4 m-4">
            Dados pessoais
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <label class="label">Telefone</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.telefone" placeholder="Telefone">
            </div>
        </div>

        <div class="column">
            <label class="label">Celular</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.celular" placeholder="Celular">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nacionalidade</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.nacionalidade" placeholder="Nacionalidade">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <label class="label">CPF</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.cpf" placeholder="CPF">
            </div>
        </div>

        <div class="column">
            <label class="label">RG</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.rg" placeholder="RG">
            </div>
        </div>
    </div>

    <div class="campo-select columns">
        <div class="select">
            <select v-model="secretaria.sexo">
                <option>Selecione o sexo</option>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outros">Outros</option>
            </select>
        </div>
    </div>


    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">E-mail</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.email" placeholder="E-mail">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome de login</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="secretaria.login" placeholder="Nome de login">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Senha</label>
            <div class="control">
                <input class="input is-link" type="password" v-model="secretaria.senha" placeholder="Senha">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-8"></div>
        <div class="column is-2">
            <a href="-1" class="button is-fullwidth">Voltar</a>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-link" @click="postSecretaria()">Cadastrar</button>
        </div>
    </div>
</template>


<script lang="ts">

import { Vue } from 'vue-class-component';

import { Notification } from '@/model/notification.model';

import { Secretaria } from '@/model/secretaria.model';
import { SecretariaClient } from '@/client/secretaria.client';


export default class PacienteForm extends Vue {

    secretariaClient!: SecretariaClient
    secretaria: Secretaria = new Secretaria()
    notification: Notification = new Notification()

    public mounted(): void {
        this.secretariaClient = new SecretariaClient()
    }

    public postSecretaria(): void {
        this.secretariaClient.postSecretaria(this.secretaria).then(() => {
            this.notification = this.notification.new(true, 'notification is-success', 'Secretaria cadastrado com sucesso!!')
            this.onClickLimpar()
        }).catch((error) => {
            console.log(error);
            this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar secretaria!!')
            this.onClickLimpar()
        })
    }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.secretaria = new Secretaria()
    }

}

</script>
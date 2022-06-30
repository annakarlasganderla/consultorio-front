<template>
    <div class="columns">
        <div class="column is-flex is-justify-content-flex-start is-size-3 m-4">
            Cadastrar Paciente
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
            <label class="label">Nome do paciente</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.nome" placeholder="Nome do paciente">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="select">
            <select v-model="paciente.tipoAtendimento">
                <option>Selecione o tipo de atendimento</option>
                <option value="particular">Particular</option>
                <option value="convenio">Convenio</option>
            
            </select>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Numero do cartão do convenio</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.numeroCartaoConvenio" placeholder="0000 0000 0000 0000">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Data de vencimento do cartão</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.dataVencimento" placeholder="Nome do paciente">
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
                <input class="input is-link" type="text" v-model="paciente.telefone" placeholder="Telefone">
            </div>
        </div>

        <div class="column">
            <label class="label">Celular</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.celular" placeholder="Celular">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nacionalidade</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.nacionalidade" placeholder="Nacionalidade">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <label class="label">CPF</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.cpf" placeholder="CPF">
            </div>
        </div>

        <div class="column">
            <label class="label">RG</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.rg" placeholder="RG">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="select">
            <select v-model="paciente.sexo">
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
                <input class="input is-link" type="text" v-model="paciente.email" placeholder="E-mail">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome de login</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="paciente.login" placeholder="Nome de login">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Senha</label>
            <div class="control">
                <input class="input is-link" type="password" v-model="paciente.senha" placeholder="Senha">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-8"></div>
        <div class="column is-2">
            <a href="-1" class="button is-fullwidth">Voltar</a>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-link" @click="postPaciente()">Cadastrar</button>
        </div>
    </div>

</template>

<script lang="ts">

import { Vue } from 'vue-class-component';

import { Notification } from '@/model/notification.model';

import { Paciente } from '@/model/paciente.model';
import { PacienteClient } from '@/client/paciente.client';

import { Convenio } from '@/model/convenio.model';
import { ConvenioClient } from '@/client/convenio.client';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class PacienteForm extends Vue {

    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Convenio> = new PageResponse()

    pacienteClient!: PacienteClient
    paciente: Paciente = new Paciente()
    notification: Notification = new Notification()

    convenio: Convenio = new Convenio()
    convenioClient!: ConvenioClient
    convenioList: Convenio[] = []

    public mounted(): void {
        this.pacienteClient = new PacienteClient()
        this.convenioClient = new ConvenioClient()
        this.getConvenios()
    }

    public postPaciente(): void {
        this.pacienteClient.postPaciente(this.paciente).then(() => {
            this.notification = this.notification.new(true, 'notification is-success', 'Paciente cadastrado com sucesso!!')
            this.onClickLimpar()
        }).catch((error) => {
            console.log(error);
            this.notification = this.notification.new(true, 'notification is-success', 'Erro ao cadastrar paciente!!')
            this.onClickLimpar()
        })
    }

    public getConvenios(): void {
        this.convenioClient.getConvenios(this.pageRequest)
            .then(
                success => {
                    this.pageResponse = success
                    this.convenioList = this.pageResponse.content

                },
                error => console.log(error)
            )
    }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.paciente = new Paciente()
    }


}

</script>
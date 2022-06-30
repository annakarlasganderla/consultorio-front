<template>
    <div class="columns">
        <div class="column is-flex is-justify-content-flex-start is-size-3 m-4">
            Cadastrar Médico
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
            <label class="label">Nome do medico</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.nome" placeholder="Nome do medico">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">CRM</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.crm" placeholder="CRM">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Consultorio</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.consultorio" placeholder="Consultorio">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Porcentagem de participação</label>
            <div class="control">
                <input class="input is-link" type="number" v-model="medico.porcentagemParticipacao"
                    placeholder="Porcentagem de participação" step=0.01>
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Valor da consulta</label>
            <div class="control">
                <input class="input is-link" type="number" v-model="medico.valorConsulta"
                    placeholder="Valor da consulta" step=0.01 >
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="select">
            <select v-model="medico.especialidade">
                <option>Selecione a especialidade</option>
                <option v-for="item in especialidadeList" :key="item.id" :value="item">{{ item.nome }}</option>
            </select>
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
                <input class="input is-link" type="text" v-model="medico.telefone" placeholder="Telefone">
            </div>
        </div>

        <div class="column">
            <label class="label">Celular</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.celular" placeholder="Celular">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nacionalidade</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.nacionalidade" placeholder="Nacionalidade">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <label class="label">CPF</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.cpf" placeholder="CPF">
            </div>
        </div>

        <div class="column">
            <label class="label">RG</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.rg" placeholder="RG">
            </div>
        </div>
    </div>

   <div class="columns">
        <div class="select">
            <select v-model="medico.sexo">
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
                <input class="input is-link" type="text" v-model="medico.email" placeholder="E-mail">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome de login</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="medico.login" placeholder="Nome de login">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Senha</label>
            <div class="control">
                <input class="input is-link" type="password" v-model="medico.senha" placeholder="Senha">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-8"></div>
        <div class="column is-2">
            <a href="-1" class="button is-fullwidth">Voltar</a>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-link" @click="postMedico()">Cadastrar</button>
        </div>
    </div>


</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Medico } from '@/model/medico.model';
import { Notification } from '@/model/notification.model';
import { MedicoClient } from '@/client/medico.client';
import { Especialidade } from '@/model/especialidade.model';
import { EspecialidadeClient } from '@/client/especialidade.client';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class MedicoForm extends Vue {

    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Especialidade> = new PageResponse()

    medicoClient!: MedicoClient
    medico: Medico = new Medico()
    notification: Notification = new Notification()

    especialidade: Especialidade = new Especialidade()
    especialidadeClient!: EspecialidadeClient
    especialidadeList: Especialidade[] = []

    public mounted(): void {
        this.medicoClient = new MedicoClient()
        this.especialidadeClient = new EspecialidadeClient()
        this.getEspecialidade()
    }

    public postMedico(): void {
        this.medicoClient.postMedico(this.medico).then(() => {
            this.notification = this.notification.new(true, 'notification is-success', 'Médico cadastrado com sucesso!!')
            this.onClickLimpar();
        }).catch((error) => {
            console.log(error);
            this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar medico')
            this.onClickLimpar();
        })
    }

    public getEspecialidade(): void {
        this.especialidadeClient.getEspecialidades(this.pageRequest)
            .then(
                success => {
                    this.pageResponse = success
                    this.especialidadeList = this.pageResponse.content
                },
                error => console.log(error)
            )
    }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.medico = new Medico()
    }

}

</script>
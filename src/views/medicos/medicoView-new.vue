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
                <input class="input is-link" type="number" v-model="medico.porcetangem_participacao"
                    placeholder="Porcentagem de participação">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Valor da consulta</label>
            <div class="control">
                <input class="input is-link" type="number" v-model="medico.valor_consulta"
                    placeholder="Valor da consulta">
            </div>
        </div>
    </div>

    <div class="columns">
    <label class="label">Valor da consulta</label>
        <div class="select">
        
            <select>
                <option>Selecione a especialidade</option>
                <option>With options</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Medico } from '@/model/medico.model';
import { Notification } from '@/model/notification.model';
import { MedicoClient } from '@/client/medico.client';

export default class MedicoForm extends Vue {
    medicoClient!: MedicoClient
    medico: Medico = new Medico()
    notification: Notification = new Notification()

    public mounted(): void {
        this.medicoClient = new MedicoClient()
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

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.medico = new Medico()
    }

}

</script>
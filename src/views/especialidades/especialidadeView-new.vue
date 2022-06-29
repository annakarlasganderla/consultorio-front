<template>
    <div class="columns">
        <div class="column is-flex is-justify-content-flex-start is-size-3 m-4">
            Cadastrar Especialidade
        </div>
    </div>

    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete" ></button>
                {{ notification.mensagem }}
            </div>
        </div>
    </div>

    

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome</label>
            <div class="control">
                <input class="input is-link" type="text" v-model="especialidade.nome" placeholder="Nome da Especialidade">
            </div>
        </div>
    </div>

     <hr />

    <div class="columns">
        <div class="column is-8"></div>
        <div class="column is-2">
            <a href="/especialidade/listar" class="button is-fullwidth">Voltar</a>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-link" @click="onClickCadastrar()">Success</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Especialidade } from '@/model/especialidade.model'
    import { Notification } from '@/model/notification.model'
    import { EspecialidadeClient } from '@/client/especialidade.client'
    
    export default class EspecialidadeForm extends Vue {
         especialidadeClient!: EspecialidadeClient
         especialidade : Especialidade = new Especialidade()
         notification : Notification = new Notification()
    
        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
        }
        
        public onClickCadastrar(): void {
            this.especialidadeClient.postEspecialidade(this.especialidade)
                .then(
                () => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar especialidade: ' + error)
                    this.onClickLimpar()
                })
        }
        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }
        public onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }
    }
</script>

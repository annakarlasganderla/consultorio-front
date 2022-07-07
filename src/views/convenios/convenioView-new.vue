<template>
    <div class="columns">
        <div class="column is-flex is-justify-content-flex-start is-size-3 m-4">
            Cadastrar Convênio
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
                <input class="input is-link" type="text" v-model="convenio.nome" placeholder="Nome do convenio">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Valor</label>
            <div class="control">
                <input class="input is-link" type="number" v-model="convenio.valor" placeholder="Valor do convenio">
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-8"></div>
        <div class="column is-2">
            <a href="-1" class="button is-fullwidth">Voltar</a>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-link" @click="postConvenio()">Cadastrar</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Convenio } from '@/model/convenio.model'
    import { Notification } from '@/model/notification.model'
    import { ConvenioClient } from '@/client/convenio.client'
import { Prop } from 'vue-property-decorator';
    
    export default class ConvenioForm extends Vue {
         convenioClient!: ConvenioClient
         convenio : Convenio = new Convenio()
         notification : Notification = new Notification()

         @Prop({type: Number, required: false})
         readonly id!: number

         @Prop({type:String, required: false})
         readonly model!: string

        public mounted(): void {
            this.convenioClient = new ConvenioClient()

            if (this.id) {
                this.getById(this.id)
            }

            console.log(this.id)
            console.log(this.model)
        }
        
        public postConvenio(): void {
            this.convenioClient.postConvenio(this.convenio)
                .then(() => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Convênio Cadastrado com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar convênio')
                    console.error(error)
                    this.onClickLimpar()
                })
        }


        public getById(id: number): void {
            this.convenioClient.getConveniosById(id).then((success) => {this.convenio = success})
        }

        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }
        public onClickLimpar(): void {
            this.convenio = new Convenio()
        }
    }
</script>

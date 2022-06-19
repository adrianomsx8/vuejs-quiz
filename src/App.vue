<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>-->

<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Quiz</a>
      </div>
    </nav>

    <div class="container">
      <ul>
        <li>
          {{errors}}
        </li>
      </ul>
      <form @submit.prevent="salvar">

        <label>Questão</label>
        <input type="text" placeholder="Questão" v-model="pergunta.questao">
        <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

        <tr>
          <th>Questão</th>
          <th>Data da Criação</th>
          <th>Data da Modificação</th>
        </tr>

        </thead>

        <tbody>

        <tr v-for="pergunta of perguntas" :key="pergunta.id">

          <td>{{pergunta.questao}}</td>
          <td>{{pergunta.created_at}}</td>
          <td>{{pergunta.updated_at}}</td>
          <td>
            <button @click='editar(pergunta)' class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
            <button @click='remover(pergunta)' class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
          </td>

        </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>

<script>

import Pergunta from './services/perguntas'

  export default {

    data(){
      return {
        pergunta :{
          //id: '',
          questao : ''
        },
        perguntas :[],
        errors: []
      }
    },

    mounted() {
       this.listar()
    },

    methods:{

      listar(){
        Pergunta.listar().then(resposta => {
          this.perguntas = resposta.data.perguntas
        })
      },

      salvar(){
       // console.log(this.pergunta);


        Pergunta.salvar(this.pergunta).then(resposta =>{
          this.pergunta = {}
          alert('salvo com sucesso');
          this.listar()
          this.errors = []
        }).catch(e => {
          this.errors = e.response.data.message;
        })

      /*  if(!this.pergunta.id){

            Pergunta.salvar(this.pergunta).then(resposta =>{
              this.pergunta = {}
              alert('salvo com sucesso');
              this.listar()
              this.errors = []
            }).catch(e => {
              this.errors = e.response.data.message;
            })

        }else{
          Pergunta.atualizar(this.pergunta).then(resposta =>{
            this.pergunta = {}
            alert('Atualizado com sucesso');
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.message;
          })
        }
        */
      },

      editar(pergunta){
         this.pergunta = pergunta
      },

      remover(pergunta){
         if (confirm('Deseja excluir a pergunta?')){
           Pergunta.apagar(pergunta).then(resposta => {
             this.listar()
             this.errors = []
           }).catch(e => {
             this.errors = e.response.data.message;
           })
         }


      }

    }
  }
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

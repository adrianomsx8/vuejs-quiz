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

      <form>

        <label>Nome</label>
        <input type="text" placeholder="Nome">
        <label>Quantidade</label>
        <input type="number" placeholder="QTD">
        <label>Valor</label>
        <input type="text" placeholder="Valor">

        <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

        <tr>
          <th>NOME</th>
          <th>QTD</th>
          <th>VALOR</th>
          <th>OPÇÕES</th>
        </tr>

        </thead>

        <tbody>

        <tr>

          <td>Arduino</td>
          <td>100</td>
          <td>50.00</td>
          <td>
            <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
            <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
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
    mounted() {
      Pergunta.listar().then(resposta => {
        console.log(resposta)
      })
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

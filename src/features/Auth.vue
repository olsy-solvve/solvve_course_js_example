<script>
  export default {
    data() {
      return {
        display: false,
      }
    },
    methods: {
      openDialod(){
        this.display = true;
      }
    }
  }
</script>

<template>
  <main>
    <RouterLink to="/home">To Link Home</RouterLink>
    <br>
    <pButton label="open dialog" @click="openDialod" class="p-button-danger"></pButton>
    <pDialog header="Header" v-model:visible="display" >Dialog</pDialog>
  </main>
</template>

<style></style>

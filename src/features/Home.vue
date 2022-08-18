<script>
import { getPeople } from "@/api/";

export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    this.list = await getPeople();
  },
};
</script>

<template>
  <main>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </li>
    </ul>
    <RouterLink to="/auth">To Link Auth</RouterLink>
  </main>
</template>

<style></style>

<template>
  <v-row class="ma-5" align="center" justify="center">
    <Heroi />
    <Monstro />
  </v-row>
</template>

<script>
import Heroi from '@/components/Heroi.vue'
import Monstro from '@/components/Monstro.vue'
export default {
  components: {
    Heroi,
    Monstro
  },
  data: () => ({})
}
</script>

<style></style>

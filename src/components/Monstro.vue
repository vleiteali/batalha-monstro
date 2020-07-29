<template>
  <v-card class="ma-3" max-width="400">
    <v-card-title class="green lighten-2">
      <span class="display-1 font-weight-light">Monstro</span>
    </v-card-title>
    <v-img
      class="white--text align-end"
      height="400px"
      src="@/assets/img/monstro.jpg"
    ></v-img>

    <v-card-subtitle class="mt-2">
      <v-row class="mx-2 mb-1 mt-0" align="center" justify="space-between">
        <span v-if="golpeMonstro > 0" class="overline green--text"
          >+{{ golpeMonstro }} ataque</span
        >
        <span v-if="cura > 0" class="overline blue--text"
          >+{{ cura }} cura</span
        >
        <span></span>
        <span v-if="golpeHeroi > 0" class="overline red--text"
          >-{{ golpeHeroi }} golpe</span
        >
      </v-row>

      <v-progress-linear
        color="green darken-2"
        height="20"
        :value="energia"
        striped
      >
        <span class="title">{{ energia }} %</span>
      </v-progress-linear>
    </v-card-subtitle>

    <v-card-actions>
      <v-row class="mx-2 mb-2 mt-0" align="center" justify="space-between">
        <v-btn color="light-green darken-2" @click="atacar">
          <v-icon left>whatshot</v-icon>Atacar
        </v-btn>
        <v-btn color="pink darken-1" @click="curar" dark>
          <v-icon left>favorite</v-icon>Curar
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({ energia: 'energiaMonstro', cura: 'curaMonstro' }),
    ...mapGetters(['golpeHeroi', 'golpeMonstro'])
  },
  methods: {
    ...mapActions(['monstroAtacar', 'monstroCurar']),
    atacar() {
      this.monstroAtacar()
    },
    curar() {
      this.monstroCurar()
    }
  }
}
</script>

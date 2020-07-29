<template>
  <v-app>
    <v-app-bar app color="light-blue accent-2" dark>
      <div class="d-flex align-center headline text-uppercase">
        Batalha
        <span class="font-weight-light ml-3">Monstro</span>
      </div>

      <v-spacer></v-spacer>

      <router-link :to="{name:'instrucoes'}">
        <v-btn class="ml-3" color="indigo">
          <v-icon left>info</v-icon>
          <span class="mr-2">Instruções</span>
        </v-btn>
      </router-link>

      <router-link :to="{name:'lobby'}">
        <v-btn class="ml-3" color="indigo">
          <v-icon left>home</v-icon>
          <span class="mr-2">Lobby</span>
        </v-btn>
      </router-link>

      <router-link :to="{name:'batalha'}">
        <v-btn class="ml-3" color="red darken-2">
          <v-icon left>videogame_asset</v-icon>
          <span class="mr-2">Batalha</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
<style>
a {
  text-decoration: none;
}
</style>

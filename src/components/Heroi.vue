<template>
  <div>
    <v-card class="ma-3" max-width="400">
      <v-card-title class="light-blue">
        <span class="display-1 font-weight-light">Herói</span>
      </v-card-title>

      <v-img class="white--text align-end" height="400px" src="@/assets/img/heroi.jpg"></v-img>

      <v-card-subtitle class="mt-2">
        <v-row class="mx-2 mb-1 mt-0" align="center" justify="space-between">
          <span v-if="golpeHeroi > 0" class="overline green--text">+{{golpeHeroi}} ataque</span>
          <span v-if="cura > 0" class="overline blue--text">+{{cura}} cura</span>
          <span></span>
          <span v-if="golpeMonstro > 0" class="overline red--text">-{{golpeMonstro}} golpe</span>
        </v-row>
        <v-progress-linear color="light-blue" height="20" :value="energia" striped>
          <span class="title">{{energia}} %</span>
        </v-progress-linear>
      </v-card-subtitle>

      <v-card-actions>
        <v-row class="mx-2 mb-2 mt-0" align="center" justify="space-between">
          <v-btn color="orange" @click="prepararAtaque">
            <v-icon left>whatshot</v-icon>Atacar
          </v-btn>
          <v-btn color="pink darken-1" @click="prepararCura" dark>
            <v-icon left>favorite</v-icon>Curar
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog_ataque" max-width="290">
      <v-card>
        <v-card-title class="headline">Tentativa de Ataque</v-card-title>

        <v-card-text>
          <br />
          <span class="display-1">{{fator01}} x {{fator02}} =</span>
          <br />
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="resposta" label="Resposta" type="number" required></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="tentarAtaque">ATACAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog_cura" max-width="290">
      <v-card>
        <v-card-title class="headline">Tentativa de Cura</v-card-title>

        <v-card-text>
          <br />
          <span class="display-1">{{fator01}} ÷ {{fator02}} =</span>
          <br />
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="resposta" label="Resposta" type="number" required></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="tentarCurar">CURAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import db from '@/plugins/firestore'
export default {
  data: () => ({
    dialog_ataque: false,
    dialog_cura: false,
    fator01: 0,
    fator02: 0,
    respostaCorreta: 0,
    resposta: '',
    valid: true
  }),
  computed: {
    ...mapGetters({ energia: 'energiaHeroi', cura: 'curaHeroi' }),
    ...mapGetters(['golpeHeroi', 'golpeMonstro'])
  },
  mounted() {
    let observer = db
      .collection('batalha')
      .doc('current')
      .onSnapshot(snapshot => {
        if (snapshot.type === 'added') {
          console.log('New city: ', snapshot.doc.data())
        }
        if (snapshot.type === 'modified') {
          console.log('Modified city: ', snapshot.doc.data())
        }
        if (snapshot.type === 'removed') {
          console.log('Removed city: ', snapshot.doc.data())
        }
      })
  },
  methods: {
    ...mapActions(['heroiAtacar', 'heroiCurar']),
    prepararAtaque() {
      this.fator01 = Math.floor(Math.random() * 11)
      this.fator02 = Math.floor(Math.random() * 11)
      this.respostaCorreta = this.fator01 * this.fator02
      this.resposta = ''
      this.dialog_ataque = this.respostaCorreta != this.resposta
    },
    tentarAtaque() {
      let resposta_certa = this.respostaCorreta == this.resposta
      this.dialog_ataque = !resposta_certa
      if (resposta_certa) {
        this.atacar()
      }
    },
    atacar() {
      this.heroiAtacar()
    },
    prepararCura() {
      this.fator01 = Math.floor(Math.random() * 10) + 1
      this.fator02 = Math.floor(Math.random() * 10) + 1
      this.respostaCorreta = this.fator02 / this.fator01
      this.resposta = ''
      this.dialog_cura = this.respostaCorreta != this.resposta
    },
    tentarCurar() {
      let resposta_certa = this.respostaCorreta == this.resposta
      this.dialog_cura = !resposta_certa
      if (resposta_certa) {
        this.curar()
      }
    },
    curar() {
      this.heroiCurar()
    }
  }
}
</script>
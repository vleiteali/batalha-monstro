//import Vue from 'vue'
import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: 'AIzaSyAwIo-kpGPTiE7AeaQJVCxqR2SC7YW8t1M',
    authDomain: 'batalha-monstro.firebaseapp.com',
    databaseURL: 'https://batalha-monstro.firebaseio.com',
    projectId: 'batalha-monstro',
    storageBucket: 'batalha-monstro.appspot.com',
    messagingSenderId: '1081465968130',
    appId: '1:1081465968130:web:c7b24f3ce3c0a43c5ff91b',
    measurementId: 'G-B37VJQG3SN'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db

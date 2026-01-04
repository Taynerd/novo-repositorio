// js/firebase.js

// Evita reinicializar o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCOhxri7J6954rX3kZTs3wcHQsNDnaWXac",
    authDomain: "jogo-bff7b.firebaseapp.com",
    projectId: "jogo-bff7b",
    storageBucket: "jogo-bff7b.firebasestorage.app",
    messagingSenderId: "460074620598",
    appId: "1:460074620598:web:fb3bd002d7b01b51a2f817"
  });
}

const auth = firebase.auth();

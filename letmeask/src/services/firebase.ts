// Importando Firebase
import firebase from 'firebase/compat/app';

// Imports Extras
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Config do Firebase - Para manter a segurança do banco de dados, estou importando as chaves do database do arquivo ".env.local"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

// Inicializando o Firebase no projeto
firebase.initializeApp(firebaseConfig);

// Setando variáveis
const auth = firebase.auth();
const database = firebase.database();

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA5ITfRdMy7tsZ2AoNmTnW_OeGS4tkoc8c",
    authDomain: "projeto-teste-fb316.firebaseapp.com",
    projectId: "projeto-teste-fb316",
    storageBucket: "projeto-teste-fb316.appspot.com",
    messagingSenderId: "665046326563",
    appId: "1:665046326563:web:006cf8da40a710cd2cc096"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app
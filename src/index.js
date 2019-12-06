// INICIAR CLOUD FIRESTORE
firebase.initializeApp({
    apiKey: "AIzaSyDKaqE2NpTEwcOS0rWDwUuVCJ94fcApoiQ",
    authDomain: "pet-lovers-5dca4.firebaseapp.com",
    projectId: "pet-lovers-5dca4",
  });
  
  const db = firebase.firestore();
  
const sesion = document.getElementById('button');
sesion.addEventListener('click', (e) => {
    e.preventDefault()
    const correo = document.getElementById('e-mail').value;
    const contraseña = document.getElementById('password').value;
    console.log(correo);
    console.log(contraseña);

  db.collection("users").add({
    e_mail : correo,
    password: contraseña,
  })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

/*import { example } from './example.js';

example();*/

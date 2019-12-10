// INICIAR CLOUD FIRESTORE
firebase.initializeApp({
    apiKey: "AIzaSyDKaqE2NpTEwcOS0rWDwUuVCJ94fcApoiQ",
    authDomain: "pet-lovers-5dca4.firebaseapp.com",
    projectId: "pet-lovers-5dca4",
  });
  
//import { example } from './example.js';

const sesion = document.getElementById('button');

const db = firebase.firestore();

sesion.addEventListener('click', (e) => {
  alert('hi');
});

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
        document.getElementById('e-mail').value = '';
        document.getElementById('password').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

const btnFace = document.getElementById('btnFace');
btnFace.addEventListener('click', (e)=> {
  e.preventDefault()

  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});

const btnGoogle = document.getElementById('btnGoogle');
btnGoogle.addEventListener('click', (e)=> {
  e.preventDefault()
  var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});


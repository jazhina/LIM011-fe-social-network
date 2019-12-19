import { changeView } from '../view-controler/index.js'

export const initFire = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      changeView('#catalogo');
    } else {
      console.log('No user is signed in');
    }
  });
};

//Crear usuario con email y password
export const firebaseSignIn = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
};

//Loguearse con email y password
export const firebaseLogIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

//Logueo de prueba con email y password --> se almacena en el database
export const authEmail = (email, password, db) => {
    console.log('funciona email :) !');
    console.log(email);
    console.log(password);

  return db.collection("users").add({
    e_mail : email,
    password: password,
  })
};

//Auth con Facebook
export const authFace = () => {
    console.log('funciona Facebook :) !');
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

//Auth con Google
export const authGoogle = () => {
    console.log('funciona google :) !');
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
};

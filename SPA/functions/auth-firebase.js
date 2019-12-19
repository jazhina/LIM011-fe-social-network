import { changeView } from '../view-controler/index.js'

export const initFire = () => {
  firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      console.log(user);
      changeView('#catalogo');
    } else {
      console.log('No user is signed in');
      changeView('');
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

// Loguearse con email y password
export const firebaseLogIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

// Auth con Facebook
export const authFace = () => {
    console.log('funciona Facebook :) !');
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

//Auth con Google
export const authGoogle = () => {
  console.log('funciona google :) !');
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const outUser = () => {
  return firebase.auth().signOut();
};

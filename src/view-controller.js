import { firebaseSignIn, firebaseLogIn } from './firebase-controller.js';

// const changeHash = (hash) => {
//   location.hash = hash;
// };

export const functionSignIn = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  firebaseSignIn(email, password);
  // .then(() => changeHash('#/Registro'))
  // .catch(() => {});
};

export const functionLogIn = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  firebaseLogIn(email, password);
  console.log('estas logeado');
};

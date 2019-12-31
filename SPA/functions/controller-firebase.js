/* eslint-disable import/no-cycle */
import { authFace, authGoogle, outUser } from './auth-firebase.js';

export const promAuthFace = () => authFace().then((result) => firebase.firestore().collection('users').add({
  email: result.user.email,
  name: result.user.displayName,
  photo: result.user.photoURL,
}));

export const promAuthGoogle = () => authGoogle().then((result) => firebase.firestore().collection('users').add({
  email: result.user.email,
  name: result.user.displayName,
  photo: result.user.photoURL,
}));

export const userActual = () => {
  let infoUserActual;
  const user = firebase.auth().currentUser;

  if (user != null) {
    infoUserActual = {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      uid: user.uid,
    };
  }
  return infoUserActual;
};

export const promOutUser = () => {
  outUser().then(() => {
    console.log('Sign-out successful');
  }).catch((error) => {
    console.log('An error happened');
  });
};

export const firebaseSignIn = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
};

export const firebaseLogIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

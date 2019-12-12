
const btnSignIn = document.getElementById('btnSignIn');
btnSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  const emailSignIn = document.querySelector('#emailSignIn').value;
  const passwordSignIn = document.querySelector('#passwordSignIn').value;
  console.log(emailSignIn);
  console.log(passwordSignIn);
  firebase.auth().createUserWithEmailAndPassword(emailSignIn,
    passwordSignIn).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
});


// Iniciar sesión
const btnLogIn = document.getElementById('btnLogIn');

btnLogIn.addEventListener('click', (e) => {
  e.preventDefault();
  const emailLogIn = document.getElementById('emailLogIn');
  const passwordLogIn = document.getElementById('passwordLogIn');
  firebase.auth().signInWithEmailAndPassword(emailLogIn.value,
    passwordLogIn.value).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorMessage);
    console.log(errorCode);
    if (errorMessage !== '') {
      console.log('no haz iniciado sesión');
    }
    // ...
  });
});

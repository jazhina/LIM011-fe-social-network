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
// // PUBLICAR 
// const publicar = document.getElementById('submit');
// publicar.addEventListener('click', (e) => {
//     e.preventDefault()
//     const textarea = document.getElementById('texto').value;
//     console.log(textarea);

//   db.collection("publicaciones").add({
//    contenido: textarea,
//   })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//         document.getElementById('texto').value = '';
//     })
//     .catch(function(error) {
//         console.error("Error: ", error);
//     });
// });
// // LISTAR PUBLICACIONES 
// const tabla = document.querySelector('#tabla');
// db.collection("publicaciones").onSnapshot((querySnapshot) => {
//     tabla.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().contenido}`);
//         tabla.innerHTML += `
//         <td scope='row'> ${doc.id}</td>
//         <td><textarea> ${doc.data().contenido}</textarea></td>
//         <td><button  onclick="eliminar('${doc.id}')" >Eliminar</button></td>
//         <td><button id='editar'>Editar</button></td>
//         `
//     });
// });

const btnFace = document.getElementById('btnFace');
btnFace.addEventListener('click', (e)=> {
  e.preventDefault()

  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
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

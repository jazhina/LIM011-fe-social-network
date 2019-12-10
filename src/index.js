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
        document.getElementById('e-mail').value = '';
        document.getElementById('password').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
// PUBLICAR 
const publicar = document.getElementById('submit');
publicar.addEventListener('click', (e) => {
    e.preventDefault()
    const textarea = document.getElementById('texto').value;
    console.log(textarea);

  db.collection("publicaciones").add({
   contenido: textarea,
  })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('texto').value = '';
    })
    .catch(function(error) {
        console.error("Error: ", error);
    });
});
// LISTAR PUBLICACIONES 
const tabla = document.querySelector('#tabla');
db.collection("publicaciones").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().contenido}`);
        tabla.innerHTML += `
        <td scope='row'> ${doc.id}</td>
        <td><textarea> ${doc.data().contenido}</textarea></td>
        <td><button  onclick="eliminar('${doc.id}')" >Eliminar</button></td>
        <td><button id='editar'>Editar</button></td>
        `
    });
});

// BORRAR PUBLICACION
// const borrar = document.querySelector('#eliminar');
// borrar.addEventListener('click', (id) => {
function eliminar(id) {
    db.collection ("publicaciones"). doc(id). delete(). then (function () { 
        console.log ("¡Documento eliminado con éxito!"); 
    }). catch (function (error) { 
        console. error ("Error al eliminar el documento:", error); 
    });
}
// });
/*import { example } from './example.js';

example();*/

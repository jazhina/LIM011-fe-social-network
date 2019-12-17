import { firebaseSignIn } from '../functions/auth-firebase.js';

export default () => {
  const contentViewSignIn = `
  <form>
    <h1>Regístrate</h1>
    <input type="text" id='nameSignIn' placeholder="Nombre" required>
    <input type="text" id='lastNameSignIn' placeholder="Apellidos" required> 
    <input type="email" id ='email' placeholder="Correo electrónico" required>
    <input type="password" id ='password' placeholder="Contraseña nueva" required>
    <!-- <p>Fecha de nacimiento</p>
    <input type='date' required> -->
    <button id='btnSignIn'>Crear cuenta</button>
  </form>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = contentViewSignIn;

  // Selección de elementos del DOM
  const btnSignIn = divElement.querySelector('#btnSignIn');
  btnSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = divElement.querySelector('#email');
    const password = divElement.querySelector('#password');
    firebaseSignIn(email, password);
  });
  return divElement;
};

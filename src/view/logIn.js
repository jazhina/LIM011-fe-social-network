import { functionLogIn } from '../view-controller.js';

export default () => {
  const contentViewLogIn = `
  <h2>¡Bienvenid@!</h2>
      <form id='FormLogIn'>
        <input type="email" id='email' placeholder="Correo electrónico" required>
        <input type="password" id='password' placeholder="Contraseña" required>
        <button id='btnLogIn'>Iniciar sesión</button>
        <p>O ingresa con...</p>
        <p>¿No tienes una cuenta? <a id='createNewUser' href="#/Registro">Regístrate</a> </p>
      </form>`;
  const form = document.createElement('form');
  form.innerHTML = contentViewLogIn;

  // Selección de elementos del DOM
  const btnLogIn = form.querySelector('#btnLogIn');
  btnLogIn.addEventListener('click', functionLogIn);
  return form;
};

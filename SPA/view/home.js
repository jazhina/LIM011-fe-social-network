import { authFace, authGoogle, firebaseLogIn } from '../functions/auth-firebase.js';

export default () => {
  const viewHome = `
    <header class="header-inicio">
    <figure class="img-header">
      <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
    </figure>
  </header>
  <main>
    <h1 class="logo">PET LOVERS</h1>
    <p id="welcome-text" class="msj text">¡Bienvenid@ PetLover!</p>
    <form class="form-loging">
      <input type="email" placeholder="e-mail" id="e-mail">
      <input type="password" placeholder="contraseña" id="password">
      <button class="btn-init" type="text" id="button"><a id= "changeView" href="">Iniciar sesión</a></button>
      <p class="text">O bien ingresa con...</p>
      <section class="section-redes">
        <button class="btn-redes" id="btnFace"><i class="fab fa-facebook"></i></button>
        <button class="btn-redes" id="btnGoogle"><i class="fab fa-google"></i></button>
      </section>
      <p class="text">¿No tienes una cuenta? <a class="text-link" href="#/Registro">Regístrate</a></p>
    </form>
  </main>
  <script  type="module"src="firebase.js"></script>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  // funciones
  const sesion = divElement.querySelector('#button');
  sesion.addEventListener('click', (e) => {
    e.preventDefault();
    const email = divElement.querySelector('#e-mail').value;
    const password = divElement.querySelector('#password').value;
    firebaseLogIn(email, password);
  });
  // const sesion = divElement.querySelector('#button');
  // sesion.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const email = divElement.querySelector('#e-mail').value;
  //   const password = divElement.querySelector('#password').value;
  //   authEmail(email, password).then(function (docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //     document.getElementById('e-mail').value = '';
  //     document.getElementById('password').value = '';
  //     const url = window.location.href;
  //     window.location.href = url + '#/catalogo';
  //     console.log(window.location.href);
  //   })
  //     .catch(function (error) {
  //       console.error("Error adding document: ", error);
  //     });
  // });

  const btnFace = divElement.querySelector('#btnFace');
  btnFace.addEventListener('click', (e) => {
    e.preventDefault();
    authFace();
  });

  const btnGoogle = divElement.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    authGoogle();
  });

  return divElement;
};

import { authFace, authGoogle, authEmail } from '../functions/auth-firebase.js'

export default () => {
    const viewHome = 
    `<header class="header-inicio">
    <figure class="img-header">
      <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
    </figure>
  </header>
  <main>
    <h1 class="logo">PET LOVERS</h1>
    <p class="text">¡Bienvenid@ PetLover!</p>
    <form class="form-loging">
      <input type="email" placeholder="e-mail" id="e-mail">
      <input type="password" placeholder="contraseña" id="password">
      <button class="btn-init" type="text" id="button"><a href="#/catalogo">Iniciar sesión</a></button>
      <p class="text">O bien ingresa con...</p>
      <section class="section-redes">
        <button class="btn-redes" id="btnFace"><i class="fab fa-facebook"></i></button>
        <button class="btn-redes" id="btnGoogle"><i class="fab fa-google"></i></button>
      </section>
      <p class="text">¿No tienes una cuenta? <a class="text-link" href="">Regístrate</a></p>
    </form>
  </main>
  <script  type="module"src="firebase.js"></script>`

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  //funciones

const sesion = divElement.querySelector('#button');
sesion.addEventListener('click', (e) => {
  e.preventDefault();
  authEmail();
});

const btnFace = divElement.querySelector('#btnFace')
btnFace.addEventListener('click', (e) => { 
  e.preventDefault();
  authFace();
});

const btnGoogle = divElement.querySelector('#btnGoogle')
btnGoogle.addEventListener('click', (e) => { 
  e.preventDefault();
  authGoogle();
});

  return divElement;
};

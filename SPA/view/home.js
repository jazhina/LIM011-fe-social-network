import { promAuthFace, promAuthGoogle} from '../functions/controller-firebase.js';

export default () => {
  const viewHome = `<header class="header-inicio">
    <figure class="img-header">
      <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
    </figure>
  </header>
  <main class="main-home">
    <h1 class="logo-home">PET LOVERS</h1>
    <p id="welcome-text" class="msj text">¡Bienvenid@ PetLover!</p>
    <form class="form-loging">
      <input type="email" placeholder="e-mail" id="e-mail">
      <input type="password" placeholder="contraseña" id="password">
      <button class="btn-init" type="text" id="button"><a id= "changeView" href="">Iniciar sesión</a></button>
      <p class="text">O bien ingresa con...</p>
      <section class="section-redes">

        <i id="btn-facebook"><img class="icon-network" src="https://img.icons8.com/color/48/000000/facebook-new.png"></i>

        <i id="btn-google"><img class="icon-network" src="https://img.icons8.com/color/48/000000/google-logo.png"></i>
      </section>
      <p class="text">¿No tienes una cuenta? <a class="text-link" href="#/Registro">Regístrate</a></p>
    </form>
  </main>
  <script  type="module"src="firebase.js"></script>`;

  const divElement = document.createElement('div');
  divElement.classList.add('div-home');
  divElement.innerHTML = viewHome;

  // funciones de autentificación
  const btnFace = divElement.querySelector('.section-redes').firstElementChild;
  btnFace.addEventListener('click', (e) => {
    e.preventDefault();
    promAuthFace().catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  });

  const btnGoogle = divElement.querySelector('.section-redes').lastElementChild;
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    promAuthGoogle().catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  });

  return divElement;
};

import { menuAnimation } from '../functions/animation.js';
import { userActual } from '../functions/controller-firebase.js'

export default () => {
  const viewCatalogo = `
    <header class="header-movil">
    <menu id="menu-movil" class="menu-movil"><i class="fas fa-bars fa-2x bars"></i></menu>
    <nav id="enlaces" class="animationOne">
      <p class="text">Mi perfil</p>
      <p class="text">Salir</p>
    </nav>
    <h1 class="logo-movil">PET LOVERS</h1>
  </header>
  <div class="list-menu-destok">
  <menu id="menu-movil-destok"><span id="nameUserHeader">Nombre de Mascota</span><i id="icon-down" class="fas fa-caret-down"></i></menu>
  <nav id="enlaces-destok" class="animationOne">
    <p class="text">Mi perfil</p>
    <p class="text">Salir</p>
  </nav>
  <h1 class="logo-destok">PET LOVERS</h1>
  <menu id="out-menu-destok">Cerrar sesión <i class="fas fa-sign-out-alt"></i></menu>
  </div>
  <main id="main-muro">
    <section class="flex section-info-muro">
      <figure class="figure-photo">
        <img id="photoProfile" class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p id="nameUser" class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
    </section>
    <section class="section-destok">
      <figure class="fig-portada">
        <img class="photo-info-muro" src="img/portada.jpg" alt="foto de portada">
      </figure>
      <div class="div-info-muro">
      <figure class="figure-photo">
        <img id="photoProfileDestok" class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p id="nameUserDestok" class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
      </div>
    </section>
    <section class="section-publics-muro">
      <form class="form">
        <textarea placeholder="¿Qué quieres compartir?" name="" id="" cols="37" rows="4"></textarea>
        <div class="btn-coment">
            <button class="btn-img"><i class="far fa-image icons-white"></i></button>
            <button class="btn-share">Compartir</button>
        </div>
      </form>
      <div class="coment">
        <div class="title-note">
          <p>Publicado por Jean Cedron - Comunal</p><i class="fas fa-times"></i>
        </div>
        <p class="text-coment">Hola a todos!</p>
        <div class="section-btns-note">
          <button class="btns-note"><i class="far fa-grin-hearts icons-white"></i></button>
          <button class="btns-note"><i class="fas fa-share icons-white"></i></button>
        </div>
      </div>
      <div class="coment">
        <div class="title-note">
          <p>Publicado por Jean Cedron - Comunal</p><i class="fas fa-times"></i>
        </div>
        <p class="text-coment">Hola a todos!</p>
        <div class="section-btns-note">
          <button class="btns-note"><i class="far fa-grin-hearts icons-white"></i></button>
          <button class="btns-note"><i class="fas fa-share icons-white"></i></button>
        </div>
      </div>
    </section>
  </main>
  <script type="module" src="animation.js"></script>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  // Funciones
  const menuMovil = divElement.querySelector('#menu-movil');
  menuMovil.addEventListener('click', menuAnimation);
  const menuDestok = divElement.querySelector('#icon-down');
  menuDestok.addEventListener('click', menuAnimation);

 //asignancion datos básicos a perfil
 const photoProfile = divElement.querySelector('#photoProfile');
 const nameUser = divElement.querySelector('#nameUser');
 const photoProfileDestok = divElement.querySelector('#photoProfileDestok');
 const nameUserDestok = divElement.querySelector('#nameUserDestok');
 const nameUserHeader = divElement.querySelector('#nameUserHeader');

 photoProfile.src = userActual().photoUrl;
 nameUser.innerHTML = userActual().name;
 photoProfileDestok.src = userActual().photoUrl;
 nameUserDestok.innerHTML = userActual().name;
 nameUserHeader.innerHTML = userActual().name;

  return divElement;
};

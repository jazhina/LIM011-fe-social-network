import { menuAnimation } from '../functions/animation.js'

export default () => {
    const viewCatalogo = 
    `<header class="header-movil">
    <menu id="menu-movil" class="menu-movil"><i class="fas fa-bars fa-2x bars"></i></menu>
    <nav id="enlaces" class="animationOne">
      <p class="text">Mi perfil</p>
      <p class="text">Salir</p>
    </nav>
    <h1 class="logo-destok">PET LOVERS</h1>
  </header>
  <div class="list-menu-destok">
  <menu id="menu-movil-destok">Nombre de Mascota <i class="fas fa-caret-down"></i></menu>
  <nav id="enlaces" class="animationOne">
    <p class="text">Mi perfil</p>
    <p class="text">Salir</p>
  </nav>
  <h1 class="logo-destok">PET LOVERS</h1>
  <menu id="out-menu-destok">Cerrar sesión <i class="fas fa-caret-down"></i></menu>
  </div>
  <main id="main-muro">
    <section class="flex section-info-muro">
      <figure class="figure-photo">
        <img class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
    </section>
    <section class="section-destok">
      <figure class="fig-portada">
        <img class="photo-info-muro" src="img/portada.jpg" alt="foto de portada">
      </figure>
      <div class="div-info-muro">
      <figure class="figure-photo">
        <img class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p class="name-user">Nombre de Mascota</p>
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
  <script type="module" src="animation.js"></script>`

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  //Funciones
  const logo = divElement.querySelector('#menu-movil');
  logo.addEventListener('click', menuAnimation);

  return divElement;
};

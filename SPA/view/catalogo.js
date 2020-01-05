import { menuAnimation } from '../functions/animation.js';
import { userActual, promOutUser } from '../functions/controller-firebase.js';
import { closeModal, closeGrey, showModal } from '../functions/functions-dom.js';

export default () => {
  const db = firebase.firestore();
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
    <div id="modal" class="modal reset">
    <figure id="flex" class="reset">
    <span id="close" type="button">x</span>
        <img id="contenido" src="" class="reset" alt="foto de perfil">
        </figure>
  </div>
    <section class="section-publics-muro">
      <form class="form">
        <textarea id = "texto" placeholder="¿Qué quieres compartir?" name="" id="" cols="37" rows="4"></textarea>
        <div class="btn-coment">
            <button class="btn-img"><i class="far fa-image icons-white"></i></button>
            <button class="btn-share" id = "compartir">Compartir</button>
        </div>
      </form>
      <div id="comentarios">
      </div>
    </section>
    <div id="perfil">
  </main>
  <script type="module" src="animation.js"></script>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;
  
  // PUBLICAR
  const publicar = divElement.querySelector('#compartir');
  publicar.addEventListener('click', (e) => {
    e.preventDefault();
    const textarea = divElement.querySelector('#texto').value;
    console.log(textarea);

    db.collection('publicaciones').add({
      contenido: textarea,
      fecha: new Date(),
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        divElement.querySelector('#texto').value = '';
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  });
  // LISTAR PUBLICACIONES
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const comentarios = divElement.querySelector('#comentarios');
  db.collection('publicaciones').orderBy('fecha').onSnapshot((querySnapshot) => {
    comentarios.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().contenido}`);
      comentarios.innerHTML += `
          <div class = "coment">
            <div class="title-note">
            <p>Publicado por ${userActual().name}  -  ${day}/${month + 1}/${year} a las ${hours}:${minutes}</p><i class="eliminar fas fa-times"></i><a class="editar">editar</a>
            </div>
              <p class="text-coment">${doc.data().contenido}</p>
            <div class="section-btns-note">
              <button class='btns-note'><i class="far fa-grin-hearts icons-white"></i></button>
              <button class="btns-note"><i class="fas fa-share icons-white"></i></button>
            </div>
          </div>
         `;
      // ELIMINAR PUBLICACIONES
      comentarios.querySelector('.eliminar').addEventListener('click', () => {
        db.collection('publicaciones').doc(doc.id).delete().then(() => {
          console.log('Eliminado');
        })
          .catch((error) => {
            console.error('Error no se pudo remover: ', error);
          });
      });
      
      // EDITAR PUBLICACIONES
          comentarios.querySelector('.editar').addEventListener('click', () => {
            const guardar = divElement.querySelector('.btn-share');
            guardar.innerHTML = 'Editar';
            divElement.querySelector('#texto').value = `${doc.data().contenido}`;
            guardar.addEventListener('click', () => {
              return db.collection("publicaciones").doc(doc.id).update({               
                contenido: "Hola Ohayo como estas buen dia",
              })
              .then(function() {
                  console.log("Publicacion editada");
                  console.log(`${doc.id}=> ${doc.data().contenido}`);
                // comentarios.querySelector('.text-coment').value = '';
              })
              .catch(function(error) {
                  console.error("No se pudo editar ", error);
              });
            });
        });
      });
  });
      
  // Funciones
  const menuMovil = divElement.querySelector('#menu-movil');
  menuMovil.addEventListener('click', menuAnimation);
  const menuDestok = divElement.querySelector('#icon-down');
  menuDestok.addEventListener('click', menuAnimation);

  // logOut

  const outSesion = divElement.querySelector('#out-menu-destok');
  outSesion.addEventListener('click', (e) => {
    e.preventDefault();
    promOutUser();
  });

  // asignancion datos básicos a perfil
  const photoProfile = divElement.querySelector('#photoProfile');
  const nameUser = divElement.querySelector('#nameUser');
  const photoProfileDestok = divElement.querySelector('#photoProfileDestok');
  const nameUserDestok = divElement.querySelector('#nameUserDestok');
  const nameUserHeader = divElement.querySelector('#nameUserHeader');
  const contenido = divElement.querySelector('#contenido');
  const modal = divElement.querySelector('#modal');
  const close = divElement.querySelector('#close');

  photoProfile.src = userActual().photoUrl;
  nameUser.innerHTML = userActual().name;
  photoProfileDestok.src = userActual().photoUrl;
  nameUserDestok.innerHTML = userActual().name;
  nameUserHeader.innerHTML = userActual().name;

  // Modal para foto de perfil

  photoProfile.addEventListener('click', () => { showModal(contenido, userActual().photoUrl, modal); });
  photoProfileDestok.addEventListener('click', () => { showModal(contenido, userActual().photoUrl, modal); });
  close.addEventListener('click', () => { closeModal(modal); });
  window.addEventListener('click', () => { closeGrey(modal); });

  return divElement;
};

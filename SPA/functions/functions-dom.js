import { deleteComment, editCommentDom, saveNewComment } from './post-firebase.js';

// Modal para foto
export const closeModal = (modal) => {
  modal.style.display = 'none';
};
export const showModal = (contenido, foto, modal) => {
  contenido.src = '';
  contenido.src = foto;
  modal.style.display = 'flex';
};
export const closeGrey = (modal) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

export const addZero = (num) => {
  let result = 0;
  if (num < 10) {
    result = `0${num}`;
    return result;
  }
  return num;
};

export const time = (obj) => {
  const date = {
    day: addZero(obj.getDate()),
    month: addZero(obj.getMonth() + 1),
    year: obj.getFullYear(),
    hours: addZero(obj.getHours()),
    minutes: addZero(obj.getMinutes()),
  };
  return date;
};

export const createComment = (container, doc) => {
  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', doc.id);
  divContainer.classList.add('coment');
  const comment = `
            <div class="title-note">
            <p>Publicado por ${doc.data().nombre}  - ${doc.data().hora} del ${doc.data().fecha} </p><i class="eliminar fas fa-times"></i>
            </div>
              <textarea class="text-coment">${doc.data().contenido}</textarea>
            <div class="section-btns-note">
              <button class='btns-note'><i class="far fa-grin-hearts icons-white"></i></button>
              <button class="btns-note"><i class="fas fa-share icons-white"></i></button>
                <select class="comboPrivacy btns-noteEdit">
                <option value="publica">Privacidad</option>
                <option value="publica">Pública</option>
                <option value="privada">Privada</option>
              </select>
              <button class="save btns-noteEdit hide">Guardar</button>
              <button class="edit btns-noteEdit">Editar</button>
            </div>
         `;
  divContainer.innerHTML = comment;
  const btnDelete = divContainer.querySelector('.eliminar');
  const texto = divContainer.querySelector('.text-coment');
  const edit = divContainer.querySelector('.edit');
  const save = divContainer.querySelector('.save');
  const privacy = divContainer.querySelector('.comboPrivacy');
  privacy.value = doc.data().privacidad;
  texto.disabled = true;
  btnDelete.addEventListener('click', () => { deleteComment(doc.id, container); });
  edit.addEventListener('click', () => {
    save.classList.remove('hide');
    edit.classList.add('hide');
    editCommentDom(texto);
  });

  save.addEventListener('click', () => {
    saveNewComment(texto, container, doc.id, privacy.value);
    edit.classList.remove('hide');
    save.classList.add('hide');
  });
  container.appendChild(divContainer);
};

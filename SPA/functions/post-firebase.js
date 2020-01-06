import { createComment, time } from './functions-dom.js';

export const addCommentFirestore = (texto, userActual) => {
  console.log(userActual().name);
  const db = firebase.firestore();
  return db.collection('publicaciones').add({
    id: userActual().uid,
    nombre: userActual().name,
    contenido: texto.value,
    fecha: `${time(new Date()).day}/${time(new Date()).month}/${time(new Date()).year}`,
    hora: `${time(new Date()).hours}:${time(new Date()).minutes}`,
    likes: 0,
    fechaYhora: new Date(),
  });
};

export const showAllComments = (container) => {
  const contain = container;
  contain.innerHTML = '';
  const docRef = firebase.firestore().collection('publicaciones');
  docRef.orderBy('fechaYhora', 'desc').onSnapshot((allDocs) => {
    if (allDocs.size >= 1) {
      allDocs.forEach((doc) => {
        createComment(contain, doc);
      });
    }
  });
};

export const deleteComment = (id, container) => {
  console.log(id);
  firebase.firestore().collection('publicaciones').doc(id).delete()
    .then(() => {
      showAllComments(container);
      console.log('Eliminado');
    })
    .catch((error) => {
      console.error('Error no se pudo remover: ', error);
    });
};

export const newText = (texto, id) => {
  const ref = firebase.firestore().collection('publicaciones').doc(id);
  return ref.update({
    contenido: texto.value,
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
    // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};

export const editCommentDom = (texto) => {
  console.log(texto.value);
  texto.disabled = false;
  texto.focus();
};

export const saveNewComment = (texto, container, id) => {
  newText(texto, id);
  texto.disabled = true;
};

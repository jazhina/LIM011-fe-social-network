import { createComment, time, removeChild } from './functions-dom.js';

export const addCommentFirestore = (texto, userActual, privacy) => {
  const db = firebase.firestore();
  return db.collection('publicaciones').add({
    id: userActual().uid,
    nombre: userActual().name,
    contenido: texto.value,
    fecha: `${time(new Date()).day}/${time(new Date()).month}/${time(new Date()).year}`,
    hora: `${time(new Date()).hours}:${time(new Date()).minutes}`,
    likes: 0,
    fechaYhora: new Date(),
    privacidad: privacy.value,
  });
};

export const showAllComments = (getData) => {
  //removeChild(container);
  //console.log(container);
  const docRef = firebase.firestore().collection('publicaciones');
  docRef.orderBy('fechaYhora', 'desc').onSnapshot((allDocs) => {
    if (allDocs.size >= 1) {
      const arrData = [];
      allDocs.forEach((doc) => {
        const obj = {
          id: doc.id,
          data: doc.data(),
        };
        arrData.push(obj);
        /* createComment(container, doc); */
      });
      getData(arrData);
     // console.log(getData(arrData));
    }
  });
};

export const deleteComment = (id, container) => {
  console.log(id);
  firebase.firestore().collection('publicaciones').doc(id).delete()
    .then(() => {
      //showAllComments(container);
      console.log('Eliminado');
    })
    .catch((error) => {
      console.error('Error no se pudo remover: ', error);
    });
};

export const newText = (texto, id, privacy, container) => {
  const ref = firebase.firestore().collection('publicaciones').doc(id);
  return ref.update({
    contenido: texto.value,
    privacidad: privacy,
  })
    .then(() => {
      console.log('Document successfully updated!');
      //showAllComments(container);
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

export const saveNewComment = (texto, container, id, privacy) => {
  newText(texto, id, privacy, container);
  texto.disabled = true;
};

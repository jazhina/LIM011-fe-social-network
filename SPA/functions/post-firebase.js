import { time } from './functions-dom.js';

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

export const showAllComments = (fnGetData) => {
  // removeChild(container);
  // console.log(container);
  const docRef = firebase.firestore().collection('publicaciones');
  docRef.orderBy('fechaYhora', 'desc').onSnapshot((allDocs) => {
    // if (allDocs.size >= 1) {
    const arrData = [];
    allDocs.forEach((doc) => {
      const obj = {
        id: doc.id,
        data: doc.data(),
      };
      arrData.push(obj);
      /* createComment(container, doc); */
    });
    fnGetData(arrData);
  //  }
  });
};

export const deleteComment = (id) => {
  console.log(id);
  firebase.firestore().collection('publicaciones').doc(id).delete()
    .then(() => {
      console.log('Eliminado');
    })
    .catch((error) => {
      console.error('Error no se pudo remover: ', error);
    });
};

export const newText = (texto, id, privacy) => {
  console.log(id);
  const ref = firebase.firestore().collection('publicaciones').doc(id);
  return ref.update({
    contenido: texto.value,
    privacidad: privacy,
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

export const saveNewComment = (texto, id, privacy) => {
  newText(texto, id, privacy);
  texto.disabled = true;
};

export const iterateComments = (data, createComment, container) => {
  data.forEach((doc) => {
    
    createComment(container, doc);
  });
};
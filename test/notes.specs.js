/* eslint-disable linebreak-style */

import MockFirebase from 'mock-cloud-firestore';
import {
  createComment,

}
  // eslint-disable-next-line import/extensions
  from '../SPA/functions/functions-dom.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post001: {
          contenido: 'probando',
          fecha: '13/01/2020',
          fechaYhora: '',
          id: 'user01',
          nombre: 'Jazmin Rojas',
          likes: 0,
          date: '12/01/2020',
          privacidad: 'publica',
        },
        post002: {
          contenido: 'probando',
          fecha: '13/01/2020',
          fechaYhora: '',
          id: 'user02',
          nombre: 'Jazmin Rojas',
          likes: 0,
          date: '13/01/2020',
          privacidad: 'privada',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {deleteComment, editCommentDom, saveNewComment} from './post-firebase.js';

describe('lista de notas', () => {
  it('Debería porder agregar una nota', (done) => {
    return createComment('preparar la pildora')
      .then(() => saveNewComment(
        (data) => {
          const result = data.find((note) => note.title === 'preparar la pildora');
          expect(result.title).toBe('preparar la pildora');
          done()
        }
      ))
  });
const Data = {
  contenido: 'probando',
  fecha: '13/01/2020',
  fechaYhora: '',
  id: 'user01',
  nombre: 'Jazmin Rojas',
  likes: 0,
  date: '12/01/2020',
  privacidad: 'publica',
};

describe('createComment', () => {
  it('deberia agregar un post', done => createComment(objectPost).then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'probando 2');
      expect(result.post).toBe('probando 2');
      done();
    };
    getPosts(callback);
  }));
});

describe('editCommentDom', () => {
  it('deberia retornar un post', done => editCommentDom('post001', 'modificando ').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'modificando');
      expect(result.post).toBe('modificando mocks');
      done();
    };
    getPosts(callback);
  }));
});

describe('deleteComment', () => {
  it('deberia retornar un post', done => deleteComment('post01').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.id === 'post01');
      expect(result).toBe(undefined);
      done();
    };
    getPosts(callback);
  }));
});

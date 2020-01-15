/* eslint-disable semi */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */

import MockFirebase from 'mock-cloud-firestore';
import { createComment } from '../SPA/functions/functions-dom.js';

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

describe('lista de publicaciones', () => {
  it('Debería porder agregar una publicacion', (done) => {
    return createComment('probando')
      .then(() => getNotes(
        (data) => {
          const result = data.find((note) => note.contenido === 'probando');
          expect(result.contenido).toBe('probando');
          done()
        }
      ))
  });
/* import {deleteComment, editCommentDom, saveNewComment} from './post-firebase.js'; */

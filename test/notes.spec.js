/* eslint-disable semi */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */

import MockFirebase from 'mock-cloud-firestore';
import { deleteComment, showAllComments } from '../SPA/functions/post-firebase.js';

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
          contenido: 'probando2',
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

describe('lista de notas', () => {
  it('Debería poder eliminar una nota', (done) => {
    return deleteComment('user01')
      .then(() => showAllComments(
        (data) => {
          const result = data.find((note) => note.contenido === 'probando');
          expect(result).toBe(undefined);
          done()
        },
      ))
  })
});

import MockFirebase from 'mock-cloud-firestore';
import {
createComment,
} from '../SPA/functions/functions-dom.js';

const data = {
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
      
      },
    },
  },
};

global.firebase = new MockFirebase(data, { isNaiveSnapshotListenerEnabled: true });
const AddPost = {
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
      const result = post.find(elem => elem.post === 'probando mocks 2');
      expect(result.post).toBe('probando mocks 2');
      done();
    };
    getPosts(callback);
  }));
});

describe('getPost', () => {
  it('deberia retornar un post', done => getPosts((data) => {
    const result = data.filter(elem => elem.idUser === 'user001');
    expect(result).toHaveLength(1);
    done();
  }));
});

describe('updatePost', () => {
  it('deberia retornar un post', done => updatePost('post001', 'modificando mocks').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'modificando mocks');
      expect(result.post).toBe('modificando mocks');
      done();
    };
    getPosts(callback);
  }));
});

describe('delete post', () => {
  it('deberia retornar un post', done => deletePost('post01').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.id === 'post01');
      expect(result).toBe(undefined);
      done();
    };
    getPosts(callback);
  }));
});


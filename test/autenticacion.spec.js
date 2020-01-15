import {
  createUserAuth,
  loginUser,
  loginFacebook,
} from '../SPA/functions/user-model.js';
  
  // configurando mock
  const firebasemock = require('firebase-mock');
  
  const mockauth = new firebasemock.MockAuthentication();
  const mockfirestore = new firebasemock.MockFirestore();
  
  mockauth.autoFlush();
  mockfirestore.autoFlush();
  global.firebase = firebasemock.MockFirebaseSdk(
    // use null if your code does not use RTDB
    () => null,
    () => mockauth,
    () => mockfirestore,
  );
  
  // test crear usuario
  describe('createUserAuth', () => {
    it('debería crear un usuario con email: prueba@prueba.com y contraseña: prueba123', () => createUserAuth('prueba@prueba.com', 'prueba123')
      .then((dataCreated) => {
        expect(dataCreated.email).toBe('prueba@prueba.com');
      }));
  });
  
  // test iniciar sesión normal
  describe('loginUser', () => {
    it('debería poder iniciar sesión', () => loginUser('prueba@prueba.com', 'prueba123')
      .then((users) => {
        expect(users.email).toBe('prueba@prueba.com');
      }));
  });
  
  // test iniciar con facebook
  describe('loginFacebook', () => {
    it('debería poder iniciar sesión con facebook', () => loginFacebook)
  })
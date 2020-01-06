import { changeView } from './view-controler/index.js';
import { initFire } from './functions/auth-firebase.js';


const init = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDKaqE2NpTEwcOS0rWDwUuVCJ94fcApoiQ',
    authDomain: 'pet-lovers-5dca4.firebaseapp.com',
    projectId: 'pet-lovers-5dca4',
  });

  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
  initFire();
};
window.addEventListener('load', init);

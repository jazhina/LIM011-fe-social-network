/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
import { showAllComments } from '../functions/post-firebase.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': { return container.appendChild(components.home()); }
    case '#catalogo': {
      showAllComments(() =);
      return container.appendChild(components.catalogo()); 
    }
    case '#/catalogo': { return container.appendChild(components.catalogo()); }
    case '#/Registro': { return container.appendChild(components.registrarse()); }
    default:
    { return container.appendChild(components.diferent()); }
  }
};

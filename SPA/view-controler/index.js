/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
import { showAllComments } from '../functions/post-firebase.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': { return container.appendChild(components.home()); }
    case '#/catalogo': {
      return showAllComments((data) => {
        container.innerHTML = '';
        container.appendChild(components.catalogo(data));
      });
      // return container.appendChild(components.catalogo());
    }
    case '#/Registro': { return container.appendChild(components.registrarse()); }
    default:
    { return container.appendChild(components.diferent()); }
  }
};

/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
import { showAllComments } from '../functions/post-firebase.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  console.log(route);
  switch (route) {
    case '': { return container.appendChild(components.home()); }
    case '#/catalogo': {
      return showAllComments((data) => {
        container.innerHTML = '';
        console.log('tfcghj', data);
        container.appendChild(components.catalogo(data));
      });
      //return container.appendChild(components.catalogo());
    }
    case '#/Registro': { return container.appendChild(components.registrarse()); }
    default:
    { return container.appendChild(components.diferent()); }
  }
};

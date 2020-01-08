/* eslint-disable import/no-cycle */
import { components } from '../view/index.js';
import { showAllComments } from '../functions/post-firebase.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': { return container.appendChild(components.home()); }
    case '#catalogo': {
      showAllComments((data) => {
         console.log(data);
        return data
      }); 
      return container.appendChild(components.catalogo());
    }
    case '#/catalogo': { return container.appendChild(components.catalogo(showAllComments((data) => {
      return data;
    }))); }
    case '#/Registro': { return container.appendChild(components.registrarse()); }
    default:
    { return container.appendChild(components.diferent()); }
  }
};

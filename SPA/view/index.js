/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import Home from './home.js';
import Catalogo from './catalogo.js';
import Diferent from './404.js';
import Registrarse from './registrarse.js';

const components = {
  home: Home,
  catalogo: Catalogo,
  diferent: Diferent,
  registrarse: Registrarse,
};

export { components };

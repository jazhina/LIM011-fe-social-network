import logIn from './view/logIn.js';
import signIn from './view/signIn.js';

const components = {
  login: logIn,
  signin: signIn,
};

const changeView = (route) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '':
      return container.appendChild(components.login());
    case '#/':
      return container.appendChild(components.login());
    default:
    case '#/Registro':
      return container.appendChild(components.signin());
  }
};

export { changeView };

import { changeView } from './muro.js';

const init = () => {
    window.addEventListener('hashchange', () => {
        changeView(window.location.hash);
    });
};

window.addEventListener('load', init);
/* eslint-disable import/prefer-default-export */
export const menuAnimation = () => {
  const menu = document.querySelector('#enlaces');
  const menuDestok = document.querySelector('#enlaces-destok');
  if (menu.getAttribute('class') === 'animationOne' || menuDestok.getAttribute('class') === 'animationOne') {
    menu.classList.remove('animationOne');
    menu.classList.add('animationTwo');
    menuDestok.classList.remove('animationOne');
    menuDestok.classList.add('animationTwo');
  } else {
    menu.classList.remove('animationTwo');
    menu.classList.add('animationOne');
    menuDestok.classList.remove('animationTwo');
    menuDestok.classList.add('animationOne');
  }
};

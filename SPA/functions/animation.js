export const menuAnimation = () => {
  console.log('work');
  const menu = document.querySelector('#enlaces');
  if (menu.getAttribute('class') === 'animationOne') {
    menu.classList.remove('animationOne');
    menu.classList.add('animationTwo');
  } else {
    menu.classList.remove('animationTwo');
    menu.classList.add('animationOne');
  }
};


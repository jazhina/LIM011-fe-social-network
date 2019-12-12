const menu = document.querySelector('#enlaces');
    const btnMenu = document.querySelector('#menu-movil');
    let count = 0;
  
    btnMenu.addEventListener('click', () => {
      if (count === 0) {
        menu.className = ('animationTwo');
        count = 1;
      } else {
        menu.classList.remove('animationTwo');
        menu.className = ('animationOne');
        count = 0;
      }
    });
    
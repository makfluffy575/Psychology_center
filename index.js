function menuHidden () {
  const menuList = document.querySelector('.header__menu-list');
  if (menuList.style.display == 'block')
    menuList.style.display = 'none';
  else
    menuList.style.display = 'block'
}

document.querySelector('.header__burger').onclick = menuHidden;


const nav = document.getElementById('nav');
const nav_mobile_icon = document.getElementById('nav-mobile');

nav_mobile_icon.addEventListener('click', () => {
  nav.classList.toggle('none');
});

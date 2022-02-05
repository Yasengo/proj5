// mobile menubar
const Menu = document.querySelector('.hamburger__menu');
const Navbar = document.querySelector('.navigation__link');

Menu.onclick = () => {
    Menu.classList.toggle('active');
    Navbar.classList.toggle('shownav');
}
window.onscroll = () => {
    Menu.classList.remove('active');
    Navbar.classList.remove('shownav');
}

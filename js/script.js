let btnBurger = document.querySelector('.burger');
let navMenu = document.querySelector('.navbar');

let win = window;

function openMenu(event) {
    btnBurger.classList.toggle('active');
    navMenu.classList.toggle('active');
    event.preventDefault();
    event.stopImmediatePropagation();
}

function closeMenu() {
    if (btnBurger.classList.contains('active')) {
        btnBurger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}
btnBurger.addEventListener('click', openMenu, false);
win.addEventListener('click', closeMenu, false);
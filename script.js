/*--------- Menu Bar & Header Effect ---------- */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav-bar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    /*--------- Header scroll effect ---------- */
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
};

// /*--------- Ctrl button lock ---------- */
document.onkeydown = function (e) {
    if (e.ctrlKey) {
        return false;
    }
};
document.addEventListener('contextmenu', event => event.preventDefault());
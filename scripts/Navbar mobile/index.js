let navbar = document.querySelector('#nav-list');
let backgroundBlack = document.querySelector('.background-black');
let body = document.querySelector('.body')
let buttonNewTopic = document.querySelector('.button-newTopic')

onload = function() {
    navbar.style.left = '-100%';
}

function checked() {
    navbar.style.transform = 'translateY(-2.2%)';

    if (navbar.style.left == '-100%' ) {
        navbar.style.left = '0';
        backgroundBlack.style.display = 'block';
        buttonNewTopic.style.zIndex = "-1";

    } else {
        navbar.style.left = '-100%';
        backgroundBlack.style.display = 'none';
        buttonNewTopic.style.zIndex = '0';
    }
}

function hiddenNavbar() {
    navbar.style.left = '-100%';
    backgroundBlack.style.display = 'none';
}
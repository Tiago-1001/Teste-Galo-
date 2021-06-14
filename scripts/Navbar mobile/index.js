let navbar = document.querySelector('#nav-list');
let backgroundBlack = document.querySelector('.background-black');
let body = document.querySelector('.body')

onload = function() {
    navbar.style.left = '-100%';
}

function checked() {

    navbar.style.transform = "translateY(-2.2%)";
    console.log(navbar.style.transform)

    if (navbar.style.left == "-100%" ) {
        navbar.style.left = "0";
        backgroundBlack.style.display = 'block';

    } else {
        navbar.style.left = "-100%";
        backgroundBlack.style.display = 'none'
    }
}

function hiddenNavbar() {
    navbar.style.left = "-100%";
    backgroundBlack.style.display = 'none';
}
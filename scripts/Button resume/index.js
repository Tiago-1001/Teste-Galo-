let resume = document.querySelector('.resume');
let button = document.querySelector('.verMais');
let ellipsis = document.querySelector('#ellipsis');
let visible = document.querySelector('.moreText');

function verMais() {
    if (visible.style.display == "none") {
        visible.style.display = "inline-block";
        button.style.display = "none"
    } else {
        visible.style.display = "none"
        button.style.display = "inline-block"
    }
}
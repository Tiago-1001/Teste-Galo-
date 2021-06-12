let res = document.querySelector('.res');

function respost() {
    if (res.style.display !== "inline-block") {
        res.style.display = "inline-block";
    } else {
        res.style.display = "none";
    }
}
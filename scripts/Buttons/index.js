function verMais() {
    let button = document.querySelector('.verMais');
    let ellipsis = document.querySelector('#ellipsis');
    let visible = document.querySelector('.moreText');

    if (visible.style.display == 'none') {
        visible.style.display = "inline-block";
        button.style.display = "none";
        ellipsis.style.display = "none";

    } else {
        visible.style.display = "none";
        button.style.display = "inline-block";
        ellipsis.style.display = "inline";
    }
}

function newTopic() {
    let topic = document.querySelector('.newTopic');
    console.log('aaa');
    console.log(topic);

    if (topic.style.display !== "inline-block") {
        topic.style.display = "inline-block";
    } else {
        topic.style.display = "none";
    }
}


function respost() {
    let res = document.querySelector('.res');

    if (res.style.display !== "inline-block") {
        res.style.display = "inline-block";
    } else {
        res.style.display = "none";
    }
}
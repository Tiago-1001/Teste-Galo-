let addTopic = document.querySelector('.newTopic');
let topicSubmitted = document.querySelector('.topic-submitted');
let topics = document.querySelector('.topics');

function verMais() {
    let button = document.querySelector('.verMais');
    let ellipsis = document.querySelector('#ellipsis');
    let visible = document.querySelector('.moreText');

    if (visible.style.display !== "inline-block") {

        visible.style.display = "inline-block";
        button.style.display = "none";
        ellipsis.style.display = "none";

    } else {
        visible.style.display = "none";
        button.style.display = "inline-block";
        ellipsis.style.display = "inline";
    }
};



function newTopic() {
    if (addTopic.style.display !== "inline-block") {

        addTopic.style.display = "inline-block";
    } else {

        addTopic.style.display = "none";
    }
};


function send() {
    if (addTopic.style.display && topics.style.display !== "none") {
        
        addTopic.style.display = "none";
        topics.style.display = "none";
        topicSubmitted.style.display = "block";
    }
};


function addNewTopic() {
    if (topicSubmitted.style.display !== "none") {

        topicSubmitted.style.display = "none";
        addTopic.style.display = "inline-block";
        topics.style.display = "block";

    }
}



function respost() {
    let res = document.querySelector('.res');

    if (res.style.display !== "inline-block") {
        res.style.display = "inline-block";
    } else {
        res.style.display = "none";
    }
};

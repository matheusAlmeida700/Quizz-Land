function mostrarConteudo() {
    const homePage = document.querySelector(".home-page");
    const firstQuestion = document.querySelector(".first-question");

    if (homePage.style.display === "none") {
        homePage.style.display = "flex";
        firstQuestion.style.display = "none";
    } else {
        homePage.style.display = "none";
        firstQuestion.style.display = "flex";
    }
}

function mostrarConteudo2() {
    const firstQuestion = document.querySelector(".first-question");
    const secondQuestion = document.querySelector(".second-question");

    if (firstQuestion.style.display === "none") {
        firstQuestion.style.display = "flex";
        secondQuestion.style.display = "none";
    } else {
        firstQuestion.style.display = "none";
        secondQuestion.style.display = "flex";
    }
}

function mostrarConteudo3() {
    const secondQuestion = document.querySelector(".second-question");
    const thirdQuestion = document.querySelector(".third-question");

    if (secondQuestion.style.display === "none") {
        secondQuestion.style.display = "flex";
        thirdQuestion.style.display = "none";
    } else {
        secondQuestion.style.display = "none";
        thirdQuestion.style.display = "flex";
    }
}

function mostrarConteudo4() {
    const thirdQuestion = document.querySelector(".third-question");
    const fourthQuestion = document.querySelector(".fourth-question");

    if (thirdQuestion.style.display === "none") {
        thirdQuestion.style.display = "flex";
        fourthQuestion.style.display = "none";
    } else {
        thirdQuestion.style.display = "none";
        fourthQuestion.style.display = "flex";
    }
}
function mostrarConteudo5() {
    const fourthQuestion = document.querySelector(".fourth-question");
    const finishPage = document.querySelector(".final-page");

    if (fourthQuestion.style.display === "none") {
        fourthQuestion.style.display = "flex";
        finishPage.style.display = "none";
    } else {
        fourthQuestion.style.display = "none";
        finishPage.style.display = "flex";
    }
}

function mostrarConteudo6() {
    const finishPage = document.querySelector(".final-page");
    const homePage = document.querySelector(".home-page");

    if (finishPage.style.display === "none") {
        finishPage.style.display = "flex";
        homePage.style.display = "none";
    } else {
        finishPage.style.display = "none";
        homePage.style.display = "flex";
        window.location.reload(true);
    }
}

function wrongAnswer(){
    const currentlyAnswer = document.querySelector(".wrong-answer")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer1(){
    const currentlyAnswer = document.querySelector(".wrong-answer1")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer2(){
    const currentlyAnswer = document.querySelector(".wrong-answer2")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer3(){
    const currentlyAnswer = document.querySelector(".wrong-answer3")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer4(){
    const currentlyAnswer = document.querySelector(".wrong-answer4")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer5(){
    const currentlyAnswer = document.querySelector(".wrong-answer5")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer6(){
    const currentlyAnswer = document.querySelector(".wrong-answer6")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer7(){
    const currentlyAnswer = document.querySelector(".wrong-answer7")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer8(){
    const currentlyAnswer = document.querySelector(".wrong-answer8")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer9(){
    const currentlyAnswer = document.querySelector(".wrong-answer9")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer10(){
    const currentlyAnswer = document.querySelector(".wrong-answer10")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
function wrongAnswer11(){
    const currentlyAnswer = document.querySelector(".wrong-answer11")
    currentlyAnswer.style = "background-color: red"
    setTimeout(function(){
        currentlyAnswer.style = "background-color: white"
        currentlyAnswer.style = "display: none"
    }, 700)
}
var timerEl = document.querySelector("#timer");
var startcard = document.querySelector(".StartCard");
var startbutton = document.querySelector(".Startbtn");
var timeRemaning = questionsforquiz.length*15;
var jsbtn = document.querySelector("#js");
var javascriptbtn = document.querySelector("#javascript");
var scriptbtn = document.querySelector("#script");
var scriptingbtn = document.querySelector("#scripting");
var askingquestion= document.querySelector("#askingQuestion");
var index =0;


startbutton.addEventListener("click", startQuiz);


var quizcontainer = document.querySelector("#questionContainer");
quizcontainer.style.display = "none";

function countdown () {
    timeRemaning--;
    console.log(timeRemaning)
    timerEl.textContent = timeRemaning;
    if (timeRemaning <= 0) {
        clearInterval(timer);
    } 

}

function startQuiz () {
    startcard.style.display = "none";
    quizcontainer.style.display = "block";
    showquestions()
    timer = setInterval(countdown, 1000); 
}

function showquestions () {
    askingquestion.textContent = questionsforquiz[index].question
    scriptbtn.textContent = questionsforquiz[index].choices[0]
    javascriptbtn.textContent = questionsforquiz[index].choices[1]
    scriptingbtn.textContent = questionsforquiz[index].choices[2]
    jsbtn.textContent = questionsforquiz[index].choices[3]
}
function nextquestion () {
    index++
    showquestions()
}
scriptbtn.addEventListener("click", nextquestion);
javascriptbtn.addEventListener("click", nextquestion);
scriptingbtn.addEventListener("click", nextquestion);
jsbtn.addEventListener("click", nextquestion);




$(document).ready(function () {

var question1;
var question2;
var question3;
var question4;
var question5;
var listOfQuestions = [];
var triviaQuestions; 

resetToBeginning();

function resetToBeginning() {

  triviaQuestions = [{
        question:"What are the names of the twins that played in the tv sitcom Sister Sister?",
        choices:["Mary Kate and Ashley Olsen", "Tia and Tamera Mowry", "Scarlett and Hannah Townsend", "Rachael and Lisa Carrington" ]
    }];

    //display start button
    var newButton = $("<button>").addClass("btn btn-light btn-lg startButton").text("Start");

    $("#start").append(newButton);

    //listOfQuestions = [questions];

    



}



$(".startButton").on("click", function(){
   //hide button
    $(this).hide();

    //display timer
    var timeLeft = 30;
    //var elem = document.getElementById("#timeRemaining");

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            doSomething();
        } else {
            $("#timeRemaining").text(timeLeft + " seconds remaining");
            timeLeft--;
        }
    }


    //display questions
    for(var i = 0; i < triviaQuestions.length; i++)
    
    {
        console.log(triviaQuestions[i].question);
        var newQuestion = $("<h4>");
        $("#Question").text(triviaQuestions[i].question);

    }


});




});
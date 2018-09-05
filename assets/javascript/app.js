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

  triviaQuestions = [
      {
        question:"What are the names of the twins that played in the tv sitcom Sister Sister?",
        choices: 
            {
                a: "Mary Kate and Ashley Olsen", 
                b: "Tia and Tamera Mowry",
                c: "Scarlett and Hannah Townsend",
                d: "Rachael and Lisa Carrington" 
            },
        answer: "b"            
    },

    {
        question:"On boy meets world, what is Cory Matthews older brother's name?",
        choices: 
            {
                a: "Eric", 
                b: "Shawn",
                c: "Fred",
                d: "George" 
            },
        answer: "a"            
    },

    {
        question:"In Fresh Prince of Bel-Air what was the butlers name?",
        choices: 
            {
                a: "Reginald", 
                b: "Benjamin",
                c: "Alfred",
                d: "Gefforey" 
            },
        answer: "d"            
    },

    {
        question:"In Rugrats what was Tommy younger brother name?",
        choices: 
            {
                a: "Stu", 
                b: "Phil",
                c: "Dil",
                d: "Chuckie" 
            },
        answer: "c"            
    },

    {
        question:"Which popular comedy series debuted in the 1990's and ran for the longest number of television seasons?",
        choices: 
            {
                a: "The King of Queens", 
                b: "Friends",
                c: "Seinfeld",
                d: "Everybody Loves Raymond" 
            },
        answer: "b"            
    },


];

    //display start button
    var newButton = $("<button>").addClass("btn btn-light btn-lg startButton").text("Start");

    $("#start").append(newButton);

    //listOfQuestions = [questions];

    $("#submit").hide();



}



$(".startButton").on("click", function(){
   //hide button
    $(this).hide();

    //show submit button
    $("#submit").show();

    //display timer
    var timeLeft = 300;
    //var elem = document.getElementById("#timeRemaining");

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            alert("Sorry looks like time is up!");
        } else {
            $("#timeRemaining").text(timeLeft + " seconds remaining");
            timeLeft--;
        }
    }


    //display questions
    for(var i = 0; i < triviaQuestions.length; i++)
    
    {
        console.log(triviaQuestions[i].question);
        console.log(triviaQuestions[i].choices[0]);
        var newQuestionDiv = $("<div>").addClass("seperateQuestions");
        var newAnswerDiv = $("<div>").addClass("seperateAnswers");
        var newQuestion = (i + 1) + ": " + triviaQuestions[i].question + '</br>';
        var listOfAnswers = [];

        
        
        
        for(letter in triviaQuestions[i].choices){
           // var answerButtons = $("<input>").attr("type", "radio");
            //var label = answerButtons.attr("name", triviaQuestions[i].choices[j]);
            //answerButtons.text("name",triviaQuestions[i].choices[j]);
            listOfAnswers.push( `<label> <input type="radio" name="question${i}" value="${letter}">  ${triviaQuestions[i].choices[letter]}</label>`);
 
        }
        newQuestionDiv.html(newQuestion);
        newAnswerDiv.html(listOfAnswers);
        $("#QuizGame").append(newQuestionDiv,newAnswerDiv );
       // $("#Choices").append(listOfAnswers + '</br>');


    }



});




});
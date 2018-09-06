$(document).ready(function () {

var question1;
var question2;
var question3;
var question4;
var question5;
var listOfQuestions = [];
var triviaQuestions; 
var wins = 0;
var losses = 0;
var unanswered = 0;
var userGuess;
var timeLeft = 30;
//var elem = document.getElementById("#timeRemaining");

var timerId;

//display start button
//var newButton = $("<button>").addClass("btn btn-light btn-lg startButton").text("Start");

//$("#start").append(newButton);

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

    $("#start").show();

    //listOfQuestions = [questions];

    $("#submit").hide();
    $("#playAgain").hide();
    $("#Results").empty();

    wins = 0;
    losses = 0;
    unanswered = 0;
    


}

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        timeLeft = 30;
        alert("Sorry looks like time is up!");     
        displayScore();

    } else {
        $("#timeRemaining").text(timeLeft + " seconds remaining");
        timeLeft--;
    }
}

function displayScore(){

    


    for(var i = 0; i < triviaQuestions.length; i++){
        userGuess = $(`input[name=${i}]:checked`).val();
        console.log(userGuess);
   
        if(userGuess === triviaQuestions[i].answer ){
           wins++;
        }
        else if(typeof userGuess === 'undefined' ){
            unanswered++;
        }
        else{
            losses++;
        }
   
    }

    $("#timeRemaining").hide();
    $("#QuizGame").empty();
    $("#submit").hide();
    

    var correct = $("<div> Correct : " + wins + "</div>");
    var incorrect = $("<div> Incorrect : " + losses + "</div>");
    var didntAnswer = $("<div> Unanswered : " + unanswered + "</div>");

    $("#Results").append(correct,incorrect,didntAnswer);
    $("#Results").show();
    $("#playAgain").show();
   
    

}



$(".startButton").on("click", function(){

    $("#timeRemaining").hide();
    timerId = setInterval(countdown, 1000);

   //hide button
    $(this).hide();

    //show submit button
    $("#submit").show();

    $("#timeRemaining").show();




    //display questions
    for(var i = 0; i < triviaQuestions.length; i++)
    
    {
        console.log(triviaQuestions[i].question);
        console.log(triviaQuestions[i].choices[0]);
        var newQuestionDiv = $("<div>").addClass("seperateQuestions");
        var newAnswerDiv = $("<div>").addClass("seperateAnswers");
        var newQuestion = (i + 1) + ": " + triviaQuestions[i].question + '</br>';
        var listOfAnswers = [];

        newQuestionDiv.attr("name", i );
        
        
        for(letter in triviaQuestions[i].choices){
           // var answerButtons = $("<input>").attr("type", "radio");
            //var label = answerButtons.attr("name", triviaQuestions[i].choices[j]);
            //answerButtons.text("name",triviaQuestions[i].choices[j]);
            listOfAnswers.push( `<label> <input type="radio" name="${i}" value="${letter}">  ${triviaQuestions[i].choices[letter]}</label>`);
 
        }
        newQuestionDiv.html(newQuestion);
        newAnswerDiv.html(listOfAnswers);
        $("#QuizGame").append(newQuestionDiv,newAnswerDiv );
       // $("#Choices").append(listOfAnswers + '</br>');


    }



});

$("#submit").on("click", function(){

    clearTimeout(timerId);
    
    
    

    displayScore();


});

$('#playAgain').on('click', function(){
    $("#Results").hide();
	$(this).hide();
	resetToBeginning();
});




});
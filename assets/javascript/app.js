var trivia = [
    {question: "Which of the following sports is not part of the triathlon?", 
    choices:["Cycling", "Swimming", "Running", "Horse-Riding"],
    answer: "Horse-Riding"},
    {question: "Which country will host the 2020 Summer Olympics?", 
    choices:["China", "Australia", "Germany", "Japan"],
    answer: "Japan"},
    {question: "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?", 
    choices:["Jose Fernandez", "Jacob deGrom", "Shelby Miller", "Matt Harvey"],
    answer: "Jose Fernandez"},
    {question: "Which team has won the most Stanley Cups in the NHL?",
    choices:["Chicago Blackhawks", "Toronto Maple Leafs", "Montreal Canadians", "Detroit Red Wings"],
    answer: "Montreal Candadians"},
    {question: "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?", 
    choices:["0 - 1", "7 - 1", "3 - 4", "16 - 0"],
    answer: "7 - 1"}
];
console.log(trivia);

var questionIndex = 0;
var score = 0;
var breakTime = 3;
var time = 31;
var intervalId;

$("#question-area").hide();
//Click the button to start the game
$("#start").on("click", startGame)

function displayQuestion() {
    
    console.log(trivia);
    $("#questions").html("<h2>" + trivia[questionIndex].question + "</h2>");

    for (var i = 0; i < 4; i++) {
        var button = $("<button class= 'btn btn-lg btn-outline-secondary btn-block'>");
        button.text(trivia[questionIndex].choices[i]);
        button.attr('data-id', i);
        $("#choices").append(button);
    }
    result();

    intervalId = setInterval(timer, 1000);
}

function result() {
    $("#choices").on("click", "button", function(key) {
        var userChoice = $(this).trivia[questionIndex].answer;
        console.log(userChoice);
        console.log(trivia[questionIndex].answer);
        clearInterval(intervalId);
        time = 31;

        if(userChoice !== trivia[questionIndex].answer) {
            $("#choices").html("Wrong Answer!");
            $("#choices").html("Correct answer is " + trivia[questionIndex].answer);
        } 
        else if (userChoice === trivia[questionIndex].answer) {
            $("#choices").html("Correct!");
        }
        intervalId = setInterval(bTime, 1000);
        
    });
}

function updateScore() {
    $("#score").text("Score:" + score);
    
}

function startGame() {
    timer();
    displayQuestion();
    $("#start").hide();
    $("#question-area").show();
        
}
function bTime() {
    breakTime--;

    if(breakTime === 0) {
        clearInterval(intervalId);
        $("#choices").empty();
        displayQuestion();
        timer();
    }
}

function timer() {
    time--;

    $("#time").html("<h2>Time Remaining: " + time + " Seconds</h2>");
    if (time === 0) {
        clearInterval(intervalId);
        $("#choices").html("Times Up!");

        return;
    }
}
function next() {
    questionIndex++;
        
    setTimeout(displayQuestion, 1000);
      
    
    // if(count === images.length) {
    // //     count = 0;
    // // }

}
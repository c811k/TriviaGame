var trivia = [
    {question: "Which of the following sports is not part of the triathlon?", 
    choices:["Cycling", "Swimming", "Running", "Horse-Riding"],
    answer: "Horse-Riding",
    image: "assets/images/horse-riding.jpg"},
    {question: "Which country will host the 2020 Summer Olympics?", 
    choices:["China", "Australia", "Germany", "Japan"],
    answer: "Japan",
    image: "assets/images/japan.jpg"},
    {question: "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?", 
    choices:["Jose Fernandez", "Jacob deGrom", "Shelby Miller", "Matt Harvey"],
    answer: "Jose Fernandez",
    image: "assets/images/jose-fernandez.jpg"},
    {question: "Which team has won the most Stanley Cups in the NHL?",
    choices:["Chicago Blackhawks", "Toronto Maple Leafs", "Montreal Canadians", "Detroit Red Wings"],
    answer: "Montreal Canadians",
    image: "assets/images/montreal-canadians.jpg"},
    {question: "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?", 
    choices:["0 - 1", "7 - 1", "3 - 4", "16 - 0"],
    answer: "7 - 1",
    image: "assets/images/germany.jpg"},
];

var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var count = 30;
var intervalId;

//Click the button to start the game
$("#start").on("click", next);

$("#questions").on("click", "button", function(key) {
    var userGuess = $(this).text();
    if(userGuess === trivia[questionIndex].answer) {
        clearInterval(clock);
        win();
    }
    else {
        clearInterval(clock);
        loss();
    }
});

function displayQuestion() {
    $("#questions").html("<h2>" + 
        trivia[questionIndex].question + 
    	"</h2><button class= 'choices btn btn-lg btn-outline-secondary btn-block mt-5'>" + 
    	trivia[questionIndex].choices[0] + 
    	"<button class= 'choices btn btn-lg btn-outline-secondary btn-block'>" + 
    	trivia[questionIndex].choices[1] + 
    	"<button class= 'choices btn btn-lg btn-outline-secondary btn-block'>" +  
    	trivia[questionIndex].choices[2] + 
    	"<button class= 'choices btn btn-lg btn-outline-secondary btn-block'>" + 
    	trivia[questionIndex].choices[3]);
}
    
function win() {
    $("#questions").html("<h2>Correct!</h2>");
    $("#questions").append("<img src=" + trivia[questionIndex].image + " class='img-thumbnail'>");
    correct++;
	setTimeout(next, 4000);
	questionIndex++;
}

function loss() {
    $("#questions").html("<h2>You are wrong!</h2>");
    var correctAnswer = trivia[questionIndex].answer;
    $("#questions").append("<h4>The answer was " + correctAnswer + "</h4></class>");
    $("#questions").append("<img src=" + trivia[questionIndex].image + " class='img-thumbnail'>");
    incorrect++;
    setTimeout(next, 4000);
    questionIndex++;
}

function userTimeout() {
    if(count === 0) {
        $("#questions").html("<h2>Time Up!</h2>");
        var correctAnswer = trivia[questionIndex].answer;
        console.log(correctAnswer);
        $("#questions").append("<h4>The answer was " + correctAnswer + "</h4>");
        $("#questions").append("<img src=" + trivia[questionIndex].image + " class='img-thumbnail'>");
        incorrect++;
        setTimeout(next, 4000);
        questionIndex++;
    }
}

function result() {
   
    $("#questions").html("<h3>Correct: " + correct + "</h3>" + "<h3>Incorrect: " + incorrect + "</h3>");
    $("#questions").append("<button id='start-over' type='button' class='btn btn-lg btn-outline-secondary btn-block mt-5'>Start Over?</button>");
    $("#start-over").on("click", next);
    reset();
}

function timer() {
    clock = setInterval(countdown, 1000);
    function countdown() {
        if(count < 1) {
            clearInterval(clock);
            userTimeout();
        }
        if(count > 0) {
            count--;
        }
        $("#time").html("<h2>Time Remaining: " + count + " Seconds</h2>");
    }
}

function next() {
    $("#start").hide();
    if (questionIndex < trivia.length) {
        count = 30;
        $("#time").html("<h2>Time Remaining: " + count + " Seconds</h2>");
        displayQuestion();
        timer();
        userTimeout();
    }
    else {
        result();
    }
    
}

function reset() {
    questionIndex = 0;
    correct = 0;
    incorrect = 0;
}


var time = document.querySelector(".time");
var start = document.querySelector("#start");
var content = document.querySelector("#content");
var questionDisplay = document.querySelector("#questionDisplay");
var answersDisplay = document.querySelector(".answersDisplay");
var answerDisplay0 = document.querySelector("#answerDisplay0");
var answerDisplay1 = document.querySelector("#answerDisplay1");
var answerDisplay2 = document.querySelector("#answerDisplay2");
var answerDisplay3 = document.querySelector("#answerDisplay3");
var index = 0;
var secondsRemaining = 60;
var highScore;
var questions = [
    {
        question: "Who is considered the person who started the Romantic movement in art?",
        answers: ["Francisco Goya", "Taylor Swift", "Johann Sebastion Bach", "Ludwig van Beethoven"],
        correctAnswer: "Ludwig van Beethoven"
    },
    {
        question: "Who is Ash Ketchum's favorite Pokemon?",
        answers: ["Picachoo", "Pikachoo", "Picachu", "Pikachu"],
        correctAnswer: "Pikachu"
    },
    {
        question: "Who invented the toilet?",
        answers: ["John Harington", "Ismail al-Jazari", "Joseph Bramah", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Who is Geralt?",
        answers: ["A human", "A cow", "A fish", "A mutant"],
        correctAnswer: "A mutant"
    },
    {
        question: "Is the world round?",
        answers: ["Airplane windows are curved, so no", "Have you been skydiving? Of course it's round", "There's an ice wall on the edge of the world, it's flat.", "BLASPHEMY!!!"],
        correctAnswer: "BLASPHEMY!!!"
        //tehe
    }
]

function setTime() {
    //if the textContent === Blasphemy, set onclick attribute to endGame
    //stop setInterval, and return secondsRemaining
    //store secondsRemainging in localStorage
    if (answerDisplay3.textContent !== "BLASPHEMY!!!") {
        var timerInterval = setInterval(function () {
            secondsRemaining--;
            time.textContent = secondsRemaining + " seconds remaining";
            if (secondsRemaining <= 0) {
                clearInterval(timerInterval);
                alert("Nice try")
            }
        }, 1000)
    } else {
        answerDisplay3.setAttribute("onclick", "endGame()")
    }
}

function endGame() {
        document.getElementById("endGame-message").textContent="Congrats! You won with " + secondsRemaining + " points!"
}

start.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("content").style.visibility = "visible";
    setTime();
    loadQuiz();
});

function loadQuiz() {
    console.log(index)
    questionDisplay.textContent = questions[0].question;
    answerDisplay0.textContent = questions[0].answers[0];
    answerDisplay1.textContent = questions[0].answers[1];
    answerDisplay2.textContent = questions[0].answers[2];
    answerDisplay3.textContent = questions[0].answers[3];
}


//add second function to move forward in quiz
function contQuiz() {
    questionDisplay.textContent = questions[index].question;
    answerDisplay0.textContent = questions[index].answers[0];
    answerDisplay1.textContent = questions[index].answers[1];
    answerDisplay2.textContent = questions[index].answers[2];
    answerDisplay3.textContent = questions[index].answers[3];
}

//
function checkAnswer() {
    console.log(questions.length)
    if (index < questions.length - 1) {
        var userSelection = event.target;
        console.log(index)
        if (userSelection.textContent !== questions[index].correctAnswer) {
            secondsRemaining -= 5;
        } else {
            index++, contQuiz()
        }
    }
};


function storeHigh() {
    if (highScore != null) {
        if (secondsLeft > highScore) {
            var initials = confirm("What are your initials?")
            var newHighScore = initials + " : " + secondsLeft
            console.log(initials + " : " + secondsLeft);
            localStorage.setItem("newHighscore", JSON.stringify(newHighScore));
        } else {
            console.log(initials + " : " + secondsLeft)
        }
    } else {
        highscore = initials + " : " + secondsLeft;
    };
}
    //enter initials for score
    //display score
    //use localStorage to keep track of scores




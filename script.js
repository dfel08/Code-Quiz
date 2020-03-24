var time = document.querySelector(".time");
var start = document.querySelector("#start");
var content = document.querySelector("#content");
var questionDisplay = document.querySelector("#questionDisplay");
var answersDisplay = document.querySelector(".answersDisplay");
var answerDisplay0 = document.querySelector("#answerDisplay0");
var answerDisplay1 = document.querySelector("#answerDisplay1");
var answerDisplay2 = document.querySelector("#answerDisplay2");
var answerDisplay3 = document.querySelector("#answerDisplay3");
var index = 3;
var secondsRemaining = 25;
var questions = [
    {
        question: "Who is considered the person who started the Romantic movement in art?",
        answers: {
            a: "Francisco Goya",
            b: "Taylor Swift",
            c: "Johann Sebastion Bach",
            d: "Ludwig van Beethoven"
        },
        correctAnswer: "d"
    },
    {
        question: "Who is Ash Ketchum's favorite pet?",
        answers: {
            a: "Picachoo",
            b: "Pikachoo",
            c: "Picachu",
            d: "Pikachu"
        },
        correctAnswer: "d"
    },
    {
        question: "Who invented the toilet?",
        answers: {
            a: "John Harington",
            b: "Ismail al-Jazari",
            c: "Joseph Bramah",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Who is Geralt?",
        answers: {
            a: "A human",
            b: "A cow",
            c: "A fish",
            d: "A mutant"
        },
        correctAnswer: "d"
    },
    {
        question: "Is the world round?",
        answers: {
            a: "Airplane windows are curved, so no",
            b: "Have you been skydiving? Of course it's round",
            c: "There's an ice wall on the edge of the world, it's flat.",
            d: "BLASPHEMY!!!",
        },
        correctAnswer: "d"
        //tehe
    }
]

function setTime() {
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        time.textContent = secondsRemaining + " seconds remainging";
        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            alert("Nice try")
        }
    }, 1000);
}

start.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("questionDisplay").style.visibility = "visible";
    setTime();
    quiz(index);
});
console.log(Object.values(questions[0].answers))
function quiz() {
    questionDisplay.textContent = questions[0].question;
    var answersArray = [
        answerDisplay0.textContent = questions[0].answers,
        answerDisplay1.textContent = questions[1].answers,
        answerDisplay2.textContent = questions[2].answers,
        answerDisplay3.textContent = questions[3].answers
    ];
    checkAnswer();

    for (var i = 0; i < answersArray.length; i++) {
        if (i < questions.length) {
            quiz()
        } else {
            endQuiz()
        }
    }


   
    
    if ((questions.correctAnswer) != "d") {
        secondsLeft -= -10
        } else {
        console.log(question.correctAnswer)
        }
    }
    
    
    
    function checkAnswer() {
      answersDisplay.addEventListener("click", function () {
        console.log("check answer clicked")
        var userSelection = event.target;
        if (userSelection !== questions[index].correctAnswer) {
          secondsLeft -= -10
        } else {
          console.log("correct answer");
        }
      });
    } 
    
    
    function endGame() {
    }


// for (var i = 0; i < questions.length; i++) {
//     function startQuiz() {
//         $("div").append(questions[i]);

//     }
//     document.getElementById("start").addEventListener("click", startQuiz);
// }
//not working



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
        correctAnswer: "Ludwig van Beethoven"
    },
    {
        question: "Who is Ash Ketchum's favorite Pokemon?",
        answers: {
            a: "Picachoo",
            b: "Pikachoo",
            c: "Picachu",
            d: "Pikachu"
        },
        correctAnswer: "Pikachu"
    },
    {
        question: "Who invented the toilet?",
        answers: {
            a: "John Harington",
            b: "Ismail al-Jazari",
            c: "Joseph Bramah",
            d: "All of the above"
        },
        correctAnswer: "All of the above"
    },
    {
        question: "Who is Geralt?",
        answers: {
            a: "A human",
            b: "A cow",
            c: "A fish",
            d: "A mutant"
        },
        correctAnswer: "A mutant"
    },
    {
        question: "Is the world round?",
        answers: {
            a: "Airplane windows are curved, so no",
            b: "Have you been skydiving? Of course it's round",
            c: "There's an ice wall on the edge of the world, it's flat.",
            d: "BLASPHEMY!!!",
        },
        correctAnswer: "BLASPHEMY!!!"
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
    document.getElementById("content").style.visibility = "visible";
    setTime();
    quiz(index);
});
console.log(Object.values(questions[0].answers))
function quiz(index) {//check
    questionDisplay.textContent = questions[index].question;
    // var answersArray = [
        answerDisplay0.textContent = questions[index].answers.a,
        answerDisplay1.textContent = questions[index].answers.b,
        answerDisplay2.textContent = questions[index].answers.c,
        answerDisplay3.textContent = questions[index].answers.d
    // ];
    checkAnswer();

    // for (var i = 0; i < answersArray.length; i++) {
    //     if (i < questions.length) {
    //         //check
    //     } else {
    //         endQuiz()
    //     }
    // }

}
   
    

    
    
    
function checkAnswer() {
    answersDisplay.addEventListener("click", function () {

        var userSelection = event.target;
        if (userSelection.textContent !== questions[index].correctAnswer) {
          secondsRemaining -= 5;

        } else {
          console.log("correct answer");
          
        }
       //check if there's a next question.
            //if yes, 
                //increase index
                //then render next question
        //if no, then endGame
      });
    } 
   
    
    function endGame() {
    }   //enter initials for score 
    //display score
    //use localStorage to keep track of scores


// for (var i = 0; i < questions.length; i++) {
//     function startQuiz() {
//         $("div").append(questions[i]);

//     }
//     document.getElementById("start").addEventListener("click", startQuiz);
// }
//not working



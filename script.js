// # 04 Web APIs: Code Quiz

// As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// ## User Story

// ```
// AS A coding bootcamp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```

// Quiz with questions, options, and answers
var quiz = [{"question": "What are the building blocks of the web?",
choices: ["Ruby, Python, HTML", "JavaScript, jQuery, Bootstrap", "HTML, CSS, JavaScript", "Variables, C++, jQuery"],
answer: 2
},

{"question": "How many continents are in Planet Earth?",
choices: ["3", "7", "11", "25"],
answer: 1
},

{"question": "Who are the members in the band blink-182?",
choices: ["Scott Raynor, Matt Skiba, Tom Delonge", "Steve Aiko, Nark Hoppus, Alex Gaskarth", "Goody Grace, Travis Barker, Lil Wayne", "Mark Hoppus, Matt Skiba, Travis Barker"],
answer: 1
},

{"question": "adasdfasdfa is gsgasdHTML?",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "dsfasdfadfa",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "sadfadfadasf",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "fdasfkasfhjkasldfjhkasd",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "sdfahajksdfjaklsdfbalksjdf",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "sadhufalshfjaklsljdfkasdjk",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "d",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "w",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question":  "e",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "r",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "r",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "y",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "u",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "q",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "i",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "k",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"question": "m",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
}];

// Setting number variables 
var score = 0; 
var timer = 5;
var progress = 0;
var questionCounter = 0;

// Setting global variables
var choiceButton

// Input form is hidden until the quiz is over
$('#input-initial').attr("style", "display:none");

// Function after clicking the button
$("#start-button").on("click", function() {
    var timerDisplay = setInterval(function () {

        // If timer is less than or equal to zero... 
        if (timer <= 0) {
        
          // ...the timer will stop and clear from screen...
          clearInterval(timerDisplay);
          $('#countdown').text("");

          // ... a message will display...
          quizFinish = $('<h2>');
          quizFinish.text(`Thank you for completing the quiz. Your final score is ${score}.`);
          $('#final-score').append(quizFinish);

          // ...and the form to input your initials will pop up
          $('#input-initial').attr("style", "display:block");
          
          // ... along with a button to allow you to save your score
          submitButton = $('<button>');
          submitButton.text('Submit');
          $('#initial').append(submitButton);

          return;
        }

        // else if the countdown is going, the timer will display...
        $('#countdown').text(timer);

        /// ...and go down by one second
        timer--;
    }, 1000);

    // Run the following functions on click while the timer is running
    showAnswer(questionCounter);
    showQuestions(questionCounter);
    whatQuestionAreWeIn();
});

// Run this function to switch questions/answers  
function showQuestions(questionCounter) {
        
    for (var i = 0; i < quiz.length; i++) {
        singleQuestion = $('#question').text(quiz[questionCounter].question);    
        $('#question').append(singleQuestion);        
        questionCounter++;
    }
}

function showAnswer(questionCounter) {
    for (var i = 0; i < quiz[questionCounter].choices.length; i++) {
        choiceButton = $('<button>');
        choiceButton.val(quiz[questionCounter].choices[i]);
        choiceButton.text(quiz[questionCounter].choices[i]);
        $('#choice-buttons').append(choiceButton);
    }
} 

$('#choice-buttons').on('click', 'button', function(){
    showQuestions(questionCounter);
})


// Displays what question the user is on out of the total
function whatQuestionAreWeIn(){ 
    progress++;
    $('#progress').text(progress);
};


// make button clicker - every time it clicks, go to next ?
// to show next ?, up the value of the ? counter 0++
// run questioncounter again (run itself)


// Questions
// How to make the questions disappear when the timer is out or when the user finishes

// how to make the start click button only go once

// how to make the question line up with the answers and how to make the questions generate

// houww to do the local storage for the input

// how to create a leaderboard
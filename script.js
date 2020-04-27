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


var quiz = [{"index": 0, "question": "What are the building blocks of the web?",
"choices": ["Ruby, Python, HTML", "JavaScript, jQuery, Bootstrap", "HTML, CSS, JavaScript", "Variables, C++, jQuery"],
"answer": 2
},

{"index": 1, "question": "How many continents are in Planet Earth?",
"choices": ["3", "7", "11", "25"],
"answer": 1
},

{"index": 2, "question": "Who are the members in the band blink-182?",
choices: ["Scott Raynor, Matt Skiba, Tom Delonge", "Steve Aiko, Nark Hoppus, Alex Gaskarth", "Goody Grace, Travis Barker, Lil Wayne", "Mark Hoppus, Matt Skiba, Travis Barker"],
answer: 3
},

{"index": 3, "question": "What is HTML?",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 0
},

{"index": 4, "question": "Who are one of the characters in the popular sitcom 'Friends'?",
choices: ["Barney Stinson", "Chandler Bing", "Dwight Schrute", "Jay Pritchett"],
answer: 1
},

{"index": 5, "question": "sadfadfadasf",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 6, "question": "fdasfkasfhjkasldfjhkasd",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 7, "question": "sdfahajksdfjaklsdfbalksjdf",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 8, "question": "sadhufalshfjaklsljdfkasdjk",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 9, "question": "d",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 10, "question": "w",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 11, "question":  "e",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 12, "question": "r",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 13, "question": "r",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 14, "question": "y",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 15, "question": "u",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 16, "question": "q",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 17, "question": "i",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 18, "question": "k",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
},

{"index": 19, "question": "m",
choices: ["the structure of a webpage", "the styling of a webpage", "user interactivty in a webpage", "one of the programming languages"],
answer: 1
}];

// Setting number variables 
var score = 0; 
var timer = 15;
var progress = 1;
var questionCounter = 0;

// Setting global variables
var choiceButton; 
var submission;
var returnToHomePage;
var clearList;

// Hiding items until prompted

// Progress bar is hidden until the user presses the 'start' button
$('#progress-bar').attr("style", "display:none");

// Input form is hidden until the quiz is over
$('#input-initial').attr("style", "display:none");

// 'Start-Over' and "Clear-Leaderboard" buttons are hidden until the the user submits his/her score
$('#start-over').attr("style", "display:none");
$('#clear-leaderboard').attr("style", "display:none");

// Leaderboard is hidden also until submission of user initials
$('#leaderboard').attr("style", "display:none");

// Function after clicking the start-button
$("#start-button").on("click", function() {
    var timerDisplay = setInterval(function () {

        // If timer is less than or equal to zero... 
        if (timer <= 0 || questionCounter > 19) {
        
          // ...the timer will stop and clear from screen...
          clearInterval(timerDisplay);
          $('#countdown').text("");

          // ...remove the questions, answers, and progress...
          $('#first-page').attr("style", "display:none");

          // ... a message will display...
          quizFinish = $('<h2>');
          quizFinish.text(`Thank you for completing the quiz. Your final score is ${score}.`);
          $('#input-initial').prepend(quizFinish);

          // ...and the form to input your initials will pop up
          $('#input-initial').attr("style", "display:block");

          return;
        }

        // else if the countdown is going, the timer will display...
        $('#countdown').text(timer);

        /// ...and go down by one second
        timer--;
    }, 1000);

    // Disable "View High Scores Button"
    $('#score').attr("disabled", true);

    // Run the following functions on click while the timer is running
    // Rotation of questions in quiz
    showQuestions(questionCounter);

    // Progress bar to show what question the user is on
    whatQuestionAreWeIn();

    // Remove 'start' button
    startButton = document.getElementById('start-button');
    startButton.parentNode.removeChild(startButton);

    // Show progress bar
    $('#progress-bar').attr("style", "display:block");

});

// Run this function to switch questions and answers  
function showQuestions(questionCounter) {
    question = quiz[questionCounter];
    singleQuestion = $('#question').text(quiz[questionCounter].question);    
    $('#question').append(singleQuestion);      

    // Generate buttons per choice for every question in rotation
    for (var i = 0; i < quiz[questionCounter].choices.length; i++) {
        choiceButton = $('<button>');
        choiceButton.val(i);
        choiceButton.text(quiz[questionCounter].choices[i]);
        $('#choice-buttons').append(choiceButton);
    };
};

// Clicking on the choice buttons trigger the answer and questions to change
$('#choice-buttons').on('click', 'button', function(){

    // What happens when a user chicks one of the choice buttons
    if (this.value == quiz[questionCounter].answer) {
        score++;
    } else {
        timer = timer - 5; 
    }

    // index goes up
    questionCounter++;

    // remove previous choice button group
    $('#choice-buttons').children().remove();

    // Run the following functions on click while the timer is running
    // Rotation of questions in quiz
    showQuestions(questionCounter);

    // Progress bar to show what question the user is on
    whatQuestionAreWeIn();
});    

// Displays what question the user is on out of the total
function whatQuestionAreWeIn(){ 
    $('#progress').text(progress);
    progress++;
};


var scoreInput = document.getElementById("initial");
var scoreForm = document.getElementById("input-initial");
var scoreList = document.getElementById("scoreList");

var highScores = [];

init();

function renderScoreList() {
for (var i = 0; i < highScores.length; i++) {
    var oneScoreInitial = highScores[i];
    console.log(oneScoreInitial);

    var li = $('<li>');
    li.text(oneScoreInitial);

    $('#scoreList').append(li);
}};
  
function init() {
 
  storedScoreInitials = JSON.parse(localStorage.getItem("highScores"));
  console.log(storedScoreInitials);


  if (storedScoreInitials !== null) {
    highScores = storedScoreInitials;
    console.log(highScores);

  }

  renderScoreList();
};

function storeScoreList() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(localStorage.setItem("highScores", JSON.stringify(highScores)));
};

var letters = "abcdefghijklmnopqrstuvwxyz".split('');

$('#submit').on('click', function(event) {

    // Use preventdefault to not have submit button autmatically send to server
    event.preventDefault();

    // Create new heading
    highScoreTitle = $('<h2>');
    highScoreTitle.text("My High Scores");
    $('#scoreList').prepend(highScoreTitle);

    // Combine user input and score
    submission = {};
    console.log(submission);
    submission.initials = $('#initial')[0].value; 
    console.log(submission.initials);
   
    submission.score = score;
    console.log(submission.score);

    
    // Return to function if user does not input anything
    if (scoreInput === "") {
        alert("Please type your initials in the corresponding boxes. Thank you!");
        return;
    }

    // Push combined result (initial + score) to array
    highScores.push(submission);
    console.log(highScores);

    // Generate function to display leaderboard
    generateLeaderboard();
});




function generateLeaderboard(){

    // Remove input form and score result heading
    $('#final-page').remove();
    

    // Hide main title, 'start' button, and progress bar
    $('#first-page').attr("style", "display:none");

    // Run functions to publish comnbined result to leaderboard
    renderScoreList();
    storeScoreList();

    // 'Start-Over' and "Clear-Leaderboard" buttons in view, along with leaderboard
    $('#start-over').attr("style", "display:block");        
    $('#clear-leaderboard').attr("style", "display:block");
    $('#leaderboard').attr("style", "display:block");
};

// If user clicks on "View High Scores" Leaderboard at the start of the page
$('#score').on('click', function(e) {

    // Use preventdefault to not have submit button autmatically send to server
    e.preventDefault();

    // Create new heading
    highScoreTitle = $('<h2>');
    highScoreTitle.text("My High Scores");
    $('#scoreList').prepend(highScoreTitle);
  
    // Generate function to display leaderboard
    generateLeaderboard();

    // Disable button after one click so that user does not accidentally click it
    $('#score').attr("disabled", true);

    return true;
});

// Alerts for both buttons in the Leaderboard Page
$('#start-over').on('click', function() {
    alert("Please refresh your browser to start the quiz again. Thank you!");
});

$('#clear-leaderboard').on('click', function() {
    alert("Make sure to either refresh your browser or close this tab so that you can clear your leaderboard!");
});

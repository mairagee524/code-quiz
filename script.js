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
choices: ["Scott Raynor, Matt Skiba, Tom Delonge", "Steve Aiko, Mark Hoppus, Alex Gaskarth", "Goody Grace, Travis Barker, Lil Wayne", "Mark Hoppus, Matt Skiba, Travis Barker"],
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

{"index": 5, "question": "Where is the Eiffel Tower located?",
choices: ["Paris, France", "Rome, Italy", "Amsterdam, the Netherlands", "Prague, Czech Republic"],
answer: 0
},

{"index": 6, "question": "Emma Stone starred with Ryan Gosling in what movie?",
choices: ["Superbad", "Easy A", "The Notebook", "La La Land"],
answer: 3
},

{"index": 7, "question": "The Beatles consisted of 4 members - they are George Harrison, John Lennon, Ringo Starr and...",
choices: ["Paul McCartney", "Axl Rose", "Elvis Presley", "Slash"],
answer: 0
},

{"index": 8, "question": "Big Bird was one of the main characters in ...",
choices: ["Caillou", "TeleTubbies", "Sesame Street", "Mr. Roger's Neighborhood"],
answer: 2
},

{"index": 9, "question":  "What is the world's highest mountain",
choices: ["Kilimanjaro", "K2", "Mount Everest", "Makalu"],
answer: 2
},

{"index": 10, "question": "How do you create a new element with jQuery?",
choices: ["$('#start').append(newButton)", "newElement.innerHTML = 'This is how you make a new element'", "var newDiv = document.createElement(div)", "var bElement = $('<button>')"],
answer: 3
},

{"index": 11, "question": "'You're the One that I Want' is a famous duet by...",
choices: ["Mariah Carey and Ne-Yo", "Olivia Newton-John and John Travolta", "Whitney Houston and Enrique Iglesias", "Nelly Furtado and Timbaland"],
answer: 1
},

{"index": 12, "question": "Which of the following are NOT part of the 7 new wonders of the world? ",
choices: ["Machu Picchu", "Christ the Redeemer", "Great Pyramid of Giza,", "Taj Mahal"],
answer: 2
},

{"index": 13, "question": "In the movie 'Avengers: Endgame', who did the ultimate sacrifice by putting on the guantlet and snapping his fingers?",
choices: ["Hulk", "Iron Man", "Captain America", "Thor"],
answer: 1
},

{"index": 14, "question": "Eminem starred in the movie '8 mile' with a lead single named...",
choices: ["Not Afraid", "Lose Yourself", "When I'm Gone", "Spend Some Time"],
answer: 1
},

{"index": 15, "question": "What ocean lies in the east coast of the United States?",
choices: ["Atlantic", "Eastern", "Indian", "Pacific"],
answer: 0
},

{"index": 16, "question": "How do you execute a function?",
choices: ["var runFunction = function", "function = x + y", "function = ['a'. 'b'. 'c']", "function()"],
answer: 3
},

{"index": 17, "question": "Ed O' Neill and Sofia Vergara were part of what comedy show?",
choices: ["New Girl", "How I Met Your Mother", "Modern Family", "Brooklyn 99"],
answer: 2
},

{"index": 18, "question": "What does API stands for?",
choices: ["Application Programming Index", "AJAX Project Index", "Attributes Python Item", "Application Programming Interface"],
answer: 3
},

{"index": 19, "question": "Which of the following singers did NOT perform at a Superbowl half-time show?",
choices: ["Taylor Swift", "Lady Gaga", "Shakira", "Katy Perry"],
answer: 0
}];

// Setting number variables 
var score = 0; 
var timer = 60;
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

// Leaderboard Page is hidden until user submits initials
$('#start-over').attr("style", "display:none");
$('#clear-leaderboard').attr("style", "display:none");
$('#scoreTitle').attr("style", "display:none")
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
          quizFinish.attr("class", "finishquiz");
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
        choiceButton.attr("class", "choicebutton");
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

    // Question index goes up
    questionCounter++;

    // Remove previous choice button group
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

// Variables for maipulating data
var scoreInput = document.getElementById("initial");
var scoreForm = document.getElementById("input-initial");
var scoreList = document.getElementById("scoreList");

// Array of scores and letter initials from user
var highScores = [];

// Run this function to parse array data
parseScores();

// Create a new li for each score-initial combo
function renderScoreList() {
for (var i = 0; i < highScores.length; i++) {
    var oneScoreInitial = highScores[i];
    var li = $('<li>');

    // Convert object to string
    scoreInitialString = oneScoreInitial.initials + ' - ' + oneScoreInitial.score;

    // Add text to li and add to scorelist board
    li.text(scoreInitialString);
    $('#scoreList').append(li);
}};
  
// Parse stored score and initials found in array
function parseScores() {
  storedScoreInitials = JSON.parse(localStorage.getItem("highScores"));

  // Update highScores array with scores and initials from localStorage
  if (storedScoreInitials !== null) {
    highScores = storedScoreInitials;
  };
};

// Set highScores array data 
function storeScoreList() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

// What happens when user clicks on the 'submit' button?
$('#submit').on('click', function(event) {

    // Use preventdefault to not have submit button autmatically send to server
    event.preventDefault();

    // Combine user input and score
    submission = {};
    submission.initials = $('#initial')[0].value; 
    submission.score = score;
    
    // Return to function if user does not input anything
    if ($('#initial')[0].value === "") {
        alert("Please type your initials in the corresponding box. Thank you!");
        return;
    };

    // Push combined result (initial + score) to array
    highScores.push(submission);

    // Generate function to display leaderboard
    generateLeaderboard();
});

// Create a scorebard
function generateLeaderboard(){

    // Remove input form and score result heading
    $('#final-page').remove();

    // Hide main title, 'start' button, and progress bar
    $('#first-page').attr("style", "display:none");

    // Run functions to publish overall result to leaderboard
    renderScoreList();
    storeScoreList();

    // 'Start-Over' and "Clear-Leaderboard" buttons in view, along with scoreboard and title 
    $('#start-over').attr("style", "display:inline");        
    $('#clear-leaderboard').attr("style", "display:inline");
    $('#leaderboard').attr("style", "display:block");
    $('#scoreTitle').attr("style", "display:block")
};

// If user clicks on "View High Scores" Leaderboard at the start of the page
$('#score').on('click', function(e) {

    // Use preventdefault to not have submit button autmatically send to server
    e.preventDefault();
  
    // Generate function to display leaderboard
    generateLeaderboard();

    // Disable button after one click so that user does not accidentally click it
    $('#score').attr("disabled", true);

    return true;
});

// Clear Leaderboard
$('#clear-leaderboard').on('click', function() {
    window.localStorage.clear();
    $('#scoreList').children().remove()
});
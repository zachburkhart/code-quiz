var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highScore = 50;
var finalAnswerCheck = 0;
var checkTimes = 1;
var viewHighScoresBtnEl = document.getElementById('view-high-scores');
var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');
var submitScoreEl = document.getElementById('submitScore');
var questionsEl = document.getElementById('questions');
var mainDivEl = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong');
var questionDisplayEl = document.createElement("questionDisplay");
var finalScoreDisplayEl = document.createElement("finalScoreDisplay");
var enterInitialsEl = document.createElement("enterInitials");
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
var button1234 = document.createElement("button");
var timeLeft = 60;


answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

var questionsObject = {
    correct: { 
        0 : "What are conditional statements used for?",
        1 : "What value do arrays start with?",
        2 : "In the command line, what command initiates a new local repository?",
        3 : "In the command line, what branch is used to make specific changes to a particular part of an application?",
        4 : "What does MVP stand for?"
    }
};

var answersObject = {
    answers: { 
        0 : {
            0: "Making decisions",
            1: "Processing arrays",
            2: "Debugging code",
            3: "Initiating expressions"},
        1 : {
            0: "0",
            1: "1",
            2: "All of the above",
            3: "None of the above"},
        2 : {
            0: "git add",
            1: "git init",
            2: "git push", 
            3: "git commit"},      
        3 : {
            0: "main",
            1: "develop",
            2: "feature", 
            3: "None of the above"},      
        4 : {
            0: "Minimum Viable Product",
            1: "Multi-Variate Product",
            2: "Minimum Viable Process",
            3: "Maximum Viable Process"},  
    }
};


htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { // View high scores

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(highScores);

});

submitScoreEl.addEventListener("click", function() { // Submit high scores
    

    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    
    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value 
    value = [quizUserDetails,highScore]

    if (!localStorage.length) {
        localStorage.setItem("test","test");
    }
       
    for (var i=0; i < localStorage.length; i++){        
        var checkUser = "";
        var checkUserValue = [];
        quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;
        checkUser = localStorage.getItem(quizUserDetails);   
        if (checkUser == null) {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null){
            checkUserValue = checkUser.split(",");
           
        
        }  



              
        if ( quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {

        localStorage.setItem(quizUserDetails, value);
        window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialsTextArea.value + ". Entry will not be added.")
        break; 
        } else if (enterInitialsTextArea.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if ( quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1] ) { 
            localStorage.setItem(quizUserDetails, value);
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 
        } else {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
                
    }
    
} );

startQuizBtnEl.addEventListener("click", function() {

    startQuizBtnEl.style.display = 'none';
    questionDisplay.style.display='none';
    finalScoreDisplay.style.display = 'none';
    enterInitials.style.display='none';
    score = 0;
    timeLeft=60;
    htmlTimeLeft.textContent = timeLeft;
    finalAnswerCheck = 0;
    checkTimes = 1;

    var timeInterval = setInterval(function() {

        if (score === 1){
            highScore -= 20;
        }

        score = 0;

        
        if(timeLeft >= 1 && finalAnswerCheck !== 1) {
            questionDisplay.textContent = questionsObject.correct[questionNumber];
            
            questionDisplay.style.display= "";
            answer1BtnEl.style.display = "";
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";

            answer1BtnEl.textContent = answersObject.answers[answerNumber][0];
            answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
            answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
            answer4BtnEl.textContent = answersObject.answers[answerNumber][3];
           
            gridContainer.appendChild(questionDisplayEl);
            gridContainer.appendChild(answer1BtnEl);
            gridContainer.appendChild(finalScoreDisplayEl);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;
            console.log("time left:" + timeLeft)
            

            answer1BtnEl.addEventListener("click", function() {
            });

            answer2BtnEl.addEventListener("click", function() {      
            });

            answer3BtnEl.addEventListener("click", function() {
            });

            answer4BtnEl.addEventListener("click", function() {
            });

        }
        else if(timeLeft === 0){

          console.log("I'm here" + timeInterval);
          questionNumber = 0; // Reset all questions
          answerNumber = 0; // Reset all possible answers.
          answer1BtnEl.style.display = 'none';
          answer2BtnEl.style.display = 'none';
          answer3BtnEl.style.display = 'none';
          answer4BtnEl.style.display = 'none';
          answerCorrectWrong.style.display='none'; // When time is over correct or wrong will go away.
          //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
          questionDisplay.textContent = "Game Over!. Try again by clicking on \"Begin\"";
          startQuizBtnEl.style.display = "";
          clearInterval(timeInterval);
          
          //gridContainer.appendChild(questionDisplayEl);
    
          //displayMessage();
        }
      }, 1000)

});

function lastQuestionWrong () {
        if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

  }
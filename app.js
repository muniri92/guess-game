// INTRODUCTION
var userName = prompt('What\'s your name?');
alert('What\'s up, ' + userName + '! Press \'OK\' when you\'re ready for this game to start!');
var count = 0;

// ID Tags
var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');

// Array of Questions
var quesData = [
  ['What\'s up, ' + userName + '! Let\'s jump right in! Was I born in the United States?','N', 'NO', 'Y', 'YES', 'You are correct ' + userName + '! I was born in Kenya, but moved to the US when I was 2 yrs old.', 'Ohhh, wrong answer ' + userName + ', I wasn\'t born in the US. Maybe you\'ll get the next question right.', res1],
  ['Do I currently have a motorcycle license?', 'N', 'NO', 'Y', 'YES', 'Right on, ' + userName + '! I used to have one, but I didn\'t renew it on my latest license.', 'Wrong answer ' + userName + '! I used too, but I don\'t have one anymore unfortunately.', res2],
  ['Is Code Fellows HQ located in Seattle?', 'Y', 'YES', 'N', 'NO', 'Good job, ' + userName + '! I may have lied about it being easy, but you\'re a genius!', 'Dammit ' + userName + '! Seattle IS the Code Fellows HQ. Don\'t fail me on this next one!', res3]
];

// Array Function
function quesAndAns() {
  console.log(quesData);
  for(var i = 0; i < (quesData.length); i++) {
    var answers = prompt(quesData[i][0]);
    answers = answers.toUpperCase();
    var correctAnswer = false;
    while (correctAnswer === false){
      if (answers === (quesData[i][1]) || answers === (quesData[i][2])) {
        console.log(userName + ' got the answer right!');
        quesData[i][7].textContent = quesData[i][5];
        quesData[i][7].className = 'right';
        count++;
        break;
      } else if(answers === quesData[i][3] || answers === quesData[i][4]) {
        console.log(userName + ' got it wrong.');
        quesData[i][7].textContent = quesData[i][6];
        quesData[i][7].className = 'wrong';
        break;
      } else {
        console.log(userName + ' has guessed an answer that is not possible.');
        answers = prompt('I\'m sorry, ' + userName + ', you have guessed outside of your boundaries. Try again.').toUpperCase();
      }
    }
  }
}

// 4th Question
var guess = 0;
function question4() {
  var res4 = document.getElementById('resultFour');
  var answer4 = prompt('I hope the last 3 questions weren\'t too hard, ' + userName + '. This last one is simple, I promise. How old am I?');
  answer4 = parseInt(answer4);
  console.log(answer4);
  while (answer4 !== 23) {
    if (answer4 > 23) {
      console.log(userName + ' guessed too high.');
      answer4 = parseInt(prompt('You guessed too high, ' + userName + '. Guess again!'));
      guess += 1;
    } else if(answer4 < 23) {
      console.log(userName + ' guessed too low.');
      answer4 = parseInt(prompt('You guessed too low, ' + userName + '. Guess again!'));
      guess += 1;
    } else {
      console.log(userName + ' didn\'t even guess a number.');
      answer4 = parseInt(prompt('That\'s not even a number ' + userName + '. Guess again!'));
    }
  }
  res4.textContent = 'Right on the money ' + userName + '! Good shit!';
}

// 5th Question
var colorGuess = 0;
function question5() {
  var favColorPrint = document.getElementById('myFavColor');
  var isCorrect = false;
  var favColors = ['red', 'black', 'purple', 'gold'];
  var answer5 = prompt('What is one of my favorite colors?');
  answer5 = answer5.toLowerCase();
  while (isCorrect === false) {
    for (i = 0; i < favColors.length ; i++) {
      if (answer5 === favColors[i]) {
        favColorPrint.textContent = 'Damn right, ' + userName + '! I love that color!';
        console.log('correct');
        isCorrect = true;
      }
    }
    if (isCorrect === false) {
      answer5 = prompt('Nope, guess again ' + userName + '!').toLowerCase();
      console.log(userName + ' fucked up.');
      colorGuess += 1;
    }
  }
}
console.log(userName + ' guessed ' + colorGuess + ' times before guessing one of my favorite colors correctly.')

// Notify the User of how they did & how many guesses it took on the 4th Question
var correct = document.getElementById('numCorrect');
function printAnswers() {
   console.log('It took ' + userName + ' ' + guess + ' guesses to guess my age.');
   console.log(userName + ' got ' + count + ' answers correct.');
   if (count === 0) {
     correct.textContent = 'You guessed all of my answer incorrectly...get your shit together, ' + userName + '! It only took ' + guess + ' guesses to get my age right, and ' + colorGuess + ' to guess one of my favorite colors.';
   } else if (count === 1) {
     correct.textContent = 'You guessed ' + count + ' answer correctly. That\'s not that great, ' + userName + '! It only took ' + guess + ' guesses to get my age right, and ' + colorGuess + ' to guess one of my favorite colors.';
   } else if (count === 2) {
     correct.textContent = 'You guessed ' + count + ' answers correctly. Not bad..not bad. It only took ' + guess + ' guesses to get my age right, and ' + colorGuess + ' to guess one of my favorite colors.';
   } else if(count === 3) {
     correct.textContent = 'You guessed ALL the answers correctly! I gotta admit though, that\'s kinda creepy, ' + userName + '. It only took ' + guess + ' guesses to get my age right, and ' + colorGuess + ' guesses to guess one of my favorite colors.';
   }
}

// Call Functions
quesAndAns();
question4();
question5();
printAnswers();

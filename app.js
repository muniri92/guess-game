// Munir's Guessing Game

var userName = prompt('What\'s your name?');
//alert('What\'s up, ' + userName+ '! Press \'OK\' when you\'re ready for this game to start!');
var count = 0;

// Call Function
question1();
question2();
question3();
question4();
question5();
printAnswers();

// ID tag declaration for Results 1
var res1 = document.getElementById('resultOne');
// 1st Question
function question1() {
  var correctAnswer = false;
  var answer1 = prompt('What\'s up, ' + userName + '! Let\'s jump right in! Was I born in the United States?').toUpperCase();
  while (correctAnswer === false){
    if (answer1 === 'N' ||  answer1 === 'NO') {
      console.log(userName + ' got the answer right!');
      res1.textContent = 'You are correct ' + userName + '! I was born in Kenya, but moved to the US when I was 2 yrs old.';
      count++;
      correctAnswer = true;
    } else if(answer1 === 'Y' || answer1 === 'YES') {
      console.log(userName + ' got it wrong.');
      res1.textContent = 'Ohhh, wrong answer ' + userName + ', I wasn\'t born in the US. Maybe you\'ll get the next question right.';
      correctAnswer = true;
    } else {
      console.log(userName + ' has guessed an answer that is not possible.');
      answer1 = prompt('I\'m sorry, ' + userName + ', you have guessed outside of your boundaries. Try again.').toUpperCase();
    }
  }
}

// ID tag declaration for Results 2
var res2 = document.getElementById('resultTwo');
// 2nd Question
function question2() {
  var incorrectAnswer = true;
  var answer2 = prompt('Do I currently have a motorcycle license?').toUpperCase();
  while (incorrectAnswer === true){
    if (answer2 === 'N' || answer2=== 'NO') {
      console.log(userName + ' got it right!');
      res2.textContent = 'Right on, ' + userName + '! I used to have one, but I didn\'t renew it on my latest license.';
      count++;
      incorrectAnswer = false;
    } else if (answer2 === 'Y' || answer2=== 'YES') {
      console.log(userName + ' got the answer wrong.');
      res2.textContent = 'Wrong answer ' + userName + '! I used too, but I don\'t have one anymore unfortunately.';
      incorrectAnswer = false;
    } else {
      console.log(userName + ' has guessed an answer that is not possible.');
      answer2 = prompt('I\'m sorry, ' + userName + ', you have guessed outside of your boundaries. Try again.').toUpperCase();
    }
  }
}

// ID tag declaration for Results 3
var res3 = document.getElementById('resultThree');
// 3rd Question
function question3() {
  var incorrectAnswer = true;
  var answer3 = prompt('This is an easy one! Is Code Fellows HQ located in Seattle?').toUpperCase();
  while (incorrectAnswer === true){
    if (answer3 === 'Y' || answer3=== 'YES') {
      console.log('It\'s located in Seattle, so ' + userName + ' got the right answer!');
      res3.textContent = 'Good job, ' + userName + '! I may have lied about it being easy, but you\'re a genius!';
      count++;
      incorrectAnswer = false;
    } else if (answer3 === 'N' || answer3=== 'NO') {
      console.log(userName + ' got the wrong answer!');
      res3.textContent = 'Dammit ' + userName + '! Seattle IS the Code Fellows HQ. Don\'t fail me on this next one!';
      incorrectAnswer = false;
    } else {
      console.log(userName + ' has guessed an answer that is not possible.');
      answer3 = prompt('I\'m sorry, ' + userName + ', you have guessed outside of your boundaries. Try again.').toUpperCase();
    }
  }
}

// ID tag declaration for Results 4
var res4 = document.getElementById('resultFour');
// 4th Question
var guess = 0;
function question4() {
  var answer4 = prompt('I hope the last 3 questions weren\'t too hard, ' + userName + '. This one\'s simple, I promise. How old am I?');
  answer4 = parseInt(answer4);
  console.log(answer4);
  while (answer4 !== 23) {
    if (answer4 > 23) {
      console.log(userName + ' guessed too high.');
      answer4 = parseInt(prompt('You guessed too high, ' + userName + '. Guess again!'));
      guess += 1;
    } else {
      console.log(userName + ' guessed too low.');
      answer4 = parseInt(prompt('You guessed too low, ' + userName + '. Guess again!'));
      guess += 1;
    }
  }
res4.textContent = 'Right on the money ' + userName + '! Good shit!';
}

// ID tag declaration for Results 5
var favColorPrint = document.getElementById('myFavColor');
// 5th Question
var colorGuess = 0;
function question5() {
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
      answer5 = prompt("Nope, guess again " + userName + '!').toLowerCase();
      console.log(userName + ' fucked up.');
      colorGuess += 1;
    }
  }
  console.log(userName + ' guessed ' + colorGuess + ' times before guessing one of my favorite colors correctly.')
}

// Amount user answered correctly
var correct = document.getElementById('numCorrect');
// Notify the User of how they did & how many guesses it took on the 4th Question
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
    correct.textContent = 'You guessed ALL the answers correctly! I gotta admit though, that\'s kinda creepy, ' + userName + '. It only took ' + guess + ' guesses to get my age right, and ' + colorGuess + ' to guess one of my favorite colors.';
  }
}

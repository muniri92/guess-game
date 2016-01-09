var userName = prompt("What's your name?");
alert("What's up, " + userName+ "! Press 'OK' when you're ready for this game to start!");
var count = 0;

//                       PLAYING WITH ARRAYS

// Questions Function
function questionFunc() {
  var res1 = document.getElementById('resultOne');
  var res2 = document.getElementById('resultTwo');
  var res3 = document.getElementById('resultThree');
  var correctAnswer = false;
  // Array of questions
  var quesAndAns = [
  ['What\'s up, ' + userName + '! Let\'s jump right in! Was I born in the United States?', 'You are correct ' + userName + '! I was born in Kenya, but moved to the US when I was 2 yrs old.',
  'N',
  'NO',
  'Y',
  'YES',
  'You are correct ' + userName + '! I was born in Kenya, but moved to the US when I was 2 yrs old.',
  'Ohhh, wrong answer ' + userName + ', I wasn\'t born in the US. Maybe you\'ll get the next question right.',
  res1],
  ['Do I currently have a motorcycle license?', 'Right on, ' + userName + '! I used to have one, but I didn\'t renew it on my latest license.',
  'N',
  'NO',
  'Y',
  'YES',
  'Right on, ' + userName + '! I used to have one, but I didn\'t renew it on my latest license.',
  'Wrong answer ' + userName + '! I used too, but I don\'t have one anymore unfortunately.',
  res2],
  ['Is Code Fellows HQ located in Seattle?', 'Good job, ' + userName + '! I may have lied about it being easy, but you\'re a genius!',
  'N',
  'NO',
  'Y',
  'YES',
  'Good job, ' + userName + '! I may have lied about it being easy, but you\'re a genius!',
  'Dammit ' + userName + '! Seattle IS the Code Fellows HQ. Don\'t fail me on this next one!',
  res3]

  ];

  for(i = 0; i < (quesAndAns.length); i++) {
    var answers = prompt(quesAndAns[i][0]);
    answers = answers.toUpperCase();
    while (correctAnswer === false){
      if ((answers === quesAndAns[i][1] || answers === quesAndAns[i][2])) {
        console.log(userName + ' got the answer right!');
        quesAndAns[i][7].textContent = quesAndAns[i][5];
        quesAndAns[i][7].yup = 'right';
        count++;
        break;
      } else if((answers === quesAndAns[i][3] || answers === quesAndAns[i][4]) && (quesAndAns[0][0] || quesAndAns[2][0])) {
        console.log(userName + ' got it wrong.');
        quesAndAns[i][7].textContent = quesAndAns[i][6];
        quesAndAns[i][7].nah = 'right';
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
  var A4 = prompt("I hope the last 3 questions weren't too hard, " + userName + ". This last one is simple, I promise. How old am I?");
  A4 = parseInt(A4);
  console.log(A4);
  while (A4 !== 23) {
    if (A4 > 23) {
      console.log(userName + " guessed too high.");
      A4 = parseInt(prompt("You guessed too high, " + userName + ". Guess again!"));
      guess += 1;
    } else {
      console.log(userName + " guessed too low.");
      A4 = parseInt(prompt("You guessed too low, " + userName + ". Guess again!"));
      guess += 1;
    }
  }
res4.textContent = 'Right on the money ' + userName + '! Good shit!';
}

//loop through the array questions
for(i = 0; i < quesData.length; i++) {
  quesAndAns();
}
question4();


// Notify the User of how they did & how many guesses it took on the 4th Question
console.log("It took " + userName + " " + guess + " guesses to guess my age.");
console.log(userName + " got " + count + " answers correct.");
if (count === 0) {
res5.textContent = 'You guessed all of my answer incorrectly...get your shit together, ' + userName + '! And it only took ' + guess + ' guesses to get my age right.';
} else if (count === 1) {
res5.textContent = 'You guessed ' + count + ' answer correctly. That\'s not that great, ' + userName + '! And it only took ' + guess + ' guesses to get my age right."';
} else if (count === 2) {
res5.textContent = 'You guessed ' + count + ' answers correctly. Not bad..not bad. And it only took ' + guess + ' guesses to get my age right.';
} else if(count === 3) {
res5.textContent = 'You guessed ALL the answers correctly! I gotta admit though, that\'s kinda creepy, ' + userName + '. And it only took ' + guess + ' guesses to get my age right.';
}

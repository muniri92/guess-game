var userName = prompt("What's your name?");
alert("What's up, " + userName+ "! Press 'OK' when you're ready for this game to start!");
var count = 0;

var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
var res5 = document.getElementById('result5');

 var quesData = [
 ['What\'s up, ' + userName + '! Let\'s jump right in! Was I born in the United States?',
 'N',
 'NO',
 'Y',
 'YES',
 'You are correct ' + userName + '! I was born in Kenya, but moved to the US when I was 2 yrs old.',
 'Ohhh, wrong answer ' + userName + ', I wasn\'t born in the US. Maybe you\'ll get the next question right.',
 res1],
 ['Do I currently have a motorcycle license?',
 'N',
 'NO',
 'Y',
 'YES',
 'Right on, ' + userName + '! I used to have one, but I didn\'t renew it on my latest license.',
 'Wrong answer ' + userName + '! I used too, but I don\'t have one anymore unfortunately.',
 res2],
 ['Is Code Fellows HQ located in Seattle?',
 'N',
 'NO',
 'Y',
 'YES',
 'Good job, ' + userName + '! I may have lied about it being easy, but you\'re a genius!',
 'Dammit ' + userName + '! Seattle IS the Code Fellows HQ. Don\'t fail me on this next one!',
 res3]

 ];

// declare variables for page data



function quesAndAns() {
  var incorrectAnswer = true;
  while (incorrectAnswer === true){
    var A1 = prompt(quesData[i][0]).toUpperCase();
    if (A1 === quesData[i][1] ||  A1 === quesData[i][2]) {
      console.log(userName + " got the answer right!");
      quesData[i][7].textContent = quesData[i][5];
      count++;
      incorrectAnswer = false;
    } else if(A1 === quesData[i][3] || A1 === quesData[i][4]) {
      console.log(userName + " got it wrong.");
      quesData[i][7].textContent = quesData[i][6];
      incorrectAnswer = false;
    } else {
      console.log(userName + " has guessed an answer that is not possible.");
      quesData[i][7].textContent = 'I\'m sorry, ' + userName + ', you have guessed outside of your boundaries, try again.';
    }
  }
}

for(i = 0; i < quesData.length; i++) {
  quesAndAns();
}

// 1st Question
// function question1() {
//   var incorrectAnswer = true;
//   while (incorrectAnswer === true){
//     var A1 = prompt("Be sure to reply with yes or no, thanks! Was I, Munir Ibrahim, born in the United States?").toUpperCase();
//     if (A1 === "N" ||  A1 === "NO") {
//       console.log(userName + " got the answer right!");
// //      alert("You are correct " + userName + "! I was actually born in Kenya, but have been in the US since I was 2.");
//       res1.textContent = 'You are correct ' + userName + '! I was actually born in Kenya, but have been in the US since I was 2.';
//       count++;
//       incorrectAnswer = false;
//     } else if(A1 === "Y" || A1 === "YES") {
//       console.log(userName + " got it wrong.");
// //      alert("OHHH, wrong answer " + userName + ", I wasn't born in the US. Maybe you'll get the next question right.");
//       res1.textContent = 'OHHH, wrong answer ' + userName + ', I wasn\'t born in the US. Maybe you\'ll get the next question right.';
//       incorrectAnswer = false;
//     } else {
//       console.log(userName + " has guessed an answer that is not possible.");
// //      alert("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
//       res1.textContent = 'I\'m sorry, ' + userName + ', you have guessed outside of your boundaries, try again.';
//     }
//   }
// }
//
//
// // 2nd Question
// function question2() {
//   var incorrectAnswer = true;
//   while (incorrectAnswer === true){
//     var A2 = prompt("Do I currently have a motorcycle license?").toUpperCase();
//     if (A2 === "N" || A2=== "NO") {
//       console.log(userName + " got it right!");
// //      alert("Right on, " + userName + "! I used to have one, but I didn't renew it on my latest license.");
//       res2.textContent = 'Right on, ' + userName + '! I used to have one, but I didn\'t renew it on my latest license.';
//       count++;
//       incorrectAnswer = false;
//     } else if (A2 === "Y" || A2=== "YES") {
//       console.log(userName + " got the answer wrong.");
// //      alert("Wrong " + userName + "! I don't have one anymore unfortunately.");
//       res2.textContent = 'Wrong ' + userName + '! I don\'t have one anymore unfortunately.';
//       incorrectAnswer = false;
//     } else {
//       console.log(userName + " has guessed an answer that is not possible.");
// //      alert("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
//       res2.textContent = 'I\'m sorry, ' + userName + ', you have guessed outside of your boundaries, try again.';
//     }
//   }
// }
//
// // 3rd Question
// function question3() {
//   var incorrectAnswer = true;
//   while (incorrectAnswer === true){
//     var A3 = prompt("This is the 3rd question " + userName + "! Be warned, it's not an easy one! Is Code Fellows HQ located in Seattle?").toUpperCase();
//     if (A3 === "Y" || A3=== "YES") {
//       console.log("It's located in Seattle, so " + userName + " got the right answer!");
// //      alert("Good job, " + userName + "! I might have lied about it being a hard one, but you sir are a genius!");
//       res3.textContent = 'Good job, ' + userName + '! I might have lied about it being a hard one, but you sir are a genius!';
//       count++;
//       incorrectAnswer = false;
//     } else if (A3 === "N" || A3=== "NO") {
//       console.log(userName + " got the wrong answer!");
// //      alert("Dammit " + userName + "! Seattle IS the Code Fellows HQ. Don't fail me on this next one!");
//       res3.textContent = 'Dammit ' + userName + '! Seattle IS the Code Fellows HQ. Don\'t fail me on this next one!';
//       incorrectAnswer = false;
//     } else {
//       console.log(userName + " has guessed an answer that is not possible.");
// //      alert("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
//       res3.textContent = 'I\'m sorry, ' + userName + ', you have guessed outside of your boundaries, try again.';
//     }
//   }
// }

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
//  alert("Right on the money " + userName + "! Good shit!");
res4.textContent = 'Right on the money ' + userName + '! Good shit!';
}

// question1();
// question2();
// question3();
question4();


// Notify the User of how they did & how many guesses it took on the 4th Question
console.log("It took " + userName + " " + guess + " guesses to guess my age.");
console.log(userName + " got " + count + " answers correct.");
if (count === 0) {
//  alert("You guessed all of my answer incorrectly...get your shit together, " + userName + "! And it only took " + guess + " guesses to get my age right.");
res5.textContent = 'You guessed all of my answer incorrectly...get your shit together, ' + userName + '! And it only took ' + guess + ' guesses to get my age right.';
} else if (count === 1) {
//  alert("You guessed " + count + " answer correctly. That's not that great, " + userName + "! And it only took " + guess + " guesses to get my age right.");
res5.textContent = 'You guessed ' + count + ' answer correctly. That\'s not that great, ' + userName + '! And it only took ' + guess + ' guesses to get my age right."';
} else if (count === 2) {
//  alert("You guessed " + count + " answers correctly. Not bad..not bad. And it only took " + guess + " guesses to get my age right.");
res5.textContent = 'You guessed ' + count + ' answers correctly. Not bad..not bad. And it only took ' + guess + ' guesses to get my age right.';
} else if(count === 3) {
//  alert("You guessed ALL the answers correctly! I gotta admit though, that's kinda creepy, " + userName + ". And it only took " + guess + " guesses to get my age right.");
res5.textContent = 'You guessed ALL the answers correctly! I gotta admit though, that\'s kinda creepy, ' + userName + '. And it only took ' + guess + ' guesses to get my age right.';
}

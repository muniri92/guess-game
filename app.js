var userName = prompt("What's your name?");
alert("Well hello, " + userName+ "! Press 'OK' when you're ready for the questions!");

var count = 0;

// 1st Question
/*
var A1 = prompt("Please reply by typing Y for yes and N for no, thank you! Was I, Munir Ibrahim, born in the United States?");
if (A1.toUpperCase() === "N" ||  A1.toUpperCase(); === "NO") {
  console.log(userName + " got the answer right!");
  alert("You are correct " + userName + "! I was actually born in Kenya, but have been in the US since I was 2.");
  count += 1;
} else {
  console.log(userName + " got it wrong.");
  alert("OHHH, wrong answer " + userName + ". I wasn't born in the US. Maybe you'll get the next question right.");
}
count = parseInt(count);
*/

// TEST Q1


var incorrectAnswer = false;

while (incorrectAnswer === false){

  var A1 = prompt("Please reply with yes or no, thank you! Was I, Munir Ibrahim, born in the United States?").toUpperCase();

  if (A1 === "N" ||  A1 === "NO") {
    console.log(userName + " got the answer right!");
    alert("You are correct " + userName + "! I was actually born in Kenya, but have been in the US since I was 2.");
    count += 1;
    incorrectAnswer = true;
  } else if(A1 === "Y" || A1 === "YES") {
    console.log(userName + " got it wrong.");
    alert("OHHH, wrong answer " + userName + ". I wasn't born in the US. Maybe you'll get the next question right.");
    incorrectAnswer = true;
  } else {console.log(userName + " has guessed an answer that is not possible.");
    A1 = prompt("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
  }
}

// 2nd Question
var A2 = prompt("Do I currently have a motorcycle licence? Again, Y for yes and N for no.");
if (A2.toUpperCase() === "N" || A2.toUpperCase() === "NO") {
  console.log(userName + " got it right!");
  alert("Right answer, " + userName + "! I used to have one but I didn't renew it on my latest licence.");
  count += 1;
} else {
  console.log(userName + " got the answer wrong.");
  alert("Wrong " + userName + "! Redeem yourself with the next question!");
}
count = parseInt(count);

// 3rd Question
var A3 = prompt("This is the 3rd question " + userName + "! Be warned, it's not an easy one! Is Code Fellows HQ located in Seattle?");
if (A3.toUpperCase() === "Y" || A3.toUpperCase() === "YES") {
  console.log("It's located in Seattle, so " + userName + " got the right answer!");
  alert("Good job, " + userName + "! I might have lied about it being a hard one, but you sir are a wizard!");
} else {
  console.log(userName + " got the wrong answer!");
  alert("Dammit " + userName + "! Don't fail me on this next one!");
}

// 4th Question
var A4 = prompt("I hope the last 3 questions weren't too hard, " + userName + ". This last one is simple, I promise. How old am I?");
A4 = parseInt(A4);
console.log(A4);
while (A4 !== 23) {
  if (A4 > 23) {
    console.log(userName + " guessed too high.");
    A4 = parseInt(prompt("You guessed too high, " + userName + ". Guess again!"));
  } else {
    console.log(userName + " guessed too low.");
    A4 = parseInt(prompt("You guessed too low, " + userName + ". Guess again!"));
  }
}
alert("Right on the money " + userName + "! AMAZING!");
count += 1;
count = parseInt(count);
alert("You guessed " + count + " anwsers correctly.");

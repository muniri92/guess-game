var userName = prompt("What's your name?");
alert("What's up, " + userName+ "! Press 'OK' when you're ready for this game to start!");
var count = 0;

// 1st Question
function question1() {
  var incorrectAnswer = true;
  while (incorrectAnswer === true){
    var A1 = prompt("Be sure to reply with yes or no, thanks! Was I, Munir Ibrahim, born in the United States?").toUpperCase();
    if (A1 === "N" ||  A1 === "NO") {
      console.log(userName + " got the answer right!");
      alert("You are correct " + userName + "! I was actually born in Kenya, but have been in the US since I was 2.");
      count++;
      incorrectAnswer = false;
    } else if(A1 === "Y" || A1 === "YES") {
      console.log(userName + " got it wrong.");
      alert("OHHH, wrong answer " + userName + ", I wasn't born in the US. Maybe you'll get the next question right.");
      incorrectAnswer = false;
    } else {
      console.log(userName + " has guessed an answer that is not possible.");
      alert("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
    }
  }
}


// 2nd Question
function question2() {
  var incorrectAnswer = true;
  while (incorrectAnswer === true){
    var A2 = prompt("Do I currently have a motorcycle license?").toUpperCase();
    if (A2 === "N" || A2=== "NO") {
      console.log(userName + " got it right!");
      alert("Right on, " + userName + "! I used to have one, but I didn't renew it on my latest license.");
      count++;
      incorrectAnswer = false;
    } else if (A2 === "Y" || A2=== "YES") {
      console.log(userName + " got the answer wrong.");
      alert("Wrong " + userName + "! I don't have one anymore unfortunately.");
      incorrectAnswer = false;
    } else {
      console.log(userName + " has guessed an answer that is not possible.");
      alert("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
    }
  }
}

// 3rd Question
function question3() {
  var incorrectAnswer = true;
  while (incorrectAnswer === true){
    var A3 = prompt("This is the 3rd question " + userName + "! Be warned, it's not an easy one! Is Code Fellows HQ located in Seattle?").toUpperCase();
    if (A3 === "Y" || A3=== "YES") {
      console.log("It's located in Seattle, so " + userName + " got the right answer!");
      alert("Good job, " + userName + "! I might have lied about it being a hard one, but you sir are a genius!");
      count++;
      incorrectAnswer = false;
    } else if (A3 === "N" || A3=== "NO") {
      console.log(userName + " got the wrong answer!");
      alert("Dammit " + userName + "! Seattle IS the Code Fellows HQ. Don't fail me on this next one!");
      incorrectAnswer = false;
    } else {
      console.log(userName + " has guessed an answer that is not possible.");
      alert("I'm sorry, " + userName + ", you have guessed outside of your boundaries, try again.");
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
  alert("Right on the money " + userName + "! Good shit!");
}

question1();
question2();
question3();
question4();


// Notify the User of how they did & how many guesses it took on the 4th Question
console.log("It took " + userName + " " + guess + " guesses to guess my age.");
console.log(userName + " got " + count + " answers correct.");
if (count === 0) {
  alert("You guessed all of my answer incorrectly...get your shit together, " + userName + "! And it only took " + guess + " guesses to get my age right.");
} else if (count === 1) {
  alert("You guessed " + count + " answer correctly. That's not that great, " + userName + "! And it only took " + guess + " guesses to get my age right.");
} else if (count === 2) {
  alert("You guessed " + count + " answers correctly. Not bad..not bad. And it only took " + guess + " guesses to get my age right.");
} else if(count === 3) {
  alert("You guessed ALL the answers correctly! I gotta admit though, that's kinda creepy, " + userName + ". And it only took " + guess + " guesses to get my age right.");
}

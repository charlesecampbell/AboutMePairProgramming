'use strict';
let userPoints = 0;

console.log('JS is running');

let user = prompt('What is your name?');
console.log('hello ' + user);
if (user === null) {
  alert('Please provide your name');
  user = prompt('What is your name?');
}
else (alert('Hello ' + user + ', my name is Timothy'));

function oneQ(q,a) {
  let response = prompt(q);
    if (response.toLowerCase() === a.toLowerCase()) {
      userPoints++
      return 'Correct Answer!';
    } else {
      return 'Wrong Answer!';
    }
  }

let q1 = prompt('Did you know that Marvel is better than DC? Yes or No');
if (typeof(q1) === 'string') {
  q1 = q1.toLowerCase();
}
console.log(q1);
if (q1 === 'no') {
  alert('Guess who is wrong... Its you silly. Guess again.');
  q1 = prompt('Did you know that Marvel is better than DC? Yes or No');
}
else if (q1 === 'yes') {
  alert('That is absolutely correct and nobody would say otherwise!');
}
else {
  alert('Answers only accepted in Yes/No format you peasant...');
  q1 = prompt('Did you know that Marvel is better than DC? Yes or No');
}

  //Question 2
  let ques = ['Do you like Video Games?'];
  let answ = ['yes'];
  for(let i = 0; i < ques.length; i++) {
    alert(oneQ(ques[i], answ[i]));
  }

let q3 = prompt('Have you ever been socially awkward? Yes or No');
if (typeof(q3) === 'string') {
  q3 = q3.toLowerCase();
}
console.log(q3);
if (q3 === 'no') {
  alert('Teach me your ways sensei!');
}
else if (q3 === 'yes') {
  alert('HA, NERD! But yeah me too....');
}
else {
  alert('Answers only accepted in Yes/No format you peasant...');
  q3 = prompt('Have you ever been socially awkward? Yes or No');
}

let q4 = prompt('Are you tired of these pop up questions yet? Yes or No');
if (typeof(q4) === 'string') {
  q4 = q4.toLowerCase();
}
console.log(q4);
if (q4 === 'no') {
  alert('Cool, because theres one more.');
}
else if (q4 === 'yes') {
  alert('Well too bad, theres one more.');
}
else {
  alert('Answers only accepted in Yes/No format you peasant...');
  q4 = prompt('Are you tired of these pop up questions yet? Yes or No');
}

let q5 = prompt('Would you rather be doing literally anything else right now? Yes or No');
if (typeof(q5) === 'string') {
  q5 = q5.toLowerCase();
}
console.log(q5);
if (q5 === 'no') {
  alert(user + ', I appreciate your enthusiasm for being relentlessly questioned');
}
else if (q5 === 'yes') {
  alert(user + ', thank you for your honesty, I release you!');
}
else {
  alert('Answers only accepted in Yes/No format you peasant...');
  q5 = prompt('Would you rather be doing literally anything else right now? Yes or No');
}


alert('Now, two more questions with the possibility to earn points. Dont worry its Whos Line Is It Anyway rules, points dont matter!');

let q6 = prompt('Whats my favorite single digit number?');
if (q6 > 7) {
  alert('Too high, try again.');
  q6 = prompt('Whats my favorite single digit number?');
}
else if (q6 < 7) {
  alert('Too low, try again.');
  q6 = prompt('Whats my favorite single digit number?');
}
else if (q6 === 7) {
  alert('Points for you!');
  userpoints + 4;
}
else {
  alert('Please guess a single digit number.');
  q6 = prompt('Whats my favorite single digit number?');
}

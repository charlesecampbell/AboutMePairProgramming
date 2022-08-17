'use strict';

console.log('JS is running');

let user = prompt('What is your name?');
console.log('hello ' + user);
if (user === null) {
  alert('Please provide your name');
  user = prompt('What is your name?');
}
else (alert('Hello ' + user + ', my name is Timothy'));

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

let q2 = prompt('Do you enjoy video games? Yes or No');
if (typeof(q2) === 'string') {
  q2 = q2.toLowerCase();
}
console.log(q2);
if (q2 === 'no') {
  alert('Well you are probably better off');
}
else if (q2 === 'yes') {
  alert('Hey! Me too!');
}
else {
  alert('Answers only accepted in Yes/No format you peasant...');
  q2 = prompt('Do you enjoy video games? Yes or No');
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
















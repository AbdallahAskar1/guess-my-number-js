'use strict';

let number = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent = number;

let score = 20;

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no number 
    if (!guess){
        document.querySelector('.message').textContent = 'No Number🚫';
    }
    //when player win
    else if (guess === number){
     document.querySelector('.number').textContent = number;
     document.querySelector('.message').textContent = "Correct Number🎉";
     document.querySelector('body').style.backgroundColor ="#60b347";
     document.querySelector('.number').style.width = '30rem';
     }
     // when guess is too high
     else if (guess > number){
         if (score > 0){
        document.querySelector('.message').textContent = "Too high";
        score--;
        document.querySelector('.score').textContent = score;
         }
         else {
             document.querySelector('.message').textContent = "You Lost!";

         }

     }
     // when guess is too low
     else if (guess< number) {
      if (score > 0){
        document.querySelector('.message').textContent = "Too Low";
        score--;
        document.querySelector('.score').textContent = score;
         }
         else {
             document.querySelector('.message').textContent = "You Lost!";
             
         }
}})

document.querySelector('.again').addEventListener('click', function () {
    score=20;
    document.querySelector('.score').value = score;

    number = Math.trunc(Math.random()*20 +1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor ="#222";
    document.querySelector('.number').style.width = '15rem';


})

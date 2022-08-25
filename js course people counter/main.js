
let getIncrement = document.querySelector('#increment-btn');
let getSave = document.querySelector('#save-btn');
let getText = document.querySelector('#count-el');
let pastMsg = document.querySelector('#past-msg');

let output = 0;
getIncrement.addEventListener('click', () => {
output += 1;
getText.innerHTML = output;
});

getSave.addEventListener('click', () => {
    let countNum = " " + output + " - ";
    let backToZero = 0;
pastMsg.innerHTML += countNum;
getText.innerHTML = backToZero;
output = 0;
});



// emulatekey.js
// Handles scrolling and arrow buttons
// Author: Atenati Weber-Morrison
// Date: Demeber 10, 2019

function btn1func() {
    document.getElementById('Home').scrollIntoView();
}

function btn2func() {
    document.getElementById('Skills').scrollIntoView();
}

function btn3func() {
    document.getElementById('Work\ Samples').scrollIntoView();
}

function btn4func() {
    document.getElementById('Goals').scrollIntoView();
}

function btn5func() {
    document.getElementById('Resume').scrollIntoView();
}

function btn6func() {
    document.getElementById('Contact').scrollIntoView();
}

document.getElementById('btn1').addEventListener('click', btn1func, false);
document.getElementById('btn2').addEventListener('click', btn2func, false);
document.getElementById('btn3').addEventListener('click', btn3func, false);
document.getElementById('btn4').addEventListener('click', btn4func, false);
document.getElementById('btn5').addEventListener('click', btn5func, false);
document.getElementById('btn6').addEventListener('click', btn6func, false);

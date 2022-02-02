// emulatekey.js
// Handles scrolling and arrow buttons
// Author: Atenati Weber-Morrison
// Date: Demeber 10, 2019

function btn1func() {
    pos = 1;
    document.getElementById(`Home`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    // nextsetter();
}

function btn2func() {
    pos = 2;
    document.getElementById(`Skills`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    // nextsetter();
}

function btn3func() {
    pos = 3;
    document.getElementById(`Work Samples`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    // nextsetter();
}

function btn4func() {
    pos = 4;
    document.getElementById(`Goals`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    // nextsetter();
}

function btn5func() {
    pos = 5;
    document.getElementById(`Resume`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    // nextsetter();
}

function btn6func() {
    pos = 6;
    document.getElementById(`Contact`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    // nextsetter();
}

function downarrow() {
    if(pos === 6) {
        pos = 0;
    }
    pos++;
    document.getElementById(`row-number-${pos}`).scrollIntoView();
    console.log(`jumped to page: ${pos} with pos now at ${pos}`)
    // nextsetter();
}

document.getElementById('btn1').addEventListener('click', btn1func, false);
document.getElementById('btn2').addEventListener('click', btn2func, false);
document.getElementById('btn3').addEventListener('click', btn3func, false);
document.getElementById('btn4').addEventListener('click', btn4func, false);
document.getElementById('btn5').addEventListener('click', btn5func, false);
document.getElementById('btn6').addEventListener('click', btn6func, false);
document.getElementById('imgbtn').addEventListener('click', downarrow, false);

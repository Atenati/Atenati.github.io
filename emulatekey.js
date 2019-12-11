// emulatekey.js
// Handles scrolling and arrow buttons
// Author: Atenati Weber-Morrison
// Date: Demeber 10, 2019

document.addEventListener('wheel', scroll);
let hovernext = document.getElementById('next');

let pos = 1;
console.log(`Page: ${pos}`);

function nextsetter() {
    if(pos === 1) {
        hovernext.innerHTML = 'Skills';
    }
    if(pos === 2) {
        hovernext.innerHTML = 'Work Samples';
    }
    if(pos === 3) {
        hovernext.innerHTML = 'Goals';
    }
    if(pos === 4) {
        hovernext.innerHTML = 'Resume';
    }
    if(pos === 5) {
        hovernext.innerHTML = 'Contact';
    }
    if(pos === 6) {
        hovernext.innerHTML = 'Home';
    }
}

function scroll(e){
    let scrollPos;

    if (e.wheelChange){
        scrollPos = e.wheelChange;
    }else{
        scrollPos = -1 * e.deltaY;
    }

    if (scrollPos < 0){
        if(pos < 7) {
            if(pos ===  6) {
                pos = 1;
                console.log(pos);
                document.getElementById(`row-number-1`).scrollIntoView();
            }else {
                pos++;
                console.log(`Page: ${pos}`);
                document.getElementById(`row-number-${pos}`).scrollIntoView();
            }
        }
    }else if (scrollPos > 0) {
        if (pos > 1) {
            pos--;
            console.log(`Page: ${pos}`);
            document.getElementById(`row-number-${pos}`).scrollIntoView();
        }
    }
    nextsetter();
}

function btn1func() {
    pos = 1;
    document.getElementById(`row-number-1`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    nextsetter();
}

function btn2func() {
    pos = 2;
    document.getElementById(`row-number-2`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    nextsetter();
}

function btn3func() {
    pos = 3;
    document.getElementById(`row-number-3`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    nextsetter();
}

function btn4func() {
    pos = 4;
    document.getElementById(`row-number-4`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    nextsetter();
}

function btn5func() {
    pos = 5;
    document.getElementById(`row-number-5`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    nextsetter();
}

function btn6func() {
    pos = 6;
    document.getElementById(`row-number-6`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
    nextsetter();
}

function downarrow() {
    if(pos === 6) {
        pos = 0;
    }
    pos++;
    document.getElementById(`row-number-${pos}`).scrollIntoView();
    console.log(`jumped to page: ${pos} with pos now at ${pos}`)
    nextsetter();
}

document.getElementById('btn1').addEventListener('click', btn1func, false);
document.getElementById('btn2').addEventListener('click', btn2func, false);
document.getElementById('btn3').addEventListener('click', btn3func, false);
document.getElementById('btn4').addEventListener('click', btn4func, false);
document.getElementById('btn5').addEventListener('click', btn5func, false);
document.getElementById('btn6').addEventListener('click', btn6func, false);
document.getElementById('imgbtn').addEventListener('click', downarrow, false);

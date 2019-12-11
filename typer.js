// typer.js
// Handles typing animation on main page
// Author: Atenati Weber-Morrison
// Date: December 10, 2019

let i = 0;
let tofill = 'IT Programming student living in Halifax Nova Scotia';
doc = document.getElementById('typer');
let spd = 35;

function Writer() {
    if (i < tofill.length) {
        doc.innerHTML += tofill.charAt(i);
        i++;
        setTimeout(Writer, spd)
    }
}

let tick = 0;

function ticker() {
    setInterval(function() {
        if(tick === 0) {
            doc.innerHTML = tofill + ' _';
            tick = 1;
        } else {
            doc.innerHTML = tofill;
            tick = 0;
        }
    }, 500);
}

setTimeout(function() {
    ticker();
}, 1700);
window.onload = Writer;
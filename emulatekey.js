document.addEventListener('wheel', scroll);

let pos = 1;

function scrollDown() {
    window.scrollBy(0, 500);
}

function scroll(e){
    let scrollPos;

    if (e.wheelChange){
        scrollPos = e.wheelChange;
    }else{
        scrollPos = -1 * e.deltaY;
    }

    if (scrollPos < 0){
        if(pos < 6) {
            pos++;
            console.log(`Page: ${pos}`);
            document.getElementById(`row-number-${pos}`).scrollIntoView();
        }
    }else if (scrollPos > 0) {
        if (pos > 1) {
            pos--;
            console.log(`Page: ${pos}`);
            document.getElementById(`row-number-${pos}`).scrollIntoView();
        }
    }
}

function btn1func() {
    pos = 1;
    document.getElementById(`row-number-1`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
}

function btn2func() {
    pos = 2;
    document.getElementById(`row-number-2`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
}

function btn3func() {
    pos = 3;
    document.getElementById(`row-number-3`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
}

function btn4func() {
    pos = 4;
    document.getElementById(`row-number-4`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
}

function btn5func() {
    pos = 5;
    document.getElementById(`row-number-5`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
}

function btn6func() {
    pos = 6;
    document.getElementById(`row-number-6`).scrollIntoView();
    console.log(`jumped to row1 with pos now at ${pos}`)
}

document.getElementById('btn1').addEventListener('click', btn1func, false);
document.getElementById('btn2').addEventListener('click', btn2func, false);
document.getElementById('btn3').addEventListener('click', btn3func, false);
document.getElementById('btn4').addEventListener('click', btn4func, false);
document.getElementById('btn5').addEventListener('click', btn5func, false);
document.getElementById('btn6').addEventListener('click', btn6func, false);

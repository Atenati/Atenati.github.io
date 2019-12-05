// ---Problems and things to do ---
// generate food
// add snake length and growth
// add collisions
// add death
// fix movement to blocky if possible


let setdisplayX = document.querySelector('#xvalue');
let setdisplayY = document.querySelector('#yvalue');
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const WIDTH = 500;
const HEIGHT = 500;

let x = WIDTH/2; /* starting position */
let y = HEIGHT/2-25;
FoodX = 100;
FoodY = 100;

let EATEN = false;
let UP = false;
let RIGHT = false;
let DOWN = false;
let LEFT = false;
ctx.fillStyle = "green";

function GeneratePos(MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN)) + MIN;
}

function GenFood() {
    /* gen food */
}

function update() {
    if(UP === true) {
        y -= 2;
    }
    if(RIGHT === true) {
        x += 2;
    }
    if(DOWN === true) {
        y += 2;
    }
    if(LEFT === true) {
        x -= 2;
    }
    if (x > WIDTH) {
        x -= WIDTH;
    }else if(x < 0) {
        x += WIDTH;
    }else if(y > HEIGHT) {
        y -= HEIGHT
    }else if(y < 0) {
        y += HEIGHT
    }
}


function draw() {
    ctx.clearRect(0, 0, 960, 540);
    ctx.fillRect(x, y, 25, 25);
}

function ClearMov() {
    UP = false;
    RIGHT = false;
    DOWN = false;
    LEFT = false;
}

function MoveRight() {
    ClearMov();
    RIGHT = true;
}

function MoveLeft() {
    ClearMov();
    LEFT = true;
}

function MoveUp() {
    ClearMov();
    UP = true;
}

function MoveDown() {
    ClearMov();
    DOWN = true;
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        MoveLeft();
    }
    else if (event.keyCode == 39) {
        MoveRight();
    }
    else if (event.keyCode == 38) {
        MoveUp();
    }
    else if (event.keyCode == 40) {
        MoveDown();
    }
}, true);


function loop() {
    update();
    draw();
    window.requestAnimationFrame(loop);
}
ctx.beginPath();
window.requestAnimationFrame(loop);
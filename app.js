let sndBoom = new Audio("sounds/boom.wav");
let sndClap = new Audio("sounds/clap.wav");
let sndHihat = new Audio("sounds/hihat.wav");
let sndKick = new Audio("sounds/kick.wav");
let sndOpenhat = new Audio("sounds/openhat.wav");
let sndRide = new Audio("sounds/ride.wav");
let sndSnare = new Audio("sounds/snare.wav");
let sndTink = new Audio("sounds/tink.wav");
let sndTom = new Audio("sounds/tom.wav");
let sndCrash = new Audio("sounds/crash.wav");
let sndHat = new Audio("sounds/hat.wav");
let sndTom2 = new Audio("sounds/tom2.wav");



document.addEventListener('keydown', key);


function key (e) {
    if (e.key == "A" || e.key =="a") {
        playClap();
    } else if (e.key == "S" || e.key =="s") {
        playHihat();
    } else if (e.key == "D" || e.key =="d") {
        playKick();
    } else if (e.key == "F" || e.key =="f") {
        playOpenhat ();
    } else if (e.key == "G" || e.key =="g") {
        playBoom ();
    } else if (e.key == "H" || e.key =="h") {
        playRide ();
    } else if (e.key == "J" || e.key =="j") {
        playSnare ();
    } else if (e.key == "K" || e.key =="k") {
        playTom ();
    } else if (e.key == "L" || e.key =="l") {
        playTink ();
    }
};

function playClap () {
    sndClap.currentTime=0;
    sndClap.play();
};

function playHihat () {
    sndHihat.currentTime=0;
    sndHihat.play();
};

function playKick () {
    sndKick.currentTime=0;
    sndKick.play();
};

function playOpenhat () {
    sndOpenhat.currentTime=0;
    sndOpenhat.play();
};

function playRide () {
    sndRide.currentTime=0;
    sndRide.play();
};

function playSnare () {
    sndSnare.currentTime=0;
    sndSnare.play();
};

function playTink () {
    sndTink.currentTime=0;
    sndTink.play();
};

function playTom () {
    sndTom.currentTime=0;
    sndTom.play();
};

function playTom2 () {
    sndTom2.currentTime=0;
    sndTom2.play();
};

function playBoom () {
    sndBoom.currentTime=0;
    sndBoom.play();
};

function playCrash () {
    sndCrash.currentTime=0;
    sndCrash.play();
};

function playHat () {
    sndHat.currentTime=0;
    sndHat.play();
};
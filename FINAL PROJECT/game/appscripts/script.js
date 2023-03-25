// Game is at center of the page 
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);
var circleRadius = 30;

// Adding background sound
var backgroundSound = new Audio ("resources/Capybara After Party pull up sound effect.mp3")

// Put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;

// Flag to track whether the start button has been clicked
var gameStart = false
var TimerStart = true

// Sliders
var slider1 = document.getElementById("sliderRadius");
var slider2 = document.getElementById("sliderStrokecolor");
var slider4 = document.getElementById("sliderStrokewidth");
var sliders = document.getElementsByClassName("slider")

// Score tracker
var score = 0;
var timer;
var iterations = 0;
var oneMinutes = 59;

// Dot
var dot = paper.circle(100,100,circleRadius);

// Dot initial appearance 
dot.attr({fill: "white", 'fill-opacity': 0});

// Change Background:
document.getElementById("level1").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image('resources/riverside.jpeg',0,0, pWidth, pHeight);
        dot.toFront();
        document.getElementById("bgTab").disabled = false;        
    }
});

document.getElementById("level2").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image('resources/onsen.jpeg',0,0, pWidth, pHeight);
        dot.toFront();
        document.getElementById("bgTab").disabled = false;
    }
});

document.getElementById("level3").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image('resources/swamp.jpg',0,0, pWidth, pHeight);
        dot.toFront();
        document.getElementById("bgTab").disabled = false;
    }
});

//Start function that allow for game to start only after choosing background
function Start(){
    gameStart = true
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].disabled = true; //Adding loop and arrays here which is compulsory for project.
    }
    if (TimerStart == true){
    display = document.querySelector('#time');
    startTimer(oneMinutes, display);
    }
    setGameAreaBounds();
    backgroundSound.play();
    backgroundSound.volume=2;
    backgroundSound.loop=false;
    
}

//Adding Timer Display
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            display.textContent = 0;
        }
    }, 1000);
}

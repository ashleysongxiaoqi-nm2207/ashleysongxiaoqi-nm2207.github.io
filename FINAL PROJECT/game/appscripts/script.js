//Game is at the centre of the page 
var centerDiv = document.getElementById("centerDiv");

//Create Raohael paper that will be used to draw and create graphical objects
var paper = new Raphael(centerDiv);

// function startGame() {
    //myGamePiece = new component(30, 30, "../resources/carrot.png", 10, 120, "image");
   // myGameArea.start();
  //}

// Add my own background music
//var backgroundSound = new Audio ("")

// Put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;

// Flag to track whether the start button has been clicked
var gameStart = false
var TimerStart = true

// Sliders
var slider1 = document.getElementById("sliderRadius");
var slider2 = document.getElementById("sliderStrokecolor");
var slider3 = document.getElementById("sliderStrokeopacity")
var slider4 = document.getElementById("sliderStrokewidth");
var sliders = document.getElementsByClassName("slider")

// Score tracker
var score = 0;
var timer;
var iterations = 0;
var oneMinutes = 59;

// Trying out with a circle 
var dot = paper.circle(100,100,circleRadius);

// Slider events
slider1.addEventListener('input', function(ev){changeRadius()});
slider2.addEventListener('input', function(ev){changeColor()});
slider3.addEventListener('input', function(ev){changeOpacity()});
slider4.addEventListener('input', function(ev){changeWidth()});

// Change Background:
document.getElementById("level1").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image("../resources/onsen.jpeg",0,0, pWidth, pHeight);
        dot.toFront();
        document.getElementById("bgTab").disabled = false;        
    }
});

document.getElementById("level2").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image("../resources/riverside.jpeg",0,0, pWidth, pHeight);
        dot.toFront();
        document.getElementById("bgTab").disabled = false;
    }
});

document.getElementById("level3").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image("../resources/swamp.jpg",0,0, pWidth, pHeight);
        dot.toFront();
        document.getElementById("bgTab").disabled = false;
    }
});
// Countdown number 

//Start function that allow for game to start only after choosing background
function Start(){
    gameStart = true
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].disabled = true; 
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
//carrot- use png image 

//stack overflow- change image with slider js

// move carrot around- rate and animation rate 

//attach counter function to carrot - i++- initialise i to 0


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


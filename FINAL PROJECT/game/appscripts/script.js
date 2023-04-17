// Game is at center of the page 
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that is used for drawing and creating graphical objects- as mentioned in final write-up (Raphael.js)
var paper = new Raphael(centerDiv);
var circleRadius = 30;

// Adding background sound
// This is a variable called "backgroundSound" that uses JS audio function learnt on this website: https://stackoverflow.com/questions/9419263/how-to-play-audio 
var backgroundSound = new Audio ("resources/FINAL%20PROJECT_game_resources_Capybara%20After%20party%20pull%20up%20sound%20effect%20(1).mp3")

// Put the width and heigth of the canvas into variables for convenience
// This is the width of the canvas element 
var pWidth = paper.canvas.clientWidth;
// This is the height of the canvas element 
var pHeight = paper.canvas.clientHeight;

// Flag to track whether the start button has been clicked
// This defines the variable "gameStart" that is initialised with "false", meaning the game has not started
var gameStart = false
// This defines the variable "Timerstart" that is initialised with "true", meaning the timer has started 
var TimerStart = true

// Sliders to manipulate the various characteristics of the circle 
// This returns the element "sliderRadius" 
var slider1 = document.getElementById("sliderRadius");
// This returns the element "sliderStrokecolor"
var slider2 = document.getElementById("sliderStrokecolor");
// This returns the element "sliderStrokewidth"
var slider3 = document.getElementById("sliderStrokewidth");
// This defines a new variable "slider" which manipulates the elements within the class name "slider" 
// It applies to all the sliders
var sliders = document.getElementsByClassName("slider")

// Score tracker
// The "0s" mean they are not holding any values so that in the later part of this script, when the game starts, they store values accordingly.
var score = 0;
var timer;
var iterations = 0;
// This is the time limit of the game 
var oneMinutes = 59;

// Dot
// This defines a new variable "dot" which uses paper.js created in line 5
// The paper variable is a refrence to that in line 5
// The "circle" is a method in paper.js that creates a circle shape
// The x-coordinate of the center is 100 and vice versa for the y-coordinate 
// "circleRadius" is a varianle that can take on values in the later part of this script 
var dot = paper.circle(100,100,circleRadius);

// Slider events
//Adds event listener to "slider1". When "input" is detected on slider element, the function "changeRadius" is executed
slider1.addEventListener('input', function(ev){changeRadius()});
//Adds event listener to "slider2". When "input" is detected on slider element, the function "changeColor" is executed
slider2.addEventListener('input', function(ev){changeColor()});
//Adds event listener to "slider3". When "input" is detected on slider element, the function "changeWidth" is executed
slider3.addEventListener('input', function(ev){changeWidth()});

// Dot initial appearance 
dot.attr({fill: "white", 'fill-opacity': 0});

// Change Background
// These are event listeners for the HTML elements with the id tag "level 1- level 3"
// When clicked, the addEventListener is executed 
//All of these functions will check if the "gameStart" variable is "false"
// Using the paper.image method, a new paper.js image is created - which are the images to be displayed 
// Reference: https://code.tutsplus.com/tutorials/getting-started-with-paperjs-animation-and-images--cms-26530
document.getElementById("level1").addEventListener("click",function(){
    if (gameStart == false){
        var prect = paper.image('resources/riverside.jpeg',0,0, pWidth, pHeight);
// The dot is brought to the front of the canvas using toFront method- gotten from this website: https://stackoverflow.com/questions/18081616/send-raphael-set-tofront-or-toback-without-changing-order-within-the-set
        dot.toFront();
// Basically, when the game has not started yet, the background image will load and display, and "bgTab" is enabled 
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

// Start function that allows for game to start only after choosing background
// When the function is called, these will happen:
// The variable "gameStart" will now be "true"
// For loop
// var i = 0 initialises i to 0 
// Once i is less than the elements in the "sliders" array, the loop continues 
// i ++ refers to the increments of i after each loop 
// Then the "disabled" property will be set to true, meaning they are disabled and cannot be controlled
// Reference: https://stackoverflow.com/questions/48459700/javascript-slides-with-variable-timeouts
function Start(){
    gameStart = true
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].disabled = true;
    }
// If TimerStart is true, meaning the timer is running, then the function chooses the HTML element with the id tag "time" 
// It will be passed on to the function "startTimer" 
    if (TimerStart == true){
// Reference:https://www.scaler.com/topics/javascript-queryselector/
    display = document.querySelector('#time');
// The variable oneMinutes was from line 41, which is the initial time for the timer 
// Set to one minute 
// Displays remaining time when game starts 
    startTimer(oneMinutes, display);
    }
// The function "setGameAreaBounds" will be called 
// The audio file with the id "backgroundSound" from line 10 will begin playing, with volume at 2 and the loop stops
// Reference: http://www.java2s.com/ref/javascript/javascript-dom-html-audio-volume-property-set.html#:~:text=document.,volume%20of%20the%20audio%20player.
    setGameAreaBounds();
    backgroundSound.play();
    backgroundSound.volume=1;
    backgroundSound.loop=false;
    
}

// Sliders Functions
// Defines a function called "changeRadius" called whenever the value of any of the sliders is changed 
// Used to control the appearance of the circle
// Within the function changeRadius, circleRadius is defined as a variable and assigned to "slider1"
// Takes the input event and gets the value of "slider1". It sets the "r" attribute of the circle, "dot" to the value of "circleRadius", changes radius of circle accordingly.
function changeRadius(ev){
	var circleRadius = slider1.value;
// Reference: https://www.w3schools.com/jquery/html_attr.asp
// Able to change the r attribute of the circle 
// circleRadius is then the new value used 
    dot.attr({"r": circleRadius});
}

// Defines a function called "rgbString" 
// Takes three input values "r", "g", and "b" which are red, green and blue color values respectively. 
// Returns string that represents the RGB color with the values given.
// Reference: https://www.w3schools.com/js/js_function_parameters.asp
function rgbString(r,g,b) {
	var r = r;
	var g = g;
	var b = b;
// Reference: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	var input = "rgb("+r.toString()+" , "+g.toString()+" , "+b.toString()+" )";
	return input;
}

// Defines a function called "changeColor" that is called whenever the value of slider2 is changed 
// Use of local variables 
// Assigns the current value of each slider 
// Calls "rgbString" function to generate a color string using the slider values
function changeColor(ev){
	var r2 = slider2.value;
	var g2 = slider2.value;
	var b2 = slider2.value;
// Reference: https://www.w3schools.com/jquery/html_attr.asp
// Stroke color is modified using attr method 
	var strokeColor = rgbString(r2, g2, b2);
	dot.attr({"stroke": strokeColor});
}

// Defines a function called "changeWidth" that is called whenever the value of slider3 is changed 
// Reference: https://www.w3schools.com/jquery/html_attr.asp
// Stroke width is modified using attr method 
function changeWidth(ev){
	var circleWidth = slider3.value;
	dot.attr({"stroke-width": circleWidth});
}

//Adding Event Listener to the clicking 
// Defines a function called "setGameAreaBounds"
function setGameAreaBounds(){
// When the user clicks on the dot that moves around, detectHit function is called 
// It looks for clicks on the dot object and moves the dot around the game area being set 
    dot.node.addEventListener('click', detectHit);
    moveDot();
}

// A successful hit means that a user successfully clicks on the circle that moves around during the game 
function detectHit(){
// When the function "detectHit" is called, the value of the score will increase by 1 
    score += 1
// This updates the HTML content of the element with the id tag "scoreLabel" which shows the scores 
    document.getElementById('scoreLabel').innerHTML = "Score: " + score;
}

// Defines a new function called "moveDot"
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// This genrates random x and y coordinates of the dot 
function moveDot(ev){
    var newX = Math.floor(Math.random()*pWidth);
    var newY = Math.floor(Math.random()*pHeight);

// This updates the position of the dot 
// Reference: https://www.w3schools.com/graphics/svg_circle.asp
// This is done using the attr method 
    dot.attr({"cx": newX, "cy": newY})
// Conditional statement 
// If iterations is less than 60, it sets a timer using the function setTimeout 
// This will call the moveDot function after 1000 milliseconds (1 second)
// This means every one second, the dot will move 
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
// https://www.freecodecamp.org/news/exploring-javascript-for-in-loops-bdfc226d8515/
    if(iterations < 60){
        timer = setTimeout("moveDot()",1000);    
    }
// This holds true if the "if" statement does not
// ie. Number of iterations has reached 60
    else{
// The paper.text method is then used 
        var gameOver = paper.text(pWidth/2, pHeight/2, "Game Over!").attr({"font-size": 100, 
            "font-family": "Arial, Helvetica, sans-serif", "font-weight": "bold"});
// Game cannot be played anymore 
// The "gameStart", "TimerStart" and "moveDot" variables are set to false 
// Removal of event listener so that further increases in score does not occur when the game ends 
        dot.node.removeEventListener('click',detectHit);
        // Timer is cleared, game cannot be played 
        clearTimeout(timer);
        gameOver.toFront()
        gameStart = false;
        TimerStart = false;
        moveDot = false;
    }
    // This line is so that the code will not run through the "else" block in the future 
    // If not the game will continue forever and not stop 
    iterations++;
}

//Adding Timer Display
// Defines a function called startTimer
// Variable timer initialised with the value of duration 
// setInterval method reference: https://www.w3schools.com/jsref/met_win_setinterval.asp
// Reference: https://stackoverflow.com/questions/40723239/i-need-some-explanation-for-some-of-this-code
// Reference: https://intellipaat.com/community/75387/how-to-write-a-countdown-timer-in-javascript
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;
// If seconds is less than 10, 0 is added next to the number for the two-digit format 
// The value of seconds is assigned to textContent of display element 
// Passed as arugument to startTimer 
        if (--timer < 0) {
// When time reaches 0, textContent set to 0 
            display.textContent = 0;
        }
    }, 1000);
}

// Reference: https://www.youtube.com/watch?v=5IMXpp3rohQ
// https://nm2207.org/2223S2/wien/web/Project/Final/index.html



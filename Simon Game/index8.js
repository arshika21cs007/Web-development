var btncolors = ["red", "blue", "green", "yellow"];

var gameLogic = [];
var playerClicked = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#Title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var playerChosenColor = $(this).attr("id");
  playerClicked.push(playerChosenColor);

 soundPlay(playerChosenColor);
  animatePress(playerChosenColor);

  checkAnswer(playerClicked.length-1);
});

function checkAnswer(currentLevel) {

    if (gameLogic[currentLevel] === playerClicked[currentLevel]) {
      if (playerClicked.length === gameLogic.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
     soundPlay("wrong");
      $("body").addClass("game-over");
      $("#Title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  playerClicked = [];
  level++;
  $("#Title").text("Level " + level);
  var randomNo = Math.floor(Math.random() * 4);
  var randomColorChosen = btncolors[randomNo];
  gameLogic.push(randomColorChosen);

  $("#" + randomColorChosen).fadeIn(100).fadeOut(100).fadeIn(100);
 soundPlay(randomColorChosen);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressedColor");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressedColor");
  }, 100);
}

function soundPlay(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gameLogic = [];
  started = false;
}

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;


$(document).one("keydown", function() {
    $("h1").text("Level " + level);
    nextSequence();
  });

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);

});
function checkAnswer(currentLevel){

  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
     if (userClickedPattern.length===gamePattern.length){
  setTimeout(function(){
  nextSequence()}, 1000);}}

    else {

    $("body").addClass("game-over");

     setTimeout(function(){
     $("body").removeClass("game-over");}, 200);

     playSound("wrong");

     $("h1").text("Game Over, Press Any Key to Restart");
     startOver();
     }
    }

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  userClickedPattern = [];

  level++;

  $("h1").text("Level " + level);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();


}

 function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
 }
function animatePress(name){

  $("#" + name).addClass("pressed");

  setTimeout(function(){
 $("#" + name).removeClass("pressed"); 100;});
}
function startOver(){

  $(document).one("keydown", function() {
      $("h1").text("Level " + level);
      nextSequence();
    });
    level = 0;
    gamePattern = [];
}

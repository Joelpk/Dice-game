var randomNumber1 = Math.floor(Math.random(randomNumber1) * 6) + 1;
var randomNumber2 = Math.floor(Math.random(randomNumber2) * 6) + 1;

// for Player 1
var imageSource1 = "./images/dice-" + randomNumber1 + ".png";
$("img").attr("src", imageSource1);    
// $("img").eq(0).attr("src", "./images/dice-"+ randomNumber1 +".png");   // or combine the two steps in one

 // for Player 2
 var imageSource2 = "./images/dice-" + randomNumber2 + ".png";
$("img").eq(1).attr("src", imageSource2);

// Conditions
if (randomNumber1 > randomNumber2) {
    $(".player-text").eq(0).text("Player 1 😎")
    $("h1").addClass("winner").text("Player 1 Wins !");
}

else if (randomNumber1 == randomNumber2) {
    $("h1").text("Draw 😬");
}

else{
    $(".player-text").eq(1).text("Player 2 😎")
    $("h1").addClass("winner").text("Player 2 Wins !");
}




var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Construct the image file name based on the random number
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; 

// Select the left dice image element and set its src attribute
document.querySelector(".img1").setAttribute("src", randomDiceImage1);
//For secondDice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🎲";
}
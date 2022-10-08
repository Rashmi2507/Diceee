var randomNum = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNum + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNum1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

if (randomNum > randomNum1)
{
    document.querySelector("h1").innerHTML = "Player1 Wins"; 
}
else if (randomNum < randomNum1)
{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!!"
}
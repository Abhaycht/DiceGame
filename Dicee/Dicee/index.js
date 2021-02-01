var randomNumber1 = Math.ceil(Math.random()*(6-1)+1);
console.log(randomNumber1);
var randomimg1 = "images/dice" + randomNumber1 + ".png";
var ran = document.querySelectorAll("img")[0];
ran.setAttribute("src",randomimg1);

var randomNumber2 = Math.ceil(Math.random()*(6-1)+1);
console.log(randomNumber2);
var randomimg2 = "images/dice" + randomNumber2 + ".png";
var ran = document.querySelectorAll("img")[1];
ran.setAttribute("src",randomimg2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 1 won";
}
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 2 won";
}
else if(randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML= "Draw";
}

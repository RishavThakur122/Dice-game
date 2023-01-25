var randomnumber1=Math.floor((Math.random()*6)+1);
var ran="images/dice"+randomnumber1.toString()+".png";
document.querySelectorAll("img")[0].setAttribute("src",ran);
var pan= "images/dice"+Math.floor((Math.random()*6)+1).toString()+".png";
document.querySelectorAll("img")[1].setAttribute("src",pan);
if (pan>ran){
    document.querySelector("h1").innerHTML="player 2nd wins";
}
else if(pan<ran){
    document.querySelector("h1").innerHTML="player 1st wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
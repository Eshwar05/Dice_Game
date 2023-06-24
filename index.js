function playgame(){
var radNo1=Math.floor(Math.random() * 6)+1;
var radDiceImg="dice"+radNo1+".png";
var radImgSor=radDiceImg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",radImgSor)


var radNo2=Math.floor(Math.random() * 6)+1;
var radDiceImg="dice"+radNo2+".png";
var radImgSor2=radDiceImg;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",radImgSor2)


if(radNo1 > radNo2){
    document.getElementById("play").innerHTML="🚩Play 1 Wins!";
}
else if(radNo1<radNo2){
    document.getElementById("play").innerHTML="Play 2 Wins!🚩";
}
else{
    document.getElementById("play").innerHTML="Draw!";
}
}
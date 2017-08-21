window.onload=function(){
  
var el = document.querySelectorAll('.box');
var cardNumber=el.length;//抓取卡片的張數
var color=[];//同等卡片張數的顏色數量
var ansCard = pickcard();//選到的答案

var el2 = document.querySelector('h1');
var el3 = document.querySelector('p');
var el4 = document.querySelector('body');
var el5 = document.querySelector('a');
el5.addEventListener('click', fadeOut);
el5.addEventListener('click', function(){el4.style.backgroundColor='black';});
el3.textContent='WHAT\'S THE COLOR?';
cardColorGenerate();//先產生顏色

for (var i = 0; i < cardNumber; i++) {//給每張卡顏色與遊戲功能
  el[i].style.backgroundColor=color[i];
  el[i].addEventListener('click', fadeOut);
  el[i].addEventListener('click', game);
}
el2.textContent= (el[ansCard].style.backgroundColor).toUpperCase();
//標題所提示的顏色



function fadeOut(){
  this.style.opacity= 0;
  this.style.cursor= 'default';
}


function game(){
  if(this.style.backgroundColor===el[ansCard].style.backgroundColor){
    el3.textContent='CORRECT!!!';
    el4.style.backgroundColor=this.style.backgroundColor;
    for (var i = 0; i < cardNumber; i++) {
      el[i].removeEventListener('click', fadeOut);
      el[i].removeEventListener('click', game);
      el[i].style.backgroundColor="#fff";
      el[i].style.opacity= 1;
      el5.style.opacity= 1;
    }
  } else {
    el3.textContent='TRY ANOTHER COLOR';
  }
}


function pickcard(){
  return Math.floor( Math.random() * (el.length  + 1) ) ;
  
}

function cardColorGenerate(){
  for (var i = 0; i < cardNumber; i++) {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    color.push('rgb(' + r + ', ' + g + ', ' + b + ')');
  }
}
}
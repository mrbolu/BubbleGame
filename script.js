var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function newHitVal(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter ="";

for(var i=1; i<103; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class='bubble'>${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML= clutter;
}
function runTimer(){
    var timerint = setInterval(function() {
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    } else{
        clearInterval (timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over. Your Score Is : ${score}</h1>`;
    }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
     var clickedNumber = Number(dets.target.textContent);
     if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        newHitVal();
     }
})
runTimer();
makeBubble();
newHitVal();

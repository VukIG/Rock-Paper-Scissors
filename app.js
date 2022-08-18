const rock=document.querySelector(".playerrock");
const paper=document.querySelector(".playerpaper");
const scissors=document.querySelector(".playerscissors");
const everything=document.querySelector(".everything");
const endscreen=document.querySelector(".hiddenWiki");

let vod=document.querySelector(".victoryOrDefeat")
let yresult=document.querySelector(".yourresult");
let cresult=document.querySelector(".compresult");

let a,t=0,n=0;

function robotRandom() {
    let b=Math.floor(Math.random()*3);
    let c=a-b;
    if(c==1){
        n++;
        yresult.innerHTML=n;
    }
    else if(c==-2){
        n++;
        yresult.innerHTML=n;
    }
    else if(c==-1){
        t++;
        cresult.innerHTML=t;
    }  
    else if(c==2){
        t++;
        cresult.innerHTML=t;
    }
    else{
        console.log("nereseno");
    }
    if(n==5){
        everything.style="display:none";
        endscreen.style="display:block";
        vod.innerHTML="You have lost!"
    }
    else if(t==5){
        everything.style="display:none";
        endscreen.style="display:block";
        vod.innerHTML="You have won!"
    }
}

rock.addEventListener("click",function () {
    a=1;
    robotRandom();
});

paper.addEventListener("click",function () {
    a=2;
    robotRandom();
});

scissors.addEventListener("click",function () {
    a=3;
    robotRandom();
});
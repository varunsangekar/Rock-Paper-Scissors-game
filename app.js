let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const vs=document.querySelectorAll(".reset-game")


const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    
    return options[randIdx];

}

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you Win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose!! ${compChoice}  beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    msg.innerText="Game Was Draw : Play again.!!";
    msg.style.backgroundColor="black";
}
const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice ();
    console.log("comp choice",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice ==="paper"? false:true;
        }else if(userChoice ==="paper"){
            userWin=compChoice ==="scissore"?false:true;
        }else{
            userWin=compChoice ==="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}
const varunSnagekar=()=>{
    userScorePara.innerText="0";
    compScorePara.innerText="0";
    msg.innerText="play your move";
    msg.style.backgroundColor="balck";
    
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })

})

vs.forEach((reset)=>{
    reset.addEventListener("click",()=>{
        const vs=reset.getAttribute("id");
        varunSnagekar();
    })
})


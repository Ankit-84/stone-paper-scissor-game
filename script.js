let userscore=0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let user_Score = 0;
let comp_Score = 0;

const genCompChoice = ()=>{
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};
const gameDraw = ()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#0b192a";
};
const showWinner = (userWin , userChoice , compchoice) => {
    if(userWin){
        user_Score++;
        msg.innerText =  `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore.innerText = user_Score;
    }else{
        comp_Score++;
        msg.innerText = `You lost. ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore.innerText = comp_Score;
    }
}
const playGame = (userChoice)=>{
    const compchoice = genCompChoice();
    if(userChoice===compchoice){
        //game draw
        gameDraw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //paper , scissor
            userWin = compchoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock scissor
            userWin = compchoice === "scissor" ? false : true;
        }else{
            //rock paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

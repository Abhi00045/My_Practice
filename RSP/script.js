let button = document.querySelectorAll("button");
let result = document.getElementById("result");
let mine = document.getElementById("mine");
let system = document.getElementById("system");
 
button.forEach(function(btn){
btn.addEventListener("click",function(){
    let result = playGame(btn.innerText,computerChoice());
  });
});
function computerChoice(){
    let choices =["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*3);
    // console.log(choices[random]);
    return choices[random];
}
let your =0;
let computer = 0;

function playGame(playerChoice,computerChoice){
    // console.log(`hi`);
    if(playerChoice === computerChoice){
        result.innerText="Its a tie";
    }
    else if((playerChoice === "Paper" && computerChoice==="Rock")||(playerChoice==="Rock"&&computerChoice=="Scissors")|| (playerChoice==="Scissors" && computerChoice==="Paper")){
        computer++;
        system.innerText=computer;
        result.innerText=" computer win "+playerChoice+" notBeaten "+computerChoice;
    }else{
        your++;
        mine.innerText=your;
        result.innerText=" You win "+playerChoice+" Beats "+computerChoice;
    }

}
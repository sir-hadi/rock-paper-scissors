let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML= userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win ヽ(・∀・)ﾉ`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Lose (；￣Д￣)`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} equasl ${convertToWord(userChoice)}${smallUserWord}. It's a draw ლ(ಠ_ಠ ლ)`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            console.log("U WIN");
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            console.log("U lose");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            console.log("DRAW BOI");
            break;
        default:
            console.log("SOMETHING IS WRONG");
            break;
    }

}

function main(){
    rock_div.addEventListener('click',() =>game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
}

main();

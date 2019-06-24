let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerchoice(){
    const choices = ['r','p','s'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function convertor(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function win(user,comp){
    userscore++;
    userscore_span.innerHTML = userscore;
    result_div.innerHTML = `${convertor(user)} beats ${convertor(comp)}. You Win!!`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("green-glow")},800);
}

function lose(user,comp){
    compscore++;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = `${convertor(user)} loses ${convertor(comp)}. Computer Wins!!`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("red-glow")},800);
}

function tie(user,comp){
    result_div.innerHTML = `${convertor(user)} and ${convertor(comp)} cancel each other. It's a draw!!`;
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("grey-glow")},800);
}

function game(userchoice){
    const compchoice = getcomputerchoice();
    switch(userchoice + compchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userchoice,compchoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            tie(userchoice,compchoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();

let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".barra-score");
const result_p = document.querySelector(".resultado > p");
const pedra_div = document.querySelector("#pe");
const papel_div = document.querySelector("#pa");
const tesoura_div = document.querySelector("#te");

function getCpuChoice() {
    const choices = ['pe', 'pa', 'te'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converter(letra) {
    if(letra === "pe") {
        return "Pedra";
    }
    if(letra === "pa") {
        return "Papel";
    }
    if(letra === "te") {
        return "Tesoura";
    }
}

function ganhou(userChoice, cpuChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    const userWord = "user".fontsize(3).sup();
    const cpuWord = "cpu".fontsize(3).sup()
    result_p.innerHTML = `${converter(userChoice)}${userWord} ganha de ${converter(cpuChoice)}${cpuWord}. Você ganhou!!!`;
}

function perdeu(userChoice, cpuChoice) {
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    const userWord = "user".fontsize(3).sup();
    const cpuWord = "cpu".fontsize(3).sup()
    result_p.innerHTML = `${converter(userChoice)}${userWord} perde para ${converter(cpuChoice)}${cpuWord}. Você perdeu...`;
}

function empate(userChoice, cpuChoice) {
    const userWord = "user".fontsize(3).sup();
    const cpuWord = "cpu".fontsize(3).sup()
    result_p.innerHTML = `${converter(userChoice)}${userWord} empata com ${converter(cpuChoice)}${cpuWord}. Empatou!`;
}

function game(userChoice) {
    const cpuChoice = getCpuChoice();
    switch (userChoice + cpuChoice) {
        case "pete":
        case "pape":
        case "tepa":
            ganhou(userChoice, cpuChoice);
            break;
        case "pepa":
        case "pate":
        case "tepe":
            perdeu(userChoice, cpuChoice);
            break;
        case "pepe":
        case "papa":
        case "tete":
            empate(userChoice, cpuChoice);
            break;
    }
}

function main() {
    pedra_div.addEventListener("click", () => game("pe"));

    papel_div.addEventListener("click", () => game("pa"));

    tesoura_div.addEventListener("click", () => game("te"));
}

main();

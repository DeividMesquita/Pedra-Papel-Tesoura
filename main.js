const userScore = 0;
const cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".barra-pontos");
const result_div = document.querySelector(".resultado");
const pedra_div = document.querySelector("#pedra");
const papel_div = document.querySelector("#papel");
const tesoura_div = document.querySelector("#tesoura");

function getCpuChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getCpuChoice());

function game(userChoice) {

}
function main() {
    pedra_div.addEventListener("click", function () {
        game("pedra")
    });

    papel_div.addEventListener("click", function () {
        game("papel")
    });

    tesoura_div.addEventListener("click", function () {
        game("tesoura")
    });
}

main();


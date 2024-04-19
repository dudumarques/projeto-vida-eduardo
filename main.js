const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba")
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoOjetivo = new Date("2024-07-05T00:00:00");

const tempoAtual = new Date();

contadores[0].textContent = calculaTempo(tempoOjetivo1);

function calculaTempo(tempoOjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoOjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;






}
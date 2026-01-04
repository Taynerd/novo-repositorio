// JOGADORES
const playersDiv = document.getElementById('players');
const addPlayerBtn = document.getElementById('addPlayer');
const sortearBtn = document.getElementById('sortear');
const resultadoSorteio = document.getElementById('resultadoSorteio');

let sorteado1 = "";
let sorteado2 = "";

addPlayerBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.placeholder = `Jogador ${playersDiv.children.length + 1}`;
  playersDiv.appendChild(input);
});

sortearBtn.addEventListener('click', () => {
  const nomes = [...playersDiv.querySelectorAll('input')]
    .map(i => i.value.trim())
    .filter(Boolean);

  if (nomes.length < 2) {
    resultadoSorteio.textContent = 'Insira pelo menos 2 nomes.';
    return;
  }

 nomes.sort(() => Math.random() - 0.5);

sorteado1 = nomes[0];
sorteado2 = nomes[1];

resultadoSorteio.textContent = `🎯 Sorteados: ${sorteado1} e ${sorteado2}`;});

// ROLETA
const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const resultado = document.getElementById("resultado");

const acoes = ["CHUPAR", "LAMBER", "MORDER", "BEIJAR", "APERTAR", "CHEIRAR"];
let rotacao = 0;

botao.addEventListener("click", () => {
  const giro = Math.floor(Math.random() * 360) + 1080;
  rotacao += giro;

  roleta.style.transform = `rotate(${rotacao}deg)`;

  const angulo = (360 - (rotacao % 360)) % 360;
  const index = Math.floor(angulo / 60);

  setTimeout(() => {
    resultado.textContent = 
      `${sorteado1} deve ${acoes[index]} uma área do corpo de ${sorteado2}`;
  }, 3000);
});

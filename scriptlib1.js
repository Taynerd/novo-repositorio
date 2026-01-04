const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');

let isOpen = false;

const textos = [
"Como se chama o fetiche de ver o parceiro tendo relação com outro(a)?",
"Qual o simbolo da mulher casada que é liberada para se relacionar com outros (as)",
"Quantas pessoas são necessárias pra fazer um menáge?",
"Qual nome da prática na qual o homem coloca seu pênis ereto para receber oral através de uma parede sem ver a pessoa do outro lado?",
"Como é chamada a prática da troca de casais?",
"g"
];

const respostas = [
  "cuckold",
  "rainha de espadas",
  "três",
  "glory role",
  "swing"
];
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', e => {
    e.stopPropagation();

    if (isOpen) {
      closeCard();
      return;
    }

    const index = option.dataset.index;
    openCard(index);
  });
});

overlay.addEventListener('click', closeCard);

 function openCard(index) {
  expanded.innerHTML = `
    <h2>Pergunta ${Number(index) + 1}</h2>
    <p>${textos[index]}</p>

    <button class="btn-ver-resposta" onclick="verResposta(${index})">
      VER RESPOSTA
    </button>

    <div class="resposta" id="resposta">
      ${respostas[index]}
    </div>
  `;

  expanded.classList.add('active');
  overlay.classList.add('active');
  isOpen = true;
}

function closeCard() {
  expanded.classList.remove('active');
  overlay.classList.remove('active');
  isOpen = false;
}

function verResposta() {
  const respostaEl = document.getElementById('resposta');
  respostaEl.classList.add('show');
}

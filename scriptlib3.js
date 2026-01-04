const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
    "Faria dupla penetração?",
    "Iria numa casa de swing?",
    "Ficaria com outro (a) na minha frente?",
    "Deixaria eu te amarrar na cama?",
    "Faria anal?",
    "Faria uma DPV?(dupla penetração vaginal)?",
    "Faria uma DPA? (dupla penetração anal)?",
    "Chuparia um desconhecido no glory hole?",
    "Deixaria eu te comer com uma cinta?",
    "Deixaria eu te ver transando com outro(a)?",
    "Transaria com outras duas pessoas ao mesmo tempo?",
    ""

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


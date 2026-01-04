const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Qual seria um dia perfeito ao meu lado?",
"O que você mais gosta de fazer quando estamos juntos?",
"Tem algo que você sente falta de fazermos mais?",
"Qual programa simples te deixa mais feliz ao meu lado?",
"Você se sente presente quando estamos juntos?",
"Se pudesse escolher uma atividade nova para fazermos juntos, qual seria?",
"O que te faz sentir que tivemos um bom tempo juntos?",
"Você prefere programas tranquilos ou agitados comigo?",
"O que acha que poderíamos fazer para aproveitar mais nosso tempo juntos?",
"Qual foi o melhor final de semana que já passamos juntos?",
"Qual é a sua forma favorita de passar um dia comigo?",
"O que faz um momento juntos ser especial para você?",
"Se tivéssemos um dia inteiro só nosso, o que você gostaria de fazer?",
"Qual é a lembrança mais gostosa de um dia que passamos juntos?",
"Você prefere programas tranquilos ou cheios de aventura comigo?",
"O que te faz sentir mais presente quando estamos juntos?",
"Tem algo simples que fazemos que você ama?",
"Qual seria o encontro perfeito para você?",
"Você acha que passamos tempo suficiente juntos?",
"Se pudéssemos viajar agora, para onde você gostaria de ir comigo?",
"O que você mais gosta de fazer quando estamos em casa?",
"Qual é o tipo de programa que te faz sentir mais conectado(a) a mim?",
"Tem algum lugar que marcou um momento especial nosso?",
"O que faz você sentir que estou realmente presente com você?",
"Você gosta mais de planejar nossos momentos ou deixar acontecer naturalmente?",
"Qual foi o passeio mais divertido que já fizemos juntos?",
"Se tivéssemos uma tradição semanal, qual seria?",
"O que você acha que poderíamos fazer mais juntos?",
"Você prefere noites de filme ou passeios ao ar livre comigo?",
"Qual é o tipo de conversa que mais te aproxima de mim?",
"Se eu preparasse um dia surpresa para nós, o que não poderia faltar?",
"O que te faz sentir amado(a) quando estamos juntos?",
"Você prefere um jantar romântico ou um dia de risadas e diversão?",
"Qual é o momento do nosso dia que você mais gosta de dividir comigo?",
"Tem alguma atividade que você gostaria que virasse um hábito nosso?",
"O que te faz desligar do mundo quando estamos juntos?",
"Qual foi o momento mais leve que tivemos recentemente?",
"Você gosta quando passamos tempo só nós dois, sem distrações?",
"Tem algo novo que você gostaria de experimentar juntos?",
"O que te faz sentir que nosso tempo juntos valeu a pena?",
"Qual é o gesto mais simples que te faz sentir conectado(a)?",
"Você prefere viagens curtas e frequentes ou longas e planejadas?",
"O que mais te relaxa quando estamos juntos?",
"Se fôssemos reviver um dia perfeito, qual seria?",
"Você gosta de quando cozinhamos, assistimos algo ou apenas conversamos juntos?",
"Qual é o melhor tipo de fim de semana para você?",
"Tem alguma música ou ambiente que combina com nossos momentos juntos?",
"O que você acha que torna nossos momentos únicos?",
"Qual é a coisa mais divertida que fazemos juntos?",
"Tem algo que sempre quis fazer comigo, mas ainda não aconteceu?",
"O que você sente quando passamos um tempo de qualidade juntos?",
"Você prefere surpresas ou planejar nossos momentos com antecedência?",
"Qual é o pequeno detalhe do nosso tempo juntos que você mais aprecia?",
"Tem algo que eu faço que te ajuda a relaxar ou se sentir bem?",
"O que você acha que poderíamos melhorar no nosso tempo juntos?",
"Qual é o tipo de dia que você considera perfeito comigo?",
"O que te faz sentir que o tempo para quando estamos juntos?",
"Se pudéssemos repetir um momento nosso, qual seria?",
"Você prefere momentos tranquilos ou animados ao meu lado?",
"O que faz você sentir que realmente aproveitamos o tempo juntos?",
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
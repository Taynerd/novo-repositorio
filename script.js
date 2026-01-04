const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Qual foi o momento mais marcante que vivemos juntos?",
"O que você mais admira em mim?",
"Quando você percebeu que estava apaixonado(a)?",
"O que mudou em sua vida desde que começamos a nos relacionar?",
"O que representa o nosso relacionamento para você?",
"Qual foi o nosso encontro mais inesquecível?",
"Você sente que somos parceiros em tudo? Por quê?",
"Qual hábito meu te faz se sentir mais amado(a)?",
"Tem algo que você gostaria de fazer juntos e ainda não fizemos?",
"Qual é a sua lembrança favorita de nós dois?",
"Qual hábito meu te faz se sentir mais amado(a)?",
"Tem algo que você gostaria de fazer juntos e ainda não fizemos?",
"Qual é a sua lembrança favorita de nós dois?",
"Quando você percebeu que estava apaixonado(a) por mim?",
"Qual foi o primeiro pensamento que teve quando me conheceu?",
"Qual é o nosso momento mais engraçado juntos?",
"Se você tivesse que descrever nossa história em uma palavra, qual seria?",
"Qual foi o dia mais marcante do nosso relacionamento?",
"O que você acha que mais mudou em nós desde o começo?",
"Qual foi a viagem mais especial que fizemos juntos?",
"Tem alguma música que sempre te faz lembrar de mim?",
"Qual foi o gesto mais simples que te fez se sentir amado(a)?",
"Qual é a coisa mais fofa que já fizemos um pelo outro?",
"Se pudesse reviver um dia nosso, qual escolheria?",
"Qual é o nosso pequeno ritual que você mais gosta?",
"Como você descreveria nosso relacionamento para alguém que não nos conhece?",
"Qual é o momento mais romântico que já vivemos?",
"O que você acha que faz o nosso relacionamento ser único?",
"Qual é o meu jeitinho que você mais gosta?",
"Se nossa história fosse um filme, qual seria o título?",
"Qual é a lembrança mais antiga que você tem de nós dois?",
"Tem algo que você admira em mim, mas nunca disse?",
"Qual é a coisa mais inesperada que aprendeu sobre mim?",
"O que você mais aprecia na forma como resolvemos conflitos?",
"Qual foi a vez que mais rimos juntos?",
"Se você pudesse planejar um dia perfeito pra nós dois, como seria?",
"O que você sente quando lembra do nosso começo?",
"Qual é a característica minha que mais te atrai?",
"Qual foi o momento mais desafiador que superamos juntos?",
"O que você sente que aprendemos um com o outro ao longo do tempo?",
"Tem alguma mania minha que você aprendeu a amar?",
"Qual é o cheirinho ou som que te lembra de mim?",
"O que mais te faz sentir em casa quando estamos juntos?",
"Qual foi o elogio meu que mais te marcou?",
"Qual é a sua foto favorita nossa e por quê?",
"Se você tivesse que escrever uma carta pra nós no futuro, o que diria?",
"Qual é a primeira lembrança que vem à mente quando pensa em mim?",
"O que você acha que é o segredo da nossa conexão?",
"Qual foi o presente mais significativo que te dei?",
"Qual é o gesto de carinho que você mais gosta de receber de mim?",
"Se tivéssemos que criar uma tradição só nossa, qual seria?",
"Qual é a palavra que melhor representa o que você sente por mim?",
"Tem algo que você gostaria que eu soubesse mais sobre você?",
"Qual é o momento mais espontâneo e feliz que tivemos?",
"Qual foi a maior surpresa que já te fiz?",
"O que você acha que faz a gente dar tão certo?",
"Se pudesse congelar um instante da nossa história, qual seria?",
"Qual é a memória mais doce que guardamos juntos?",
"O que você imagina quando pensa no nosso futuro?",
"Qual é a coisa mais bonita que vivemos até hoje?",
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
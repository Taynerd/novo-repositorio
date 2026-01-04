const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Onde você se imagina comigo daqui a 5 anos?",
"Qual é o seu maior sonho que deseja realizar ao meu lado?",
"Você gostaria de construir uma família comigo?",
"Como imagina a nossa vida profissional no futuro?",
"Tem algo que você gostaria que planejássemos juntos este ano?",
"O que você valoriza mais ao construir um futuro a dois?",
"Qual lugar você sonha em viajarmos juntos?",
"Você acredita que temos objetivos parecidos?",
"O que mais te motiva a crescer como pessoa e parceiro(a)?",
"Se pudéssemos realizar um desejo juntos agora, qual seria?",
"Qual é um sonho que você ainda quer realizar ao meu lado?",
"Onde você se imagina com a gente daqui a cinco anos?",
"Qual é a maior meta que temos em comum hoje?",
"Tem algum lugar que você sonha em morarmos juntos um dia?",
"Qual é o seu maior objetivo pessoal no momento?",
"Se você pudesse escolher um sonho nosso pra se realizar agora, qual seria?",
"O que você acha que podemos fazer juntos pra crescer como casal?",
"Qual é o projeto de vida que mais te anima hoje?",
"Tem algo que você quer conquistar antes de envelhecermos juntos?",
"Como você imagina que será nossa rotina ideal no futuro?",
"Qual é o seu maior sonho profissional?",
"O que você gostaria que nunca mudasse entre nós, mesmo com o tempo?",
"Se tivéssemos uma lista de sonhos pra realizar juntos, o que estaria no topo?",
"Qual é o próximo passo que você gostaria que déssemos como casal?",
"Tem alguma meta individual que você gostaria que eu te ajudasse a alcançar?",
"Como você imagina a casa dos nossos sonhos?",
"Se fosse planejar um ano perfeito pra nós, o que não poderia faltar?",
"Qual é o sonho mais maluco que você tem e gostaria de tentar um dia comigo?",
"O que você acha que podemos fazer pra manter nosso amor forte no futuro?",
"Qual é o seu maior sonho financeiro?",
"Se pudéssemos viver em qualquer lugar do mundo, onde seria?",
"Qual é o projeto pessoal que você mais quer me ver realizar?",
"O que você mais espera que a gente conquiste juntos nos próximos anos?",
"Tem alguma viagem dos sonhos que você quer muito fazer comigo?",
"Como você imagina nossa vida quando formos mais velhos?",
"Qual é o maior desafio que você quer vencer ainda este ano?",
"Se pudéssemos abrir um negócio juntos, o que seria?",
"O que você acha que precisamos fazer hoje pra ter o futuro que queremos?",
"Qual é a meta mais importante pra você no momento?",
"O que te motiva a seguir construindo o futuro comigo?",
"Qual seria o maior sinal de que realizamos nossos sonhos juntos?",
"Tem algo que você sonha em aprender e gostaria que eu aprendesse também?",
"Se pudéssemos planejar o futuro perfeito, o que não poderia faltar?",
"O que te inspira a pensar no nosso amanhã?",
"Qual é o seu maior desejo pra nossa vida amorosa no futuro?",
"Se tudo desse certo, como seria nosso estilo de vida ideal?",
"Qual é o sonho que você tinha antes de mim e que ainda quer realizar?",
"O que te faz acreditar que nossos planos darão certo?",
"Se tivéssemos um objetivo conjunto este ano, qual você escolheria?",
"O que você acha que será nossa maior conquista como casal?",
"Como você gostaria de equilibrar seus sonhos pessoais e os nossos como casal?",
"Qual seria a meta perfeita pra realizarmos juntos ainda esse ano?",
"Tem algo que você quer mudar hoje pra ter um futuro melhor amanhã?",
"Qual é o seu maior sonho emocional — algo que te faria sentir realizado(a)?",
"O que você mais deseja viver comigo pela primeira vez?",
"Se tivéssemos que escrever nossa lista de sonhos de vida, o que viria primeiro?",
"Qual é o plano mais importante que você quer tirar do papel comigo?",
"O que você imagina que estaremos comemorando daqui a dez anos?",
"Tem algum sonho antigo que você quer resgatar agora ao meu lado?",
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
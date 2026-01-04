const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"O que mais te excita durante o sexo?",
"Você se sente à vontade para expressar seus desejos comigo?",
"Tem alguma fantasia que gostaria de realizar comigo?",
"O que faz você se sentir mais conectado(a) comigo na intimidade?",
"Existe algo que podemos explorar mais juntos no sexo?",
"O que torna nossa vida sexual especial para você?",
"Tem algo que você gostaria de tentar e ainda não teve coragem?",
"O que você mais gosta nas nossas preliminares?",
"Como você se sente após uma noite íntima comigo?",
"O que mais te chama atenção em mim fisicamente?",
"Você prefere mais carinho ou mais intensidade durante o sexo?",
"Tem algo que eu faço que sempre te deixa com vontade?",
"Você se lembra do nosso primeiro beijo?",
"Qual foi o momento mais marcante de intimidade entre nós?",
"O que você acha que faz nossa química funcionar tão bem?",
"Tem algum lugar onde você gostaria de transar e ainda não rolou?",
"Você prefere luz acesa ou apagada?",
"Qual tipo de toque te faz arrepiar?",
"O que te faz sentir mais desejado(a)?",
"Você gosta mais de quando eu tomo iniciativa ou quando você toma?",
"Como você definiria nosso estilo na cama em uma palavra?",
"Tem alguma fantasia leve que você gostaria de realizar comigo?",
"Qual é a parte do meu corpo que você mais gosta de tocar?",
"Você prefere mais beijos ou mais olhares durante o sexo?",
"Qual é o melhor horário do dia para a gente fazer amor?",
"O que mais te faz perder a cabeça comigo?",
"Você se lembra da primeira vez que sentiu desejo por mim?",
"Tem algo que você gostaria que eu fizesse mais durante o sexo?",
"Qual é a sua forma favorita de demonstrar desejo?",
"O que te deixa mais confortável durante nossos momentos íntimos?",
"Você gosta mais de sexo espontâneo ou planejado?",
"Tem alguma trilha sonora que combina com a gente na cama?",
"Se eu fosse te surpreender com algo sensual, o que você gostaria?",
"O que te faz sentir mais conectado(a) comigo depois do sexo?",
"Você acha que a intimidade fortalece o relacionamento?",
"Tem alguma palavra ou gesto que te faz sentir muito desejado(a)?",
"Qual foi o beijo mais marcante entre nós até hoje?",
"Você prefere mais risadas ou mais silêncio durante o sexo?",
"Qual é o tipo de toque que mais te acalma?",
"Você gosta quando eu falo algo no seu ouvido?",
"Qual é o elogio que mais te deixa sem graça (no bom sentido)?",
"Você acha que melhoramos nossa química com o tempo?",
"O que você acha que mais mudou na nossa intimidade desde o começo?",
"Qual é o seu tipo de preliminar favorito?",
"Você gosta quando o clima começa de forma sutil ou direta?",
"Se você pudesse escolher um lugar ideal para um momento a dois, qual seria?",
"O que te faz sentir mais conectado(a) emocionalmente durante o sexo?",
"Você acha que a intimidade física e emocional caminham juntas?",
"Qual é o tipo de abraço que te faz se sentir mais seguro(a)?",
"Você se lembra da primeira vez que dormimos abraçados?",
"O que você mais gosta no nosso jeito de se tocar?",
"Qual foi o momento mais engraçado que já tivemos na cama?",
"O que você acha que faz nosso desejo continuar vivo?",
"Você prefere quando o clima surge naturalmente ou quando a gente provoca?",
"Tem algo novo que você gostaria de tentar juntos?",
"Qual é a lembrança mais quente que você tem da gente?",
"O que você sente quando me olha com desejo?",
"O que significa intimidade para você?",
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
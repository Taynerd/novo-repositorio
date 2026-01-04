const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Você se sente ouvido(a) por mim?",
"Como você prefere resolver conflitos?",
"O que mais ajuda você a se acalmar em uma discussão?",
"Tem algo que você gostaria que eu entendesse melhor sobre você?",
"Você sente que consegue ser sincero(a) comigo sem medo?",
"Como podemos melhorar nossa comunicação?",
"Você prefere conversar na hora do conflito ou esperar?",
"O que costuma gerar mais desentendimentos entre nós?",
"Qual é a sua maior dificuldade em brigas?",
"O que você mais valoriza em uma conversa difícil?",
"Como você se sente quando temos opiniões diferentes?",
"O que te ajuda a se acalmar durante uma discussão?",
"Você sente que eu realmente te escuto quando falamos sobre algo importante?",
"Qual é a melhor forma de eu me comunicar com você em momentos de tensão?",
"Você prefere resolver um problema na hora ou deixar o clima esfriar primeiro?",
"Tem algo que eu faço durante discussões que te incomoda?",
"O que te faz sentir ouvido(a) de verdade?",
"Você acha que sabemos pedir desculpas um ao outro quando é necessário?",
"O que significa para você ‘resolver um conflito’?",
"Você se sente à vontade para falar sobre o que te incomoda?",
"O que te ajuda a ser mais paciente comigo?",
"Qual é a pior forma de tentar resolver uma briga com você?",
"Você acredita que é mais fácil conversar quando estamos calmos ou quando o assunto ainda está quente?",
"Qual é a frase que você mais gosta de ouvir quando estamos em um momento difícil?",
"Tem algo que eu poderia mudar na minha forma de me expressar?",
"Você acha que sabemos evitar mal-entendidos?",
"Como você se sente quando eu fico em silêncio durante uma discussão?",
"O que você espera de mim quando está magoado(a)?",
"Você se sente confortável em apontar quando algo que eu digo te machuca?",
"Qual é a sua linguagem de comunicação mais natural: falar, ouvir, ou demonstrar com atitudes?",
"Você sente que expressamos nossas emoções de forma parecida?",
"O que te ajuda a se abrir quando está fechado(a) emocionalmente?",
"Você gosta quando eu te pergunto o que está sentindo ou prefere que eu espere você falar?",
"Tem algo que eu poderia fazer para melhorar nossa comunicação?",
"Você acredita que brigamos de forma justa?",
"Como podemos evitar repetir os mesmos conflitos?",
"O que você sente quando eu te interrompo?",
"Você acha que conseguimos manter o respeito mesmo quando discordamos?",
"Tem alguma lembrança de uma conversa difícil que acabou fortalecendo a gente?",
"Você acha que nos comunicamos mais com palavras ou atitudes?",
"O que te faz se sentir compreendido(a) em uma conversa?",
"Você sente que eu te deixo espaço para expressar o que pensa?",
"Como você prefere que eu te diga quando algo me incomoda?",
"O que mais te irrita durante uma discussão?",
"Você acredita que é possível discutir sem brigar?",
"O que te ajuda a perdoar depois de um desentendimento?",
"Você acha que o tom de voz faz diferença na hora de conversar?",
"Tem algo que eu já disse em uma briga e que ficou marcado pra você?",
"O que significa ‘respeitar o tempo do outro’ durante um conflito?",
"Você se sente seguro(a) em expressar suas emoções comigo?",
"Como podemos transformar discussões em oportunidades de aprendizado?",
"Você acha que temos boa comunicação no dia a dia?",
"Quando você está chateado(a), prefere espaço ou companhia?",
"O que te ajuda a voltar ao equilíbrio depois de um conflito?",
"Você acredita que o humor pode ajudar a resolver tensões?",
"Qual foi o momento em que você se sentiu mais compreendido(a) por mim?",
"Tem algo que eu poderia dizer mais vezes para fortalecer nossa comunicação?",
"Você acha que a gente sabe pedir perdão sem orgulho?",
"Como podemos criar um ambiente de conversa mais leve entre nós?",
"O que você gostaria que eu entendesse melhor sobre a sua forma de se comunicar?",
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
const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Tem algo que você não toleraria em um relacionamento?",
"O que é inegociável para você em um(a) parceiro(a)?",
"Você sente que respeitamos os limites um do outro?",
"Temos valores compatíveis? Em que você percebe isso?",
"Existe alguma diferença entre nós que te preocupa?",
"Você já se sentiu desconfortável em alguma situação comigo?",
"Quais são seus principais limites emocionais?",
"Como podemos lidar melhor com nossas diferenças?",
"Até que ponto você acredita em ceder em prol do relacionamento?",
"Quais atitudes minhas demonstram respeito por você?",
"Como você se sente em relação ao consumo de álcool dentro do relacionamento?",
"Você acha que existe um limite saudável para beber?",
"Como você lida quando uma discussão começa a ficar mais intensa?",
"O que significa ‘respeitar o espaço do outro’ pra você?",
"Tem algo que você considera inaceitável em um relacionamento?",
"Como você reage quando está com raiva ou frustrado(a)?",
"Você acredita que o tom da voz pode ser uma forma de agressividade?",
"O que você considera uma atitude abusiva, mesmo que pareça pequena?",
"Tem algum comportamento meu que você acharia que poderia te ferir emocionalmente?",
"Como você gostaria que eu reagisse quando você estiver irritado(a)?",
"O que significa para você ‘pedir desculpas’ de verdade?",
"Você acredita que o ciúme pode ser saudável em alguma medida?",
"Até que ponto a privacidade individual deve ser respeitada dentro do casal?",
"Como você se sente sobre olhar mensagens ou redes sociais um do outro?",
"Você se sente confortável em expressar quando algo te incomoda?",
"O que te ajuda a se acalmar quando algo te irrita?",
"Como você enxerga o uso de cigarros, drogas ou outros vícios em um relacionamento?",
"Você acredita que é possível conviver bem com diferenças de hábitos ou vícios?",
"Tem algo que você considera um gatilho emocional?",
"O que te faz se sentir seguro(a) emocionalmente ao meu lado?",
"Como você gostaria que eu lidasse com seus momentos de estresse?",
"Você acha que temos boa compatibilidade emocional?",
"O que você considera essencial para manter a paz entre nós?",
"Como você enxerga a divisão de responsabilidades na relação?",
"Você se sente respeitado(a) nas suas decisões e opiniões?",
"Tem algo que eu faço que te deixa desconfortável, mesmo que sem intenção?",
"Como você reage quando sente que alguém está tentando te controlar?",
"O que você considera invasivo dentro de um relacionamento?",
"Você acredita que temos o mesmo ritmo emocional?",
"Como você lida com pessoas que perdem o controle quando bebem?",
"O que te faz se afastar de alguém emocionalmente?",
"Como você percebe quando passou do seu limite emocional?",
"Você acredita que somos compatíveis em valores e estilo de vida?",
"Até que ponto você acha que o amor supera diferenças de comportamento?",
"Como você enxerga a importância de buscar ajuda quando há problemas emocionais?",
"Você já viveu alguma situação em que sentiu seus limites sendo ignorados?",
"O que te faria repensar um relacionamento?",
"Você se sente à vontade para dizer ‘não’ quando algo te incomoda?",
"O que significa respeito pra você dentro de um casal?",
"Você acredita que gritar durante discussões é algo aceitável?",
"Como você enxerga o perdão dentro de um relacionamento?",
"Você acha que conseguimos resolver nossos conflitos de forma saudável?",
"O que você espera de mim quando eu estiver em um momento difícil?",
"Como você se sente quando há silêncio após uma discussão?",
"Você acredita que somos compatíveis em nossos modos de lidar com problemas?",
"O que te faria perder a confiança em alguém?",
"Como você reage quando sente que está sendo julgado(a)?",
"Tem algo que você gostaria que eu entendesse melhor sobre seus limites pessoais?",
"Você acredita que amor e respeito andam juntos?",
"Como podemos cuidar um do outro sem ultrapassar os limites individuais?",
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
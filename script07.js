const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Como você se sente em relação a relacionamentos abertos ou não monogâmicos?",
"O que você considera aceitável ou inaceitável quando se trata de outras pessoas fora da relação?",
"O que mais te causaria ciúmes se acontecesse fora da gente?",
"Você acredita que poderia lidar com a ideia de um relacionamento não monogâmico?",
"Quais seriam os limites essenciais para você em um modelo assim?",
"Como você definiria confiança em um contexto de não monogamia?",
"Você já sentiu curiosidade sobre explorar relações fora do casal?",
"O que te faria se sentir seguro(a) mesmo se houvesse outras conexões afetivas?",
"Como você se sentiria se eu flertasse com alguém, mesmo sem envolvimento físico?",
"Quais comportamentos seriam gatilhos de ciúmes para você?",
"O que te faria perder totalmente o interesse em tentar a não monogamia?",
"Você acredita que é possível ter liberdade e ainda se sentir conectado(a) emocionalmente?",
"Tem alguma experiência passada que te deixaria mais resistente a isso?",
"O que você espera do outro para se sentir confortável em um arranjo assim?",
"Você prefere estabelecer regras muito claras ou mais flexíveis?",
"Como você acha que lidaríamos com a comunicação sobre outras pessoas?",
"Você se sentiria inseguro(a) se eu tivesse amizade íntima com alguém do sexo oposto ou mesmo do mesmo sexo?",
"O que te deixaria confortável em termos de encontros fora da relação?",
"Qual seria a linha que nunca poderia ser ultrapassada?",
"Você acha que o ciúme é natural ou precisa ser totalmente controlado?",
"O que você precisaria que eu fizesse para reduzir seu ciúme?",
"Você se sentiria bem com experiências apenas emocionais, sem contato físico?",
"Quais combinados você considera indispensáveis para não machucar o outro?",
"Como você se sentiria se eu compartilhasse meus desejos por outra pessoa com você?",
"O que te faria sentir que estamos mantendo respeito e conexão?",
"Você acredita que é possível se envolver emocionalmente com outros sem prejudicar nossa relação?",
"Tem alguma situação hipotética que já te incomodaria antes mesmo de acontecer?",
"Como você lidaria se eu me sentisse atraído(a) por alguém fora da relação?",
"O que te ajuda a confiar no outro mesmo em situações delicadas?",
"Você prefere saber tudo ou apenas o que for relevante?",
"Quais tipos de envolvimento você consideraria aceitáveis ou inaceitáveis?",
"Você se sentiria mais seguro(a) se existissem limites físicos, emocionais ou ambos?",
"O que você imagina que seria o mais difícil de lidar em um modelo aberto?",
"Você acredita que nós conseguiríamos manter nossa intimidade mesmo com outras relações?",
"Como você gostaria que conversássemos sobre novas atrações?",
"O que você acha que nos ajudaria a evitar mágoas e mal-entendidos?",
"Tem algo que você precisaria que eu prometesse ou garantisse?",
"Você se sentiria confortável se encontros acontecessem sem detalhes?",
"O que te faria sentir traído(a) emocionalmente ou fisicamente?",
"Você acredita que seria mais desafiador lidar com ciúmes ou com inseguranças?",
"O que seria necessário para que você sentisse liberdade e segurança ao mesmo tempo?",
"Quais experiências você gostaria de explorar comigo antes de envolver outras pessoas?",
"Você acha que temos compatibilidade suficiente para discutir isso abertamente?",
"O que você precisaria para se sentir emocionalmente protegido(a) em um acordo assim?",
"Você acredita que a honestidade seria suficiente para manter a relação saudável?",
"Como você lida com fantasias sobre outras pessoas dentro do relacionamento?",
"Você se sentiria mais confortável com limites curtos ou metas a longo prazo?",
"O que te ajudaria a lidar com momentos de ciúmes inesperados?",
"Você acredita que é possível sentir desejo por outros e ainda valorizar nossa relação?",
"Como você acha que definiríamos juntos nossas regras e acordos?",
"O que te faria querer desistir de experimentar a não monogamia?",
"Quais comportamentos ou atitudes de minha parte reforçariam sua confiança nesse modelo?"
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
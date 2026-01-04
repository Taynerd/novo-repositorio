const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Como você se sente em relação ao seu corpo atualmente?",
"O que te faz sentir mais confiante no seu dia a dia?",
"Tem algum hábito que você gostaria de adotar para se sentir melhor fisicamente?",
"Como você cuida da sua saúde mental?",
"O que te ajuda a se sentir mais energizado(a) e motivado(a)?",
"Qual atividade física te faz sentir mais feliz?",
"Tem algo que você evita por medo de se sentir julgado(a)?",
"O que eu posso fazer para te incentivar a se cuidar mais?",
"Como você se sente quando recebe elogios sinceros?",
"O que te faz sentir bem emocionalmente com você mesmo(a)?",
"Você se sente confortável em pedir ajuda quando está sobrecarregado(a)?",
"Qual é o hábito que mais te ajuda a se manter saudável?",
"Como você lida com momentos de estresse?",
"O que te faz sentir mais bonito(a) ou atraente?",
"Você se sente orgulhoso(a) de suas conquistas pessoais?",
"Tem algo que você gostaria de mudar no seu estilo de vida?",
"O que te faz sentir mais confiante na nossa relação?",
"Você se sente confortável com sua imagem corporal?",
"Quais práticas de autocuidado você considera essenciais?",
"O que mais te motiva a cuidar de si mesmo(a)?",
"Como você gosta que eu demonstre admiração por você?",
"Você acredita que autoestima influencia nossa intimidade?",
"Tem algo que você gostaria que a gente fizesse juntos para cuidar da saúde?",
"Como você lida com críticas sobre aparência ou hábitos?",
"Qual é a sua maior conquista em relação à sua saúde até hoje?",
"O que te faz sentir mais seguro(a) emocionalmente?",
"Você se sente apoiado(a) quando fala sobre seus medos ou inseguranças?",
"Como você se sente ao tentar algo novo que desafia seu corpo ou mente?",
"Tem alguma rotina que você considera essencial para se sentir bem?",
"Como você lida com a pressão social sobre aparência ou desempenho?",
"Qual é o hábito que mais te dá sensação de bem-estar?",
"Você se sente confortável ao expressar suas emoções comigo?",
"O que te faz sentir mais feliz com sua própria companhia?",
"Você acha que nos incentivamos mutuamente a sermos mais saudáveis?",
"Como você gosta de equilibrar lazer e cuidados pessoais?",
"O que te ajuda a se sentir mais confiante antes de sair de casa?",
"Você tem algum ritual diário que te ajuda a se sentir bem?",
"O que você mais valoriza em relação ao seu corpo ou mente?",
"Como você lida com comparações com outras pessoas?",
"Você se sente confortável falando sobre suas metas de saúde e bem-estar?",
"Tem algo que eu possa fazer para ajudar na sua autoestima?",
"Qual é a sensação que mais te faz se sentir vivo(a) e saudável?",
"Você gosta de celebrar pequenas vitórias pessoais ou só grandes conquistas?",
"Você acredita que nossa relação impacta sua autoestima?",
"Tem algo que você gostaria de mudar na forma como se vê?",
"Como você se sente ao cuidar de você mesmo(a) e da sua saúde?",
"Você se sente confiante ao assumir suas escolhas e decisões?",
"Qual prática de autocuidado você gostaria de explorar comigo?",
"Você sente que nossa relação contribui para seu bem-estar físico e emocional?",
"Como você se inspira para cuidar de si mesmo(a) diariamente?",
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
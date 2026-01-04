const expanded = document.getElementById('cardExpanded');
const overlay = document.getElementById('overlay');
let isOpen = false;

const textos = [
"Existe alguma dor do passado que você ainda carrega?",
"Como posso te ajudar a se sentir mais seguro(a)?",
"Você já foi muito ferido(a) em outro relacionamento?",
"Tem algo que você evita por medo de se machucar?",
"Você consegue confiar com facilidade? Por quê?",
"Tem alguma situação que ainda precisa de cura?",
"Como lida com sentimentos difíceis no relacionamento?",
"O que mais te magoou em um relacionamento anterior?",
"Qual sua maior insegurança em um relacionamento?",
"O que te ajuda a superar frustrações emocionais?",
"Tem algo do seu passado que ainda te afeta emocionalmente?",
"Qual foi a maior decepção que te ensinou algo importante?",
"Você sente que já conseguiu perdoar as pessoas que te feriram?",
"Tem alguma situação que você evita lembrar por medo de se machucar de novo?",
"O que te ajuda a se curar quando algo te magoa profundamente?",
"Você tem facilidade ou dificuldade em confiar depois de se decepcionar?",
"Qual foi o momento da sua vida em que você se sentiu mais sozinho(a)?",
"Tem algo que te marcou e mudou a forma como você enxerga o amor?",
"Como você costuma reagir quando alguém te magoa?",
"Você se lembra de um momento em que sentiu que perdeu a confiança em alguém?",
"O que te faz se sentir seguro(a) depois de uma decepção?",
"Você já sentiu medo de se abrir por causa de experiências passadas?",
"Tem algo que eu faço que sem querer te lembra uma dor antiga?",
"Qual foi a maior lição que você aprendeu com as suas feridas emocionais?",
"Você se considera uma pessoa que guarda mágoas ou que consegue deixar ir?",
"O que significa perdão pra você?",
"Tem algum trauma que você ainda está aprendendo a lidar?",
"Você acredita que o tempo cura tudo ou que algumas dores apenas ensinam a conviver?",
"Como posso te apoiar quando algo do passado te atinge novamente?",
"Você sente que já se curou das decepções amorosas anteriores?",
"Qual foi o momento em que você mais precisou de apoio e não teve?",
"Você já teve medo de ser rejeitado(a)?",
"Como você se sente quando alguém te decepciona profundamente?",
"Você acha que as decepções te tornaram mais forte ou mais cauteloso(a)?",
"Tem algo que você gostaria que eu entendesse melhor sobre o que já viveu?",
"Você já se sentiu insuficiente por causa de algo que alguém te fez acreditar?",
"O que te ajuda a recuperar a fé nas pessoas?",
"Tem alguma lembrança dolorosa que você transformou em aprendizado?",
"Você acha que fala com facilidade sobre o que te machuca?",
"Como você reage quando alguém ultrapassa seus limites emocionais?",
"Tem algo que você gostaria que nunca mais se repetisse na sua vida?",
"Você já se decepcionou com alguém que amava profundamente?",
"O que te faz perder a confiança em uma relação?",
"Você sente que consegue identificar quando algo te desperta um trauma?",
"Tem algo que você gostaria que eu evitasse fazer ou dizer para não te ferir?",
"Como você percebe que está começando a se fechar emocionalmente?",
"O que mais te dói: ser ignorado(a) ou ser mal compreendido(a)?",
"Você acredita que os traumas mudam a forma como a gente ama?",
"Tem algo que você ainda não conseguiu perdoar em si mesmo(a)?",
"Você já sentiu culpa por algo que não foi sua responsabilidade?",
"Qual foi o maior medo que nasceu de uma decepção?",
"O que te faz sentir acolhido(a) quando está vulnerável?",
"Você acredita que eu te ajudo a se sentir mais seguro(a) emocionalmente?",
"Tem algo do passado que ainda influencia a forma como você reage hoje?",
"Qual foi a situação mais difícil que você já superou emocionalmente?",
"Você sente que consegue confiar em mim com suas dores?",
"Como você gostaria que eu agisse quando algo do passado te incomodar?",
"Tem algo que você ainda gostaria de perdoar, mas não consegue?",
"O que você aprendeu sobre si mesmo(a) com as decepções que viveu?",
"Você acredita que é possível transformar dor em crescimento?",
"Qual é o tipo de apoio que você mais precisa quando revive algo doloroso?"
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
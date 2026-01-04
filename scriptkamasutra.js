const img = [
'<img src="fotos-kama-sutra/1-Bicicleta-300x240.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/2-Cara-a-cara-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/3-O-plugue-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/4-O-cachorro-300x169 (1).jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/5-Pequena-colher-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/6-69-em-ponte-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/7-O-gato-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/8-A-cascata-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/9-Uma-subida-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/10-Cow-Girl-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/11-Cadeira-quente-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/12-No-topo-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/13-Caminho-para-o-céu-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/14-Vaqueira-invertida-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/15-posição-do-varão-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/16-O-preguiçoso-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/17-David-Copperfield-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/18-O-trono-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/19-Fechar-o-negócio-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/20-Pretzel-300x225.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/21-A-estante-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/22-o-G-300x178.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/23-Cão-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/24-Manteiga-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/25-A-bailarina-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/26-o-chef-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/27-H20-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/28-Carrinho-de-mão-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/29-Carrinho-de-mão-sentado-300x240.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/30-o-dragão-234x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/31-Serviço-de-quarto-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/32-Surfista-241x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/33-Solução-rápida-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/34-Mountain-Climber-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/35-Missionário-viciado-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/36-Missionário-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/37-Conchinha-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/38-Spork-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/39-Presente-embrulhado-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/40-Conchinha-cara-a-cara-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/41-o-X-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/42-anjinho-na-neve-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/43-Fusão-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/44-A-aranha-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/45-Mariposa-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/46-69-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/47-Libélula-300x169.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/48-O-elevador-169x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/49-Torpedo-Suiço-215x300.jpeg" style="max-width:100%; height:auto;">',
'<img src="fotos-kama-sutra/50-O-estandarte-184x300.jpeg" style="max-width:100%; height:auto;">',
];

const opcoes = document.querySelectorAll(".option");
const overlay = document.getElementById("overlay");
const perguntaExpandida = document.getElementById("perguntaExpandida");
const fecharBtn = document.getElementById("fechar");

opcoes.forEach(opcao => {
  opcao.addEventListener("click", () => {
    const index = parseInt(opcao.dataset.index);
    perguntaExpandida.innerHTML = img[index]; // exibe texto ou HTML
    overlay.classList.remove("hidden");
  });
});
fecharBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
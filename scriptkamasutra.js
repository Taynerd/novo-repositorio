document.querySelectorAll(".option").forEach(card => {
  const canvas = card.querySelector(".scratch");
  const img = card.querySelector(".conteudo");
  const ctx = canvas.getContext("2d");

  let expanded = false;

  function setup() {
    canvas.width = card.offsetWidth;
    canvas.height = card.offsetHeight;

    ctx.fillStyle = "#5a0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255,255,255,.6)";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Raspe aqui", canvas.width / 2, canvas.height / 2);
  }

  setup();
  window.addEventListener("resize", setup);

  let isDrawing = false;

  function scratch(x, y) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
    checkProgress();
  }

  function checkProgress() {
    if (expanded) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }

    const percent = transparent / (imageData.data.length / 4);

    if (percent > 0.3) {
      expanded = true;
      abrirImagem();
    }
  }

  function abrirImagem() {
    canvas.remove();

    const overlay = document.getElementById("overlay");
    const imgBig = document.getElementById("imagemExpandida");

    imgBig.src = img.src;
    overlay.classList.add("active");

    overlay.onclick = () => overlay.classList.remove("active");
  }

  canvas.addEventListener("pointerdown", () => isDrawing = true);
  canvas.addEventListener("pointerup", () => isDrawing = false);
  canvas.addEventListener("pointerleave", () => isDrawing = false);

  canvas.addEventListener("pointermove", e => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  });
});

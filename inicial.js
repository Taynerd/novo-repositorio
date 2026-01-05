const menuBtn = document.getElementById("menu");
const areaMenu = document.getElementById("area-menu");
const overlay = document.getElementById("menu-overlay");

// abrir / fechar menu
menuBtn.addEventListener("click", () => {
  areaMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// fechar ao clicar fora
overlay.addEventListener("click", fecharMenu);

// fechar ao clicar em link
document.querySelectorAll(".area-menu a").forEach(link => {
  link.addEventListener("click", fecharMenu);
});

function fecharMenu() {
  areaMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// REMOVE ELASTIC SCROLL NO IOS
document.addEventListener(
  'touchmove',
  (e) => {
    if (areaMenu.classList.contains('active')) {
      if (!e.target.closest('.area-menu')) {
        e.preventDefault();
      }
    }
  },
  { passive: false }
);
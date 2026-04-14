const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

function toggleMenu() {
    const isOpen = !menu.classList.contains('translate-y-[-100%]');

    if (!isOpen) {
        menu.classList.remove('translate-y-[-100%]', 'opacity-0');
        menu.classList.add('translate-y-0', 'opacity-100');

        line1.classList.add('rotate-45', 'translate-y-[8px]');
        line2.classList.add('opacity-0');
        line3.classList.add('-rotate-45', '-translate-y-[8px]');

        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.add('translate-y-[-100%]', 'opacity-0');
        menu.classList.remove('translate-y-0', 'opacity-100');

        line1.classList.remove('rotate-45', 'translate-y-[8px]');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-[8px]');

        document.body.style.overflow = 'auto';
    }
}

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scroll pra baixo → esconder navbar
    navbar.classList.add("-translate-y-full");
  } else {
    // Scroll pra cima → mostrar navbar
    navbar.classList.remove("-translate-y-full");
  }

  lastScroll = currentScroll;
});

const botaoCurriculo = document.getElementById("btn-curriculo")
botaoCurriculo.addEventListener("click", baixarCurriculo)

function baixarCurriculo() {
  const link = document.createElement("a");
  link.href = "./assets/Curriculo_NicolasGerbes.pdf";
  link.download = "Curriculo-NicolasGerbes.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

btn.addEventListener('click', toggleMenu);
links.forEach(link => link.addEventListener('click', toggleMenu));
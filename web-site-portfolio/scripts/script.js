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
            line1.classList.add('rotate-45', 'translate-y-[4px]');
            line2.classList.add('-rotate-45', '-translate-y-[4px]', '-mt-0.5');
            line3.classList.add('-rotate-45', '-translate-y-[8px]');
            document.body.style.overflow = 'hidden';
        } else {
            // Fechando
            menu.classList.add('translate-y-[-100%]', 'opacity-0');
            menu.classList.remove('translate-y-0', 'opacity-100');

            line1.classList.remove('rotate-45', 'translate-y-[8px]');
            line2.classList.remove('opacity-0', 'scale-x-0');
            line3.classList.remove('-rotate-45', '-translate-y-[8px]');
            document.body.style.overflow = 'auto';
        }
    }

    btn.addEventListener('click', toggleMenu);
    links.forEach(link => link.addEventListener('click', toggleMenu));
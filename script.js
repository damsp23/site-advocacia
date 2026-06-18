
(function() {
  const phone = '5511940516232';
  const navToggle = document.querySelector('.nav-toggle');
  const topNav = document.querySelector('.top-nav');
  if (navToggle && topNav) {
    navToggle.addEventListener('click', () => {
      const open = topNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('.sidebar-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const links = button.parentElement.querySelector('.sidebar-links');
      if (!links) return;
      const open = links.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Ocultar temas trabalhistas' : 'Ver temas trabalhistas';
    });
  });
  const form = document.getElementById('whatsappForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const nome = (data.get('nome') || '').toString().trim();
      const telefone = (data.get('telefone') || '').toString().trim();
      const tema = (data.get('tema') || '').toString().trim();
      const mensagem = (data.get('mensagem') || '').toString().trim();
      const text = `Olá, Dr. Diogo. Vim pelo site e gostaria de atendimento trabalhista.%0A%0ANome: ${nome}%0ATelefone: ${telefone}%0ATema: ${tema}%0AResumo: ${mensagem}`;
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
    });
  }
})();

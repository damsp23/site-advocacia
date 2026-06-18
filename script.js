
const railToggle = document.querySelector('.rail-toggle');
const railMenu = document.querySelector('.rail-menu');
if (railToggle && railMenu) {
  railToggle.addEventListener('click', () => {
    const open = railMenu.classList.toggle('open');
    railToggle.setAttribute('aria-expanded', String(open));
  });
}
const form = document.getElementById('whatsapp-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nome = data.get('nome') || '';
    const telefone = data.get('telefone') || '';
    const tema = data.get('tema') || '';
    const resumo = data.get('resumo') || '';
    const message = `Olá, Dr. Diogo. Vim pelo site e gostaria de atendimento trabalhista.

Nome: ${nome}
Telefone: ${telefone}
Tema: ${tema}
Resumo: ${resumo}`;
    window.open(`https://wa.me/5511940516232?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}

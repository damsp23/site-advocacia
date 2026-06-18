
const topicButton = document.querySelector('.mobile-topic-button');
const topicMenu = document.querySelector('.sidebar-nav');

if (topicButton && topicMenu) {
  topicButton.addEventListener('click', () => {
    const opened = topicMenu.classList.toggle('open');
    topicButton.setAttribute('aria-expanded', String(opened));
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

    const mensagem = [
      'Olá, Dr. Diogo. Vim pelo site e gostaria de atendimento trabalhista.',
      '',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Tema: ${tema}`,
      `Resumo: ${resumo}`
    ].join('\n');

    window.open(`https://wa.me/5511940516232?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
  });
}

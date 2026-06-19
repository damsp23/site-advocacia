const visualAssets = [
  ['--logo-dark', 'assets/logo-sidebar.b64', 'image/webp'],
  ['--monogram', 'assets/logo-mark.b64', 'image/webp'],
  ['--crest', 'assets/crest.b64', 'image/webp'],
  ['--texture', 'assets/bg-texture.b64', 'image/webp'],
  ['--lawyer', 'assets/hero-lawyer.b64', 'image/webp']
];
const scriptBase = new URL('.', document.currentScript.src);
visualAssets.forEach(([cssVar, file, mime]) => {
  fetch(new URL(file, scriptBase))
    .then((response) => response.ok ? response.text() : '')
    .then((content) => {
      const payload = content.replace(/\s+/g, '');
      if (payload) {
        document.documentElement.style.setProperty(cssVar, `url("data:${mime};base64,${payload}")`);
      }
    })
    .catch(() => {});
});

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
    const mensagem = [
      'Olá, Dr. Diogo. Vim pelo site e gostaria de atendimento trabalhista.',
      '',
      `Nome: ${data.get('nome') || ''}`,
      `Telefone: ${data.get('telefone') || ''}`,
      `Tema: ${data.get('tema') || ''}`,
      `Resumo: ${data.get('resumo') || ''}`
    ].join('\n');
    window.open(`https://wa.me/5511940516232?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
  });
}

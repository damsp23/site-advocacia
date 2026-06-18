const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const form = document.getElementById('caseForm');

year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = String(data.get('nome') || '').trim();
  const telefone = String(data.get('telefone') || '').trim();
  const situacao = String(data.get('situacao') || '').trim();
  const resumo = String(data.get('resumo') || '').trim();

  const message = [
    'Olá, Dr. Diogo. Gostaria de enviar um caso trabalhista para análise.',
    '',
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Situação principal: ${situacao}`,
    '',
    `Resumo: ${resumo}`,
    '',
    'Tenho ciência de que o envio destas informações não garante resultado e não substitui contratação formal.'
  ].join('\n');

  const url = `https://wa.me/5511966442294?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

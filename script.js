const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#estimate-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const subject = `Estimate Request - ${fields.get('service')}`;
  const body = `Name: ${fields.get('name')}\nContact: ${fields.get('contact')}\nService: ${fields.get('service')}\n\nProject details:\n${fields.get('details')}`;
  window.location.href = `mailto:montesworksllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

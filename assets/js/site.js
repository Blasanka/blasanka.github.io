const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');
if (button && navigation) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    navigation.toggleAttribute('data-open', !open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) {
      button.setAttribute('aria-expanded', 'false');
      navigation.removeAttribute('data-open');
    }
  });
}
document.querySelectorAll('[data-current-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });

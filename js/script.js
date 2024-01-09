// seleção dos elementos-----------------------------------
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// eventos-------------------------------------------------
btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
// funções-------------------------------------------------

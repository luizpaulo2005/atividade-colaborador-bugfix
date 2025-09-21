'use strict';

const state = { items: [] };

function render(){
  const ul = document.getElementById('list');
  ul.innerHTML = '';
  state.items.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    ul.appendChild(li);
  });
}

function setup(){
  const form = document.getElementById('form');
  const input = document.getElementById('item');
  const toggle = document.getElementById('toggle-theme');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = (input.value||'').trim();
    if(!v) return;
    state.items.push(v);
    input.value = '';
    render();
  });

  // placeholder; features/bugfixes irão aqui
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
    if (e.key === 'Escape') {
      input.value = '';
      input.blur();
    }
  });
  const applyTheme = (mode) => {
    document.body.classList.toggle('light', mode === 'light');
  };
  const saved = localStorage.getItem('atv3.theme');
  if (saved) applyTheme(saved);
  toggle.addEventListener('click', () => {
    const mode = document.body.classList.contains('light') ? 'dark' : 'light';
    applyTheme(mode);
    localStorage.setItem('atv3.theme', mode);
  });
}

document.addEventListener('DOMContentLoaded', setup);

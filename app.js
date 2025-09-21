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
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}

document.addEventListener('DOMContentLoaded', setup);

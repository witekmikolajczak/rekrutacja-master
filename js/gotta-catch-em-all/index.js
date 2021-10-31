'use strict';

const pokemonsContainer = document.querySelector('.pokemons');
const nameInput = document.getElementById('pokemon-name');

// Renderowanie pokemonow na starcie
window.onload = () => {
  for (let i = 0; i < pokemons.length; i++) {
    let div = document.createElement('div');
    let img = new Image();

    div.className = 'container';
    img.src = pokemons[i].image;

    div.innerHTML +=
      '<img src ="' +
      img.src +
      '"/>' +
      '<figcaption>' +
      pokemons[i].name +
      '</figcaption';
    pokemonsContainer.appendChild(div);
  }
};

//Renderowanie pokemona wpisanego w inputa
function renderPokemons(pokemon) {
  // Kiedy pole input jest puste, pokedex wraca do pierwotnej postaci
  nameInput.addEventListener('change', (event) => {
    if (event.target.value == '') {
      for (let i = 0; i < pokemons.length; i++) {
        let getContainers = document.getElementsByClassName('container')[0];
        getContainers.remove();
      }
      window.onload();
    }
  });

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemon == pokemons[i].name.toUpperCase()) {
      let getContainers = document.getElementsByClassName('container');
      for (let j = 0; j < getContainers.length; j++) {
        getContainers[j].style.display = 'none';
      }
      let div = document.createElement('div');
      let img = new Image();

      div.className = 'container';
      img.src = pokemons[i].image;

      div.innerHTML +=
        '<img src ="' +
        img.src +
        '"/>' +
        '<figcaption>' +
        pokemons[i].name +
        '</figcaption';
      pokemonsContainer.appendChild(div);
    }
  }
}

// Filtrowanie po nazwie pokemonów
function filterPokemons(pokemons) {
  let nameInput = document.getElementById('pokemon-name');
  let filter = nameInput.value.toUpperCase();

  for (let i = 0; i < pokemons.length; i++) {
    if (filter == pokemons[i].name.toUpperCase()) {
      let pokemonName = pokemons[i].name.toUpperCase();
      return pokemonName;
    }
  }
}

// filterPokemons(pokemons);
const form = document.querySelector('form');

function submitForm(event) {
  event.preventDefault();
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener('submit', submitForm);

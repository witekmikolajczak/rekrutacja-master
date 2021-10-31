let turn = 'x';
let symbols = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const board = document.querySelector('.board');
const reset = document.querySelector('.reset');
const tiles = Array.from(document.querySelectorAll('.tile'));

board.addEventListener('click', ({ target }) => {
  const classes = Array.from(target.classList);

  if (classes.includes('tile') && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);

  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === 'x' ? 'o' : 'x';

  displayTurn(turn);
  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  let a = document.querySelector('h1');
  const newItem = document.createElement('h1');
  newItem.className = 'turn';
  newItem.innerHTML = turn.toUpperCase() + ' turn';

  a.parentNode.replaceChild(newItem, a);

  return a;
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  for (let i = 0; i < symbols.length; i++) {
    if (
      (symbols[i][0] == symbols[i][1]) &
      (symbols[i][0] == symbols[i][2]) &
      (symbols[i][0] != '')
    ) {
      alert('winner is: ' + symbols[i][0]);
      break;
    }

    if (
      (symbols[0][i] == symbols[1][i]) &
      (symbols[0][i] == symbols[2][i]) &
      (symbols[0][i] != '')
    ) {
      alert('winner is: ' + symbols[0][i]);
      break;
    }
    if (
      (symbols[0][0] == symbols[1][1]) &
      (symbols[0][0] == symbols[2][2]) &
      (symbols[0][0] != '')
    ) {
      alert('winner is: ' + symbols[0][0]);
      break;
    }

    if (
      (symbols[2][0] == symbols[1][1]) &
      (symbols[2][0] == symbols[0][2]) &
      (symbols[2][0] != '')
    ) {
      alert('winner is: ' + symbols[2][0]);
      break;
    }
  }
}
// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
reset.addEventListener('click', () => {
  for (let i = 0; i < tiles.length; i++) {
    for (let x = 0; x < symbols.length; x++) {
      for (let y = 0; y < symbols.length; y++) {
        symbols[x][y] = '';
      }
    }
    tiles[i].classList.remove(`tile-x`, `tile-o`);
  }
});

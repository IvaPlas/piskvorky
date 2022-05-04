console.log('frcim');
const buttons = document.querySelectorAll('.playground_button');

let naTahuJe = 'circle';
const move = (ev) => {
  console.log('Na tahu je : ', naTahuJe);
  if (naTahuJe === 'circle') {
    ev.target.classList.add('playground_button--circle');
    document.querySelector('#pictogram').src = 'images/cross.svg';
    naTahuJe = 'cross';
    ev.target.disabled = true;
  } else if (naTahuJe === 'cross') {
    ev.target.classList.add('playground_button--cross');
    document.querySelector('#pictogram').src = 'images/circle.svg';
    naTahuJe = 'circle';
    ev.target.disabled = true;
  }
  console.log(isWinningMove(ev.target));
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}

const getSymbol = (button) => {
  if (button.classList.contains('playground_button--circle')) {
    return 'circle';
  } else if (button.classList.contains('playground_button--cross')) {
    return 'cross';
  }
};

// const prvniPolicko = buttons[0];
// const symbolNaPrvnimPolicku = getSymbol(prvniPolicko);
// console.log(symbolNaPrvnimPolicku);

const boardsize = 10;
const getButton = (row, column) => {
  return buttons[row * boardsize + column];
};

console.log(getButton(1, 2));

const getPosition = (button) => {
  let index = 0;
  while (index < buttons.length && button !== buttons[index]) {
    index++;
  }
  return {
    row: Math.floor(index / boardsize),
    column: index % boardsize,
  };
};

console.log(getPosition(buttons[52]));

const symbolsToWin = 5;
const isWinningMove = (button) => {
  const origin = getPosition(button);
  const symbol = getSymbol(button);

  let winner;
  if (symbol === 'cross') {
    winner = 'křižek';
  } else {
    winner = 'kroužek';
  }
  const winnerIs = () => {
    alert(`Vyhrál ${winner}`);
  };

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getButton(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardsize - 1 &&
    symbol === getSymbol(getButton(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return setTimeout(winnerIs, 400);
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getButton(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardsize - 1 &&
    symbol === getSymbol(getButton(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return setTimeout(winnerIs, 400);
  }

  return false;
};

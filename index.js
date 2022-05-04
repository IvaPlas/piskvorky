console.log('frcim');

let naTahuJe = 'circle';
const addClass = (ev) => {
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
};

const buttons = document.querySelectorAll('.playground_button');
const playground = document.querySelector('.playground');

const getSymbol = (buttons) => {
  if (buttons.classList.contains('playground_button--circle')) {
    return 'circle';
  } else if (buttons.classList.contains('playground_button--cross')) {
    return 'cross';
  }
};

const boardsize = 10;
const getButton = (row, column) => {
  return buttons[row * boardsize + column];
};

const getPosition = (buttons) => {
  let index = 0;
  while (index < playground.length && buttons !== playground[index]) {
    index++;
  }
  return {
    row: Math.floor(index / boardsize),
    column: index % boardsize,
  };
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', addClass);
  buttons[i].addEventListener('click', getButton);
  buttons[i].addEventListener('click', getPosition);
}

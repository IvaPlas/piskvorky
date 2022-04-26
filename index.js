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
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', addClass);
}

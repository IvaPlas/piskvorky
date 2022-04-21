console.log('frcim');

let naTahuJe = 'circle';
const addClass = (ev) => {
  // ev = click event
  // target - identifies which button was clicked
  // classList.add adds cross / circle
  if (ev.target.disabled === true) {
    return null;
  }
  console.log('Na tahu je : ', naTahuJe);
  if (naTahuJe === 'circle') {
    ev.target.classList.add('playground_button--circle');
    document.querySelector('#pictogram').src = 'images/circle.svg';
    naTahuJe = 'cross';
    ev.target.disabled = true;
  } else if (naTahuJe === 'cross') {
    ev.target.classList.add('playground_button--cross');
    document.querySelector('#pictogram').src = 'images/cross.svg';
    naTahuJe = 'circle';
    ev.target.disabled = true;
  }
  console.log(ev.target.disabled);
};

const buttons = document.querySelectorAll('.playground_button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', addClass);
}

console.log('frcim');

let naTahuJe = 'circle';

const addClass = (ev) => {
  ev.target.classList.add('playground_button--circle');
};

const buttons = document.querySelectorAll('.playground_button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', addClass);
}

// Light on off program
let light = document.querySelector('.light');
let yellow_button = document.querySelector('.yellow_button');

let fog = 0;

yellow_button.addEventListener('click', () => {
  if (fog === 0) {
    light.style.backgroundColor = 'yellow';
    fog = 1;
  } else {
    light.style.backgroundColor = 'transparent';
    fog = 0;
  }
})
let hedding1 = document.querySelector('h1');
// hedding1.addEventListener('click', () => {
//   hedding1.classList.add('my-style');
// })
hedding1.addEventListener('mouseover', () => {
  hedding1.classList.add('my-style');
})
hedding1.addEventListener('mouseout', () => {
  hedding1.classList.remove('my-style');
})

let myButton = document.querySelectorAll('.mybutton').length;



for (let i = 0; i < myButton; i++) {
  document.querySelectorAll('.mybutton')[i].addEventListener('click', function () {
    let taxe = this.innerHTML;
    document.querySelector('#jahir').innerHTML = `${taxe} is clicked.`;
  });

}

for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".mybutton")[i].addEventListener("click", function () {
    let text = this.innerHTML;
    console.log(text);
  });

}

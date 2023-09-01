const listItem = document.getElementsByClassName('list-item');

// console.log(listItem);

let array1 = Array.from(listItem);
// console.log(array1);

array1.forEach((item) => {
  item.style.color = 'red';
  item.style.margin = '10px';
  item.style.padding = '15px';
  item.style.backgroundColor = '#FFF';
  item.style.fontSize = '30px';
  item.style.listStyle = 'none';
})


const parent = document.querySelector('.parent');

// console.log(parent);
// console.log(parent.children);

for (let i = 0; i < parent.children.length; i++) {
  parent.children[i].style.color = 'red';
  parent.children[i].style.margin = '10px';
  parent.children[i].style.padding = '15px';
  parent.children[i].style.backgroundColor = '#FFF';
  parent.children[i].style.fontSize = '30px';
  parent.children[i].style.listStyle = 'none';
}

const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
dayOne.nextElementSibling.style.fontSize = '50px';
dayOne.nextElementSibling.style.color = '#000';


// create a new element in DOM 
function adddiv(idName, className, Text) {
  const div = document.createElement('div');
  div.setAttribute('class', className);
  div.setAttribute('id', idName);
  let divText = document.createTextNode(Text);
  div.appendChild(divText);
  document.body.appendChild(div);
  div.style.margin = '60px';
  div.style.padding = '10px';
  div.style.color = 'red';
  div.style.fontSize = '40px';
  div.style.backgroundColor = '#fff';
}
adddiv('hello', 'hi', 'I love Bangladesh.');
adddiv('helloo', 'hii', 'I love My contry.');
// console.log(div.innerHTML);

let ul = document.createElement('ul');
function addListItem(text) {
  let li = document.createElement('li');
  let divText = document.createTextNode(text);
  li.appendChild(divText);
  ul.appendChild(li);
  document.body.appendChild(ul);
  ul.style.listStyle = 'none';
  li.style.margin = '60px';
  li.style.padding = '10px';
  li.style.color = '#000';
  li.style.fontSize = '40px';
  li.style.backgroundColor = 'yellow';
}
addListItem('1 Jahir');
addListItem('2 Mijan');
addListItem('3 Arif');


function heading(tagName, text) {
  const headding = document.createElement(tagName);
  const addTexxt = document.createTextNode(text);
  headding.appendChild(addTexxt);
  document.body.appendChild(headding);
  headding.style.textAlign = 'center';
  headding.style.fontSize = '30px';
  headding.style.color = 'yellow';
}

heading('h1', 'I love My country.');
heading('p', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor cum aspernatur dicta dolorum fugiat suscipit tempore, nostrum obcaecati nisi error totam magnam omnis, neque molestias quod eius maiores at?');


let flex = document.createElement('div');
let h2 = document.createElement('h2');
let h21 = document.createElement('h2');
h2.innerHTML = 'Jahir';
h21.innerHTML = 'Mijan';
flex.appendChild(h2);
flex.appendChild(h21);
document.body.appendChild(flex);
flex.style.display = 'flex';
flex.style.justifyContent = 'space-between';
flex.style.margin = '50px auto';
flex.style.width = '800px';
flex.style.alignItems = 'center';

let lang = document.querySelector('.language');
function language(text) {
  let li = document.createElement('li');
  li.innerHTML = text;
  lang.appendChild(li);

}
language('Pythn');
language('Java');
language('C++');
language('C');
language('Rubi');
language('R');


// optimage way te html Element add 

function addOptiLanguage(langName) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(langName));
  document.querySelector('.language').appendChild(li);
}
addOptiLanguage('jahir');

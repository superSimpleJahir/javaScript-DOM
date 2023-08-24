const ullicolor = document.querySelector('li:first-child');

ullicolor.style.backgroundColor = 'red';
ullicolor.style.padding = '20px';


const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);

}

function addLanguage(lanName) {
  const li = document.createElement('li');
  li.innerHTML = `${lanName}`;
  document.querySelector('.language').appendChild(li);
}
addLanguage('Python');
addLanguage('typescript');
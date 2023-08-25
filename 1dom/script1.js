let message = document.querySelector('#hading1');

function myMessage1() {
  message.innerHTML = '1 Number button click';
}
function myMessage2() {
  message.innerHTML = '2 Number button click';
}



let image = document.querySelector('#image');
function myImage1() {
  image.src = '../img/My project (1).png';
}
function myImage2() {
  image.src = '../img/My project-1 (7).jpg';
}


// creating html element 
let heading1 = document.createElement('h1');
let text = document.createTextNode('This is hadding 1 create by javascript.');
heading1.appendChild(text);

// find element for add h1 element 
let myDiv = document.querySelector('#mydiv');
// and h1 tag add #mydiv idr bitore 
myDiv.appendChild(heading1);

// create another element in javascript
let pragrap = document.createElement('p');
let addtext = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, non.');
pragrap.appendChild(addtext);
myDiv.appendChild(pragrap);

// remove element in javascript

let findh1element = document.querySelector('#mydiv h1');
console.log(findh1element);
findh1element.remove()
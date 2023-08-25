// Downwards -querySelector/querySelectorAll
const studentList = document.querySelector('.students_list');

const studentA = studentList.querySelector('.student_a');
studentA.innerHTML = 'Student One';

// all children select korar janne parent element ke select kore .children dile akta array return kore jar jonno index number use kore select korte hoi
const jahir = studentList.children[0];
// console.log(jahir);


// UpWards parentElemen
const studentOne = document.querySelector('li');
const studentlist = studentOne.parentElement;
const studentTwo = studentOne.nextElementSibling;
console.log(studentTwo);


// image slider in javascript

const imagearray = ["../img/img11.jpg", "../img/img22.jpg", "../img/img33.jpg", "../img/img44.jpg", "../img/img55.jpg", "../img/img77.jpg", "../img/img88.jpg"];

const imageTag = document.querySelector('#image');
let count = 0;
function next() {
  count++;
  if (count >= imagearray.length) {
    count = 0;
    imageTag.src = imagearray[count];
  }
  else {
    imageTag.src = imagearray[count];
  }
}
function prev() {
  count--;
  if (count < 0) {
    count = imagearray.length - 1;
    imageTag.src = imagearray[count];
  }
  else {
    imageTag.src = imagearray[count];
  }
}

// style add in javascript

let paragraph1 = document.querySelector('#para1');
let paragraph2 = document.querySelector('#pag2');
function addStyle() {
  paragraph1.classList.add('paragraph');
  paragraph2.classList.remove('paragraph');
}
function removeStyle() {
  paragraph1.classList.remove('paragraph');
  paragraph2.classList.add('paragraph');
}

function removeallStyle() {
  paragraph1.classList.remove('paragraph');
  paragraph2.classList.remove('paragraph');
}
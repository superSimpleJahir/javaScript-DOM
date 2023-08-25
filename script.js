// id selector hocche unick karon ai jonne id selecte korle sudu oi akta element kei select kore 
const idHading1 = document.getElementById("hading1");
idHading1.innerHTML = 'Hello i am Hadding1 and this is id selector';
idHading1.style.backgroundColor = "yellow";
idHading1.style.color = "#000";
idHading1.style.height = "50px";
idHading1.style.width = "700px";
idHading1.style.textAlign = "center";
idHading1.style.margin = "0px auto";
idHading1.style.paddingTop = "10px";
idHading1.style.borderRadius = "10px";

const idHading2 = document.getElementById("hading2");
idHading2.innerHTML = 'Hello i am Hadding2 and this is id selector';
idHading2.style.backgroundColor = "red";
idHading2.style.color = "#FFF";
idHading2.style.height = "50px";
idHading2.style.width = "700px";
idHading2.style.textAlign = "center";
idHading2.style.margin = "10px auto";
idHading2.style.paddingTop = "10px";
idHading2.style.borderRadius = "10px";

// class selector hocce, akti html file onek gula class thake jar karone class selector array return kore ai jonne index number dia selecte korte hoi 

let class1 = document.getElementsByClassName('had1')[0];
class1.innerHTML = "I am class selector in javascript hadding1";
class1.style.backgroundColor = "#212141";
class1.style.color = "#fff";
class1.style.height = "50px";
class1.style.width = "700px";
class1.style.textAlign = "center";
class1.style.margin = "10px auto";
class1.style.paddingTop = "10px";
class1.style.borderRadius = "10px";

let class2 = document.getElementsByClassName('had1')[1];
class2.innerHTML = "I am class selector in javascript hadding1";
class2.style.backgroundColor = "#223141";
class2.style.color = "green";
class2.style.height = "50px";
class2.style.width = "700px";
class2.style.textAlign = "center";
class2.style.margin = "10px auto";
class2.style.paddingTop = "10px";
class2.style.borderRadius = "10px";


// tagName selector atio getElementsByClassName ar mot kaj kore 
let tag1 = document.getElementsByTagName('h1')[2];
tag1.innerHTML = 'This is tagName1 selector in javascript';
tag1.style.backgroundColor = '#ddd';
tag1.style.color = '#000';
tag1.style.width = '680px';
tag1.style.padding = '10px';
tag1.style.margin = '10px auto';
tag1.style.borderRadius = '10px';
tag1.style.textAlign = 'center';

let tag2 = document.getElementsByTagName('h1')[3];
tag2.innerHTML = 'This is tagName2 selector in javascript';
tag2.style.backgroundColor = '#2d3d4d';
tag2.style.color = '#782f';
tag2.style.width = '680px';
tag2.style.padding = '10px';
tag2.style.margin = '10px auto';
tag2.style.borderRadius = '10px';
tag2.style.textAlign = 'center';

// querySelector in javascript
let selectorByquary = document.querySelector('a').innerHTML = 'This is select.';
let selectorByquary1 = document.querySelector('ul li:nth-child(2) a').innerHTML = 'This is select2.';
let selectorByquary2 = document.querySelector('.mydiv a').innerHTML = 'This is select3.';

// querySelectorAll in javascript atio getElementsByTagName getElementsByClassName ai selector gular moto ati NodeList return kore. ja akti arrayr moto akhaneo index number diye selecte korte hoi
let selectorByquary3 = document.querySelectorAll('a')[0].innerHTML = 'This is select3.';



// const ullicolor = document.querySelector('li:first-child');

// ullicolor.style.backgroundColor = 'red';
// ullicolor.style.padding = '20px';


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
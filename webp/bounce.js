let x = 0;
let y = 0;

let v;
let xv = 1;
let yv = 1;

let div = document.getElementById('container');
div.style.display = "flex";

let divWidth = div.offsetWidth;

function step(){
  rightBound = window.innerWidth-divWidth;
  bottomBound = window.innerHeight-div.offsetHeight;
  x=Math.min(x, rightBound);
  y=Math.min(y, bottomBound);

  v=rand();
  if(x+xv >= rightBound) xv = -v;
  if(y+yv >= bottomBound) yv = -v;
  if(x+xv <= 0) xv = v;
  if(y+yv <= 0) yv = v;

  x += xv;
  y += yv;
  placeDiv(x, y, div);
  window.requestAnimationFrame(step);
}

function placeDiv(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}

function rand(){
    return Math.sqrt(Math.random()*16 + 1) / 3;
}

function createBox(text){
  // create a new div element
  const box = document.createElement("div");
  const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  box.appendChild(newContent);
  box.classList.add("box");

  // add the newly created element and its content into the DOM
  document.body.appendChild(box);
}

window.requestAnimationFrame(step);

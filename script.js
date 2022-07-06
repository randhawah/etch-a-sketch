const container = document.getElementById("container");
var slider = document.getElementById("slider");
var sizeResult = document.getElementById("sizeResult");
var gridSize = 5;
var clearBtn = document.getElementById("clear");
//var test = document.querySelectorAll(".test");

window.onload = createGrid(gridSize);

/* This was a test case to test changing colors of multiple elements with same class
on mouseover.

for(let i=0; i<test.length; i++){
  test[i].addEventListener("mouseover", function(){
      test[i].style.setProperty('--boxColor', "black");
  }, false);
}
*/

function createGrid(size) {
  container.style.setProperty('--size', size);
  container.textContent = "";

  for (let i = 0; i < (size * size); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  var box = document.getElementsByClassName("grid-item");
  for(let i = 0; i<box.length; i++){
    box[i].addEventListener("mouseover", function(){
      box[i].style.setProperty('--boxColor', "black");
  }, false);
  }
};

slider.addEventListener("change", function(){
    gridSize = slider.value;
    sizeResult.textContent = slider.value+" X "+slider.value;
    createGrid(gridSize);
}, false);

clearBtn.addEventListener("click", function(){
  box = document.getElementsByClassName("grid-item");
  for(let i =0; i<box.length; i++)
    box[i].style.setProperty('--boxColor', "white");
}, false);
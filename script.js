const container = document.getElementById("container");
var slider = document.getElementById("slider");
var sizeResult = document.getElementById("sizeResult");
var rainbowBtn = document.getElementById("rainbow");
var input = document.getElementById('colorPicker');
var clearBtn = document.getElementById("clear");
var gridSize = 24;
var colorPicker = "black";
var rainbowTgl = false;

//creates a default grid of size 24X24
window.onload = createGrid(gridSize);

//creates the grid of 'size' and set the CSS Grid rows and columns to 'size'
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
      if(rainbowTgl)
        box[i].style.setProperty('--boxColor', createRainbow());
      else
        box[i].style.setProperty('--boxColor', colorPicker);
    }, false);
  }
};

slider.addEventListener("change", function(){
    gridSize = slider.value;
    sizeResult.textContent = slider.value+" X "+slider.value;
    createGrid(gridSize);
}, false);

function getData(color){
  container.style.setProperty('--colorPicker', color);
  if(rainbowTgl)rainbowToggle();
  colorPicker = color;
}

function rainbowToggle(){
  if(rainbowTgl == false){
    rainbowTgl = true;
    rainbowBtn.style.setProperty('--rainbow-btn-color', "green");
    rainbowBtn.innerText = 'Rainbow ON!';
    colorPicker = createRainbow();
  }
  else if(rainbowTgl == true){
    rainbowTgl = false;
    rainbowBtn.style.setProperty('--rainbow-btn-color', "red");
    rainbowBtn.innerText = 'Rainbow OFF!';
  }
}

function createRainbow(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

clearBtn.addEventListener("click", function(){
  box = document.getElementsByClassName("grid-item");
  for(let i =0; i<box.length; i++)
    box[i].style.setProperty('--boxColor', "white");
}, false);


// when you click the color picker, we'll run our code to close it after 2 seconds.
input.addEventListener('focus', function() {
  setTimeout(()=>{
    // toggle the type attribute to close the picker!
    input.setAttribute('type','text');
    input.setAttribute('type','color');
    
  }, 2000);
});
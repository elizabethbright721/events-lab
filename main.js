// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//Create variable that will contain each div with the class of color
const allColors = document.querySelectorAll("#palette div.color");

//Create variable that will contain the current color
const currentColor = document.querySelector("#current-color");

//loop through 'color' variable and add an event listener for each color that will change the background of the 'current-color' element to the clicked color

allColors.forEach((selectedColor) => {
  selectedColor.addEventListener("click", () => {
  currentColor.style.background = selectedColor.style.background; 
  });
});

//Create a variable that will contain each dive with the class of cell
const allCells = document.querySelectorAll(".cell")

//loop through 'gridColor' variable and add an event listener for each grid cell when each cell is click to change the color to the 'selectedColor' element

allCells.forEach((cell) => {
  cell.addEventListener("click" , (event) => {
  event.target.style.background = currentColor.style.background;
  })
  cell.addEventListener('dblclick', erase);
})

function erase(event) {
  event.target.style.background = "white"
}



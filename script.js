const grid = document.querySelector('#grid');
const color = document.querySelector('#colorMode');
const grayscale = document.querySelector('#grayscaleMode');
const rainbow = document.querySelector('#rainbowMode');
const erase = document.querySelector('#eraserMode');
const clear = document.querySelector('#clearGrid');
const colorSelector = document.querySelector('#colorSelector');

const slider = document.querySelector('#sizeSlider');
const sliderText = document.querySelector('#sliderText');

let style = 'color';
color.onclick = () => style = 'color';
grayscale.onclick = () => style = 'grayscale';
rainbow.onclick = () => style = 'rainbow';
erase.onclick = () => style = 'erase';
clear.onclick = () => makeGrid(slider.value);

sliderText.innerHTML = `${slider.value} x ${slider.value}`;
makeGrid(slider.value);
slider.oninput = function() {
    resetGrid();
    sliderText.innerHTML = `${this.value} x ${this.value}`;
    makeGrid(this.value);
}

function makeGrid(size) {
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, [col-start] minmax(100px, auto-fit) [col-end]);grid-template-rows: repeat(${size}, [row-start] minmax(100px, auto-fit) [row-end]);`);
    for (c = 1; c <= size; c++) { //populates each row
        for (r = 1; r <= size; r++) { //populates a row
        const space = document.createElement('div');
        space.classList.add('space');
        space.setAttribute('style', `display: grid; grid-area: ${r} / ${c};`);
        grid.appendChild(space);
        }
    }
    const boxes = document.querySelectorAll('.space');
    boxes.forEach(space => space.addEventListener('mouseover', highlightSpace));
}

function highlightSpace(event){
    switch (style) {
        case 'color':
            event.target.style.backgroundColor = `${colorSelector.value}`;
            break;
        case 'grayscale':
            event.target.style.backgroundColor = 'blue';
            break;
        case 'rainbow':
            event.target.style.backgroundColor = cycleColors;
        case 'erase':
            event.target.style.backgroundColor = 'white';
    }
}

function resetGrid() {
    const boxes = document.querySelectorAll('.space');
    boxes.forEach(space => space.setAttribute('style', 'background-color: none;'));
 }

 function removeAllChildNodes(parent) {
     while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
     }
 }

 function cycleColors() { //needs work
    for (let i = 0; i = 100; i++) {
        let colorHSL = "hsl(" + (360 * i / 24) + ",80%,50%)";
        return colorHSL;
      }
}





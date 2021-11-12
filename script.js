const grid = document.querySelector('#grid');
const color = document.querySelector('#colorMode');
const grayscale = document.querySelector('#grayscaleMode');
const rainbow = document.querySelector('#rainbowMode');
const erase = document.querySelector('#eraserMode');
const clear = document.querySelector('#clearGrid');

const slider = document.querySelector('#sizeSlider');
const sliderText = document.querySelector('#sliderText');
sliderText.innerHTML = `${slider.value} x ${slider.value}`;
makeGrid(slider.value);
slider.oninput = function() {
    resetGrid();
    sliderText.innerHTML = `${this.value} x ${this.value}`;
    makeGrid(this.value);
}


let style = 'color';
color.onclick = () => style = 'color';
grayscale.onclick = () => style = 'grayscale';
rainbow.onclick = () => style = 'rainbow';
erase.onclick = () => erase();
clear.onclick = () => resetGrid();

function makeGrid(size) {
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, 20px [col-start]);grid-template-rows: repeat(${size}, 20px [row-start]);`);
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
    event.target.classList.add(`${style}`);
}
function resetGrid() {
    const boxes = document.querySelectorAll('.space');
    boxes.forEach(space => space.classList.remove('color', 'grayscale', 'rainbow'));
 }








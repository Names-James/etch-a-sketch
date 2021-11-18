const grid = document.querySelector('#grid');
const color = document.querySelector('#colorMode');
const grayscale = document.querySelector('#grayscaleMode');
const rainbow = document.querySelector('#rainbowMode');
const erase = document.querySelector('#eraserMode');
const clear = document.querySelector('#clearGrid');
const colorSelector = document.querySelector('#colorSelector');
colorSelector.style.backgroundColor = `${colorSelector.value}`;
colorSelector.oninput = () => colorSelector.style.backgroundColor = `${colorSelector.value}`;

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
    sliderText.innerHTML = `${this.value} x ${this.value}`;
    makeGrid(this.value);
}

function makeGrid(size) {
    removeAllChildNodes(grid); //needed to destroy the previous grid
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, [col-start] minmax(100px, auto-fit) [col-end]);grid-template-rows: repeat(${size}, [row-start] minmax(100px, auto-fit) [row-end]);`);
    for (c = 1; c <= size; c++) {
        for (r = 1; r <= size; r++) {
        const space = document.createElement('div');
        space.classList.add('space');
        space.setAttribute('style', `background-color: rgb(255,255,255); display: grid; grid-area: ${r} / ${c};`);
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
            const bgColor = rgbToArray(event.target.style.backgroundColor);
            if (bgColor.every((val) => val === bgColor[0])) {
                event.target.style.backgroundColor = darkenRgb(bgColor);
                break;
            } else event.target.style.backgroundColor = 'rgb(220,220,220)';
            break;
        case 'rainbow':
            event.target.style.backgroundColor = randomRgb();
            break;
        case 'erase':
            event.target.style.backgroundColor = 'rgb(255,255,255)';
            break;
    }
}

 function removeAllChildNodes(parent) {
     while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
     }
 }

 function randomRgb() {
        let num = Math.round(0xffffff * Math.random());
        let r = num >> 16;
        let g = num >> 8 & 255;
        let b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function rgbToArray(rgbString) {
    // First convert to an array of integers by removing the whitespace,
    //taking the 3rd char to the 2nd last then splitting by ','
    const rgbIntArray = rgbString
      .replace(/ /g, "")
      .slice(4, -1)
      .split(",")
      .map((e) => parseInt(e));

    return rgbIntArray;
}

function darkenRgb(rgbArray) {
    for (i=0; i <= 2; i++) {
        rgbArray[i] = +rgbArray[i] - 25;
    }
    return 'rgb(' + rgbArray.join(', ') + ')'
}

//button mouse events
color.addEventListener('mouseenter', ()=> color.classList.add('hover'));
color.addEventListener('mouseleave', ()=> color.classList.remove('hover'));
grayscale.addEventListener('mouseenter', ()=> grayscale.classList.add('hover'));
grayscale.addEventListener('mouseleave', ()=> grayscale.classList.remove('hover'));
rainbow.addEventListener('mouseenter', ()=> rainbow.classList.add('hover'));
rainbow.addEventListener('mouseleave', ()=> rainbow.classList.remove('hover'));
erase.addEventListener('mouseenter', ()=> erase.classList.add('hover'));
erase.addEventListener('mouseleave', ()=> erase.classList.remove('hover'));
clear.addEventListener('mouseenter', ()=> clear.classList.add('hover'));
clear.addEventListener('mouseleave', ()=> clear.classList.remove('hover'));
colorSelector.addEventListener('mouseenter', ()=> colorSelector.classList.add('hover'));
colorSelector.addEventListener('mouseleave', ()=> colorSelector.classList.remove('hover'));
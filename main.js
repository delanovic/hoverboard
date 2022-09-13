const container = document.getElementById('container')
let colors = []
// 'red', 'blue', 'purple', 'white', 'pink', 'green'
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')

const colorRed = ['rgb(230, 17, 17)', 'rgb(255, 87, 87)', 'rgb(235, 117, 117)']
const colorBlue = ['rgb(0, 89, 255)', 'rgb(1, 13, 126)', 'rgb(23, 140, 250)']
const colorGreen = ['rgb(0, 255, 98)', 'rgb(36, 95, 25)', 'rgb(4, 121, 57)']




const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {


    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    red.addEventListener("click", function () {
        colors = colorRed
    });
    blue.addEventListener("click", function () {
        colors = colorBlue
    });
    green.addEventListener("click", function () {
        colors = colorGreen
    });


    // if (blue)
    return colors[Math.floor(Math.random() * colors.length)]
}
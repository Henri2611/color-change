const colors = ['cyan', 'orange', 'red', 'brown', 'violet'];

let button = document.getElementById('colorButton');
let container = document.getElementById('container');

button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = randomColor;
});

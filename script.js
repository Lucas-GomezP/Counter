const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');
const btnIncrease = document.getElementById('increase');

const range = document.getElementById('numeric')

let value = 0;

let nodeValue = document.getElementById('value')

function refreshColor() {
    if (value > 0) {
        nodeValue.style.color = 'var(--color-positive)';
    } else if (value < 0) {
        nodeValue.style.color = 'var(--color-negative)';
    } else {
        nodeValue.style.color = 'var(--color-base)';
    }
}

btnDecrease.addEventListener('click', () => {
    const rangeValue = parseInt(range.value);
    value -= rangeValue;
    refreshColor();
    nodeValue.textContent = value;
})

btnReset.addEventListener('click', () => {
    value = 0;
    refreshColor()
    nodeValue.textContent = value;
})

btnIncrease.addEventListener('click', () => {
    const rangeValue = parseInt(range.value);
    value += rangeValue;
    refreshColor();
    nodeValue.textContent = value;
})
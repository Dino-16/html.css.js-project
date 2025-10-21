let counter = 0;

document.getElementById('number').textContent = counter;

document.getElementById('increment').onclick=function() {
    counter++;
    document.getElementById('number').textContent = counter;
}

document.getElementById('decrement').onclick=function() {
    counter--;
    document.getElementById('number').textContent = counter;
}

document.getElementById('reset').onclick=function() {
    counter = 0;
    document.getElementById('number').textContent = counter;
}
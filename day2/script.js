/*
let username;
username = window.prompt("What is your name");

console.log(username);
*/

let username = '';

document.getElementById('submit').onclick = function () {
    username = document.getElementById('myInput').value;

    document.getElementById('myName').textContent = username;
}
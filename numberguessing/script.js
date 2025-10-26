const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

let number = Math.floor(Math.random() * 5 + 1);

submitBtn.onclick = function() {
    if(input.value == number) {
        result.textContent = "You guess correctly";
    } else if(input.value < number) {
        result.textContent = "Too low";
    } else if(input.value> number) {
        result.textContent = "Too high";
    } else {
        result.textContent = "Invalid Number";
    }
}
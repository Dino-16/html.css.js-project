const subscribe = document.getElementById("checkBtn");
const result1 = document.getElementById("result1");

subscribe.onchange = function() {
    if(subscribe.checked) {
        result1.textContent = "You are subscribed";
        radiobtn.style.display = "block";
    } else {
        result1.textContent = "";
    }
}


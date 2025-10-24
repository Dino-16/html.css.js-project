const subscribe = document.getElementById("checkBtn");
const visa = document.getElementById("visaBtn");
const gcash = document.getElementById("gcashBtn");
const bdo = document.getElementById("bdoBtn");
const submit = document.getElementById("submitBtn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

submit.onclick = function() {
    if(subscribe.checked) {
        result1.textContent = "You are subscribed"; 
            
        if(visa.checked) {
            result2.textContent = "You picked visa payment";
        } else if(gcash.checked) {
            result2.textContent = "You picked gcash payment";
        } else if(bdo.checked) {
            result2.textContent = "You picked bdo payment";
        } else {
            result2.textContent = "you dont pick a payment method";
        }
    } else {
        result1.textContent = "You are not subscribed";
    }

}
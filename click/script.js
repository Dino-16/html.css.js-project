let name1 = "John Doe";
let age = 23;
let gender = "Male";

let click = true;

function myFunction() {
  const nameEl = document.getElementById('name');
  const ageEl = document.getElementById('age');
  const genderEl = document.getElementById('gender');

  if (click) {
    nameEl.textContent = name1;
    ageEl.textContent = age;
    genderEl.textContent = gender;

    nameEl.classList.add('visible');
    ageEl.classList.add('visible');
    genderEl.classList.add('visible');
  } else {
    nameEl.classList.remove('visible');
    ageEl.classList.remove('visible');
    genderEl.classList.remove('visible');

    // Clear text after fade-out
    setTimeout(() => {
      nameEl.textContent = '';
      ageEl.textContent = '';
      genderEl.textContent = '';
    }, 500); // match transition duration
  }

  click = !click;
}
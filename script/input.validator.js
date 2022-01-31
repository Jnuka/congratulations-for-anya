const ANSWERS_MAP = {
    "stage1": "шоколад"
};

let form = document.getElementById('answer_form')
let validateBtn = document.getElementById('submit_button')
let from = document.getElementById('input')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let formAnswer = String(form.value).toLowerCase();
  console.log("form value = " + formAnswer);
  console.log("myAnswer = " + formAnswer);


  if (ANSWERS_MAP[stage] === String(form.value).toLowerCase()) {
      console.log("Yep");
  } else {
    console.log("No");
  }
})
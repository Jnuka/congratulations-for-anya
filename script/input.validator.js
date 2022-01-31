const ANSWERS_MAP = {
    "stage1": "шоколад"
};

let form = document.getElementById('answer_form')
let submitButton = document.getElementById('submit_button')
let input = document.getElementById('input')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let formAnswer = String(input.value).toLowerCase().trim();

  if (ANSWERS_MAP[stage] === formAnswer) {
    window.location.href = nextPage;
  }
})
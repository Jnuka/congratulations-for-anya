function toCharCodes(value) {
    let data = [];
    for (let i = 0; i < value.length; i++){  
      data.push(value.charCodeAt(i));
    }
    return data;
}

function isCorrect(input, expected) {
    if (input.length != expected.length) {
      return false;
    }

    for (let i = 0; i < input.length; i++){  
      if (input[i].length != expected[i].length) {
        return false;
      }

      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] != expected[i][j]) {
          return false;
        }
      }
    }

    return true;
}

const RESULT = {
  "stage1": [[1096,1086,1082,1086,1083,1072,1076]],
  "stage2": [[1095,1091,1095,1072], [1080], [1087,1077,1088,1077,1094]],
  "stage3": [[1089, 1095, 1072, 1089, 1090, 1100, 1077, 1095, 1082, 1086]],
  "stage4": [[1076, 1072], [1087, 1088, 1077, 1073, 1091, 1076, 1077, 1090], [1089], [1090, 1086, 1073, 1086, 1081], [1089, 1080, 1083, 1072]],
  "stage5": [[1087, 1091, 1089, 1090, 1100], [1074, 1089, 1077], [1079, 1072, 1076, 1091, 1084, 1072, 1085, 1085, 1086, 1077], [1089, 1073, 1091, 1076, 1077, 1090, 1089, 1103]],
  "stage6": [[1091, 1076, 1086, 1074, 1086, 1083, 1100, 1089, 1090, 1074, 1080, 1077]],
  "stage8": [[51, 54, 53]],
  "stage9": [[1101, 1090, 1086], [1073, 1099, 1083, 1072], [1086, 1090, 1083, 1080, 1095, 1085, 1072, 1103], [1079, 1072, 1075, 1072, 1076, 1082, 1072]],
  "stage10": [[1074, 1089, 1077, 1075, 1086], [1093, 1086, 1088, 1086, 1096, 1077, 1075, 1086], [1080], [1089, 1087, 1072, 1089, 1080, 1073, 1086], [1079, 1072], [1088, 1099, 1073, 1091]]
}

function testInput(stage, input) {
  let inputArr = input.toLowerCase()
    .trim()
    .split(" ")
    .map(i => i.trim())
    .map(i => i.replace('ё', 'е'))
    .map(i => toCharCodes(i));

  return isCorrect(inputArr, RESULT[stage]);
}

let form = document.getElementById('answer_form')
let input = document.getElementById('input')

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (testInput(stage, input.value)) {
    console.log("It's correct");
    window.location.href = nextPage;
  } else {
    input.classList.add("bounce");
    setTimeout(function() {
      input.classList.remove("bounce");
    }, 1000); 
  }
})
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
    //easy
     1: [[1085, 1072, 1079, 1072, 1076], [1074], [1073, 1091, 1076, 1091, 1097, 1077, 1077]],
     2: [[1085, 1072, 1095, 1072, 1083, 1086]],
     3: [[1076, 1088, 1091, 1079, 1100, 1103]],
     4: [
         [[1095, 1077, 1083, 1086, 1074, 1077, 1082, 45, 1087, 1072, 1091, 1082]],
         [[1095, 1077, 1083, 1086, 1074, 1077, 1082], [1087, 1072, 1091, 1082]]
     ],
     5: [[1082, 1088, 1077, 1087, 1082, 1080, 1081], [1086, 1088, 1077, 1096, 1077, 1082]],
     6: [[1084, 1072, 1083, 1077, 1085, 1100, 1082, 1080, 1081], [1087, 1088, 1080, 1085, 1094]],
     7: [[1074, 1083, 1072, 1089, 1090, 1077, 1083, 1080, 1085], [1082, 1086, 1083, 1077, 1094]],
     8: [[1089, 1074, 1077, 1088, 1093, 1098, 1077, 1089, 1090, 1077, 1089, 1090, 1074, 1077, 1085, 1085, 1086, 1077]],
     9: [[1078, 1077, 1083, 1077, 1079, 1085, 1099, 1081], [1095, 1077, 1083, 1086, 1074, 1077, 1082]],
    10: [[1093, 1086, 1076, 1103, 1095, 1080, 1077], [1084, 1077, 1088, 1090, 1074, 1077, 1094, 1099]],

    // medium
    11: [[1075, 1083, 1072, 1074, 1085, 1099, 1081], [1075, 1077, 1088, 1086, 1081]],
    12: [[1082, 1086, 1088, 1086, 1083, 1100], [1083, 1077, 1074]],
    13: [[1086, 1089, 1090, 1088, 1099, 1077], [1082, 1086, 1079, 1099, 1088, 1100, 1082, 1080]],
    14: [[1084, 1086, 1083, 1095, 1072, 1085, 1080, 1077], [1103, 1075, 1085, 1103, 1090]],
    15: [[1086, 1090, 1089, 1090, 1091, 1087, 1085, 1080, 1082, 1080]],
    16: [[1101, 1092, 1092, 1077, 1082, 1090], [1073, 1072, 1073, 1086, 1095, 1082, 1080]],
    17: [[1086, 1073, 1097, 1077, 1089, 1090, 1074, 1086], [1084, 1077, 1088, 1090, 1074, 1099, 1093], [1087, 1086, 1101, 1090, 1086, 1074]],
    18: [[1091, 1085, 1077, 1089, 1077, 1085, 1085, 1099, 1077], [1087, 1088, 1080, 1079, 1088, 1072, 1082, 1072, 1084, 1080]],

    // hard
    19: [[1087, 1103, 1090, 1099, 1081], [1101, 1083, 1077, 1084, 1077, 1085, 1090]],
    20: [[1080, 1075, 1088, 1072], [1087, 1088, 1077, 1089, 1090, 1086, 1083, 1086, 1074]],
    21: [[1075, 1086, 1083, 1086, 1074, 1086, 1083, 1086, 1084, 1082, 1072]],
    22: [[1086, 1089, 1090, 1088, 1086, 1074], [1087, 1088, 1086, 1082, 1083, 1103, 1090, 1099, 1093]   ],
    23: [[1086, 1076, 1080, 1085], [1076, 1086, 1084, 1072]],
    24: [[1080, 1075, 1088, 1099], [1088, 1072, 1079, 1091, 1084, 1072]],
    25: [[1079, 1077, 1083, 1077, 1085, 1072, 1103], [1082, 1085, 1080, 1075, 1072]]
}

function testInput(stage, input) {
  let inputArr = input.toLowerCase()
    .trim()
    .split(" ")
    .map(i => i.trim())
    .map(i => i.replace('ё', 'е'))
    .map(i => toCharCodes(i));
    
    if (stage === 4) {
        return isCorrect(inputArr, RESULT[stage][0]) || isCorrect(inputArr, RESULT[stage][1]);
    }

    return isCorrect(inputArr, RESULT[stage]);
}

let form = document.getElementById('answer__form')
let input = document.getElementById('input')

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (testInput(stage, input.value)) {
        console.log("It's correct");
        
        stage += 1;
        input.value = "";

        updateLabel();
        resetTimer();

        if (stage === 25) {
            console.log("Redirect to next page")
            window.location.href = nextPage;
        }

    } else {
        input.classList.add("bounce");
        setTimeout(function() {
        input.classList.remove("bounce");
        }, 1000); 
    }
})
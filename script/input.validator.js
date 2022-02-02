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
      if (input[i] != expected[i]) {
        return false;
      }
    }

    return true;
}

const stage1Test = (input) => {
  return isCorrect(toCharCodes(input.toLowerCase().trim()), [1096,1086,1082,1086,1083,1072,1076]);
}

const stage2Test = (input) => {
  return false;
}

const stage3Test = (input) => {
  return false;
}

const stage4Test = (input) => {
  return false;
}

const stage5Test = (input) => {
  return false;
}

const stage6Test = (input) => {
  return false;
}

const stage8Test = (input) => {
  return false;
}

const stage9Test = (input) => {
  return false;
}

const stage10Test = (input) => {
  return false;
}

function testInput(stage, input) {
  switch(stage) {
    case "stage1":
      return stage1Test(input);
    case "stage2":
      return stage2Test(input);
    case "stage3":
      return stage3Test(input);
    case "stage4":
      return stage4Test(input);
    case "stage5":
      return stage5Test(input);
    case "stage6":
      return stage6Test(input);
    case "stage8":
      return stage8Test(input);  
    case "stage9":
      return stage9Test(input);      
    case "stage10":
      return stage10Test(input);
    default:
      return false;               
  }
}

let form = document.getElementById('answer_form')
let input = document.getElementById('input')

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (testInput(stage, input.value)) {
    window.location.href = nextPage;
    // console.log("Yes");

  } else {
    input.classList.add("bounce");
    setTimeout(function() {
      input.classList.remove("bounce");
    }, 1000); 
  }
})
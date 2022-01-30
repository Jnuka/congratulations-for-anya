const TIME = 3; // time in seconds

let time = TIME + 1;
let timer;

let helpButton = document.getElementById("button-help");

startTimer();

const getHelpButtonNotReadyMsg = (time) => {return `Подсказка ещё не готова, нужно подождать ещё ${time} секунд(ы)`};
const updateButtonStyle = (button, style) => {
    //** todo: update button style here **// 
}

function startTimer() {
    time -= 1;
    console.log(`time to help: ${time}`);

    if (time === 0) {
        // button.className = 'button_on';
        updateButtonStyle(helpButton, "");
        clearTimeout(timer);
    } else {
        // helpButton.className = 'button_off';
        updateButtonStyle(helpButton, "");
        timer = setTimeout(startTimer, 1000);
    }
}



// const resetTimer = () => {
//     time = TIME + 1;
//     startTimer();
// }

// button.onclick = () => {
//     if (time != 0) {
//         notReady.innerText = hintNotReady(time);
//         helpHint.style.visibility = 'visible';
//     } else {
//         helpHints[countOfCliks].innerText = HELPS[countOfCliks];
//         countOfCliks += 1;
//         helpHint.style.visibility = 'visible';
//         resetTimer();
//     }
// };

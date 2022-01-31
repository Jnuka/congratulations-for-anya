const TIME = 3; // time in seconds

const getHelpButtonNotReadyMsg = (time) => {return `Следующая подсказка будет доступна через ${time} секунд(ы)`};
const HELP_IS_READY_MSG = "Доступна новая подсказка!";

function startTimer() {
    time -= 1;

    if (time === 0) {
        helpButton.innerHTML = HELP_IS_READY_MSG;
        clearTimeout(timer);
    } else {
        helpButton.innerHTML = getHelpButtonNotReadyMsg(time);
        timer = setTimeout(startTimer, 1000);
    }
}

// Start script
let time = TIME + 1;
let timer;

let helpButton = document.getElementById("button-help");
startTimer();
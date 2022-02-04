const TIME = 0//60 * 3; // time in seconds

const getHelpButtonNotReadyMsg = (time) => {return `Следующая подсказка будет доступна через ${time} секунд(ы)`};
const HELP_IS_READY_MSG = "Доступна новая подсказка!";
const USED_ALL_HELPS_MSG = "Использованы все доступные подсказки";

const getHelpMsgs = (msgs) => {
    let arr = [];
    for (let i = 0; i < msgs.length; i++) {
        arr[i] = msgs[i].innerHTML;
    } 

    return arr;
};

const stubResolveMsgs = (elements, stubs) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = stubs[i];
    }
}

const resolveHelpMsgs = (elements, realMsgs, countOfClicks) => {
    for (let i = 0; i < elements.length; i++) {
        if (i <= countOfClicks - 1) {
            elements[i].innerHTML = realMsgs[i];
        }
    }
};

function startTimer() {
    time -= 1;

    if (time <= 0) {
        helpButton.innerHTML = HELP_IS_READY_MSG;
        helpButton.disabled = false;     
        clearTimeout(timer);
    } else {
        helpButton.innerHTML = getHelpButtonNotReadyMsg(time);
        timer = setTimeout(startTimer, 1000);
    }
}

// Start script
let time = TIME + 1;
let timer;

let cliks = 0;

let helpButton = document.getElementById("button-help");
helpButton.disabled = true;

helpButton.addEventListener("click", () => {
    if (time === 0) {
        time = TIME + 1;
        cliks += 1;
        
        resolveHelpMsgs(helpMsgElementArray, helpMsgsTextArray, cliks);   

        if (cliks < 3) {
            startTimer();
        } else {
            helpButton.innerHTML = USED_ALL_HELPS_MSG;
        }
    }
});

let helpMsgElementArray = [document.getElementById("help_1"), document.getElementById("help_2"), document.getElementById("help_3")];
let helpMsgsTextArray = getHelpMsgs(helpMsgElementArray);
let helpMsgStubArray = ["1. ...", "2. ...", "3. ..."];

stubResolveMsgs(helpMsgElementArray, helpMsgStubArray);

startTimer();
const REDIRECTS = {
    "stage2": 'html/witness.html',
    "stage3": 'html/proof.html',
    "stage4": 'html/tractor.html',
    "stage5": 'html/boots.html',
    "stage6": 'html/telescope.html',
    "stage7": 'html/insect.html',
    "stage8": 'html/juniper.html',
    "stage9": 'html/injection.html',
    "stage10": 'html/stocking.html'
};

const SAVED_STAGE = "savedStage";
const START_TIME = "startTime";

const SEC = 1000;
const MIN = 60000;
const HOUR = 3600000;
const DAYS = 86400000;

function getCookie(cookieId, cookies) {
    let rawCookies = cookies.split("; ")
    for (let rawCookie of rawCookies) {
        if (rawCookie && rawCookie.startsWith(cookieId)) {
            return rawCookie.slice(rawCookie.indexOf('=') + 1);
        }
    }

    return NaN;
}

let cookies = document.cookie;
let savedStage = getCookie(SAVED_STAGE, cookies);

if (stage === "stage1" && savedStage && savedStage != "stage1" && savedStage != "stage11") {
    if (confirm("Начать с последней закрытой страницы?")) {
        window.location.href = REDIRECTS[savedStage];
    }
}

if (stage === "stage1") {
    document.cookie = `${START_TIME}=${Date.now()}`;
}

document.cookie = `${SAVED_STAGE}=${stage}`;

if (stage == "stage11") {
    let startTime = getCookie(START_TIME, cookies);
    let endTime = Date.now();

    console.log("startTime: " + startTime);
    console.log("endTime: " + endTime);

    if (startTime && endTime - startTime >= 10 * MIN) {
        let resultTimeLabel = document.getElementById("result_time");

        let totalTime = endTime - startTime;
        let days = Math.trunc(totalTime / DAYS);
        let hours = Math.trunc((totalTime - days * DAYS) / HOUR);
        let minutes = Math.trunc((totalTime - days * DAYS - hours * HOUR) / MIN);
        let second = Math.trunc((totalTime - days * DAYS - hours * HOUR - minutes * MIN) / SEC);

        let result = days > 0 ? `${days} дня(ей) ` : "";
        result += hours > 0 ? `${hours} часа(ов) ` : "";
        result += minutes > 0 ? `${minutes} минут(ы) ` : "";
        result += second > 0 ? `${second} секунд(ы) ` : "";

        resultTimeLabel.innerHTML = result != "" ? `Затраченное время на прохождение: <br>${result}` : "";
    }
}
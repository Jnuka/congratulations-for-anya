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

const SAVED_STAGE = "questSavedStage";
const START_TIME = "questStartTime";

const SEC = 1000;
const MIN = 60000;
const HOUR = 3600000;
const DAYS = 86400000;

function addCookie(name, value) {
    removeCookie(name);
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}!${new Date().getTime()};expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    let rawCookies = document.cookie.split("; ")
    let foundedCookie = NaN;

    for (let cookie of rawCookies) {
        if (cookie && cookie.startsWith(name)) {
            cookie = cookie.slice(cookie.indexOf('=') + 1); 
            if (!foundedCookie || getCookieTimestamp(foundedCookie) < getCookieTimestamp(cookie))
            foundedCookie = cookie;
        }
    }

    return foundedCookie ? foundedCookie.substring(0, foundedCookie.indexOf('!')) : NaN;
}

function getCookieTimestamp(cookieValue) {
    return cookieValue.indexOf('!') > 0 ? new Number(cookieValue.slice(cookieValue.indexOf('!') + 1)) : 0;
}

function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
}


/** Start function */
let savedStage = getCookie(SAVED_STAGE);

if (stage === "stage1" && savedStage && savedStage != "stage1" && savedStage != "stage11") {
    if (confirm("Начать с последней закрытой страницы?")) {
        window.location.href = REDIRECTS[savedStage];
    }
}

addCookie(SAVED_STAGE, stage);

if (stage === "stage1") {
    addCookie(START_TIME, Date.now());
}

if (stage == "stage11") {
    let startTime = getCookie(START_TIME);
    let endTime = Date.now();

    console.log("startTime: " + startTime);
    console.log("endTime: " + endTime);

    if (startTime && endTime - startTime >= 0) {
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
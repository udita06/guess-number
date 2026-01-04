let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function start() {

    if (!timerInterval) {
        startTime = Date.now()-elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null; 
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
}

function updateDisplay() {
    elapsedTime = Date.now()-startTime;

    let diffInHrs = elapsedTime / 3600000;
    let hour = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs-hour) * 60;
    let minutes = Math.floor(diffInMin);

    let diffInSec = (diffInMin-minutes) * 60;
    let seconds = Math.floor(diffInSec);

    let diffInMs = (diffInSec-seconds) * 100;
    let milliseconds = Math.floor(diffInMs);

    let formattedHH = hour.toString().padStart(2, "0");
    let formattedMM = minutes.toString().padStart(2, "0");
    let formattedSS = seconds.toString().padStart(2, "0");
    let formattedMS = milliseconds.toString().padStart(2, "0");

    document.getElementById("display").innerHTML =  `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

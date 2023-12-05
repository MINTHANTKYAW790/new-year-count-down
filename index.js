const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minute");
const secEl = document.getElementById("second");

const newYearDate = new Date("Jan 1,2024 00:00:00").getTime();

function countDown() {
    let currentTime = new Date().getTime();
    let diff = newYearDate - currentTime;
    console.log(currentTime, newYearDate, diff);

    second = 1000;
    minute = second * 60;
    hour = minute * 60;
    day = hour * 24;

    let d = Math.floor(diff / day);
    let h = Math.floor((diff % day) / hour);
    let m = Math.floor((diff % hour) / minute);
    let s = Math.floor((diff % minute) / 1000);

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    dayEl.innerText = d;
    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    setTimeout(countDown, 1000);
}
countDown();

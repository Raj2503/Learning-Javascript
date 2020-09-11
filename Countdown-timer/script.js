const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countdown()
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
}

function format(time) {
    return time < 10 ?  `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
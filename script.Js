const dayEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const newYears = "03/10/2022"

function countDown(){
    const newTearsDate = new Date(newYears);
    const currentDate = new Date ();
        const totalseconds = (newTearsDate - currentDate)/1000;
        const days = Math.floor(totalseconds / 3600 / 24);
        const hours = Math.floor(totalseconds /3600) %24;
        const min = Math.floor(totalseconds /60) % 60;
        const secounds =Math.floor(totalseconds) %60;
console.log(days, hours, min, secounds);

dayEl.innerHTML=days;
hoursEl.innerHTML=formatTime(hours);
minsEl.innerHTML=formatTime(min);
secondsEl.innerHTML=formatTime(secounds);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
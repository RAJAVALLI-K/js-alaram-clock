function alaramClock() {
    let dates = new Date();
    let time = dates.toLocaleTimeString();
    document.querySelector('#local-time').innerText = time;
}

setInterval(alaramClock, 1000);

let alaram = document.querySelector('#alaram');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');

startBtn.addEventListener("click", function () {

    let hours = parseInt(document.querySelector('#hour').value);
    let minutes = parseInt(document.querySelector('#minutes').value);
    let seconds = parseInt(document.querySelector('#seconds').value);

    setInterval(checkTimer, 1000);
    function checkTimer() {
        let dates = new Date();
        let hour = dates.getHours();
        let minute = dates.getMinutes();
        let second = dates.getSeconds();

        if (hour > 12) {
            hour = hour - 12;
        } else {
            hour = hour;
        }
        if (hour == hours && minute == minutes && second == seconds) {
            alaram.play();
            console.log("play");
        }
    }
    console.log('raji');
});

stopBtn.addEventListener("click", function (event) {
    alaram.pause();
    console.log('raj');
});

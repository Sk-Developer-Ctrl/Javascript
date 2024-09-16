let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval; 

function startTimer() {
  interval = setInterval(() => {
    milliseconds += 10;

    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    document.getElementById('timer-time').innerText = 
      `${minutes}:${seconds}:${milliseconds}`;
  }, 10);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  document.getElementById('timer-time').innerText = '00:00:00';
}

document.getElementById('start-time').addEventListener('click', startTimer);
document.getElementById('stop-time').addEventListener('click', stopTimer);
document.getElementById('reset-time').addEventListener('click', resetTimer);

let start = performance.now();
let precision = 3;
let divisor = 1;
const timerDisplay = document.getElementById("timer");
const button = document.getElementById("slowdown");

function formatTime(elapsed, precision) {
  const totalSeconds = Math.floor(elapsed / 1000);
  const remainder = (elapsed % 1000).toFixed(precision).split(".")[1] || "";
  return `${totalSeconds}:${remainder.padEnd(precision, "0")}`;
}

function update() {
  let now = performance.now();
  let elapsed = (now - start) / divisor;
  timerDisplay.textContent = formatTime(elapsed, precision);
  requestAnimationFrame(update);
}

button.addEventListener("click", () => {
  divisor *= 10;
  precision += 1;
});

update();

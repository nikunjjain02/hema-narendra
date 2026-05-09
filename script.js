const countdown = document.querySelector("[data-countdown]");
const loader = document.querySelector(".invite-loader");

document.body.classList.add("is-loading");

function finishIntro() {
  document.body.classList.remove("is-loading");
  loader?.remove();
}

function updateCountdown() {
  if (!countdown) return;

  const target = new Date(countdown.dataset.countdown).getTime();
  const now = Date.now();
  const remaining = Math.max(0, target - now);
  const seconds = Math.floor(remaining / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const lastSeconds = seconds % 60;

  countdown.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
  countdown.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
  countdown.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
  countdown.querySelector("[data-seconds]").textContent = String(lastSeconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
setTimeout(finishIntro, 4300);

// Stats
const stats = document.querySelector("body > .stats");
const statsElements = document.querySelectorAll("body > .stats .number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 500) {
    if (!started) {
      statsElements.forEach((ele) => counterAnimation(ele, 1500));
    }
    started = true;
  }
};

function counterAnimation(element, duration) {
  let goal = parseInt(element.dataset.num, 10);
  let count = 0;
  let increment = goal / (duration / 10);
  let counter = setInterval(() => {
    count += increment;
    if (count >= goal) {
      element.textContent = goal;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(count);
    }
  }, 10);
}

const hoursInput = document.querySelector('#hours');
const daysInput = document.querySelector('#days');
const vacationInput = document.querySelector('#vacation');
const totalInput = document.querySelector('#project-total');
const totalOutput = document.querySelector('#rate');
const button = document.querySelector('#submit-btn');
const resultArea = document.querySelector('.result-area');
const mainArea = document.querySelector('.main');

function calculateRate(hours, days, vacations, total) {
  return total / (days * 4 * hours) + vacations * days * hours;
}

function isEveryFieldFilled() {
  return (
    hoursInput.value.length &&
    daysInput.value.length &&
    vacationInput.value.length &&
    totalInput.value.length
  );
}

button.addEventListener('click', e => {
  e.preventDefault();
  if (isEveryFieldFilled()) {
    const rate = calculateRate(
      hoursInput.value,
      daysInput.value,
      vacationInput.value,
      totalInput.value
    );
    totalOutput.textContent = `$${rate.toFixed(2)}`;
    resultArea.classList.add('show');
    mainArea.classList.add('has-result');
  }
});

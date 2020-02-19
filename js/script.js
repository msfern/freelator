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

button.addEventListener('click', e => {
  e.preventDefault();
  const rate = calculateRate(
    hoursInput.value,
    daysInput.value,
    vacationInput.value,
    totalInput.value
  );
  totalOutput.textContent = `$${rate.toFixed(2)}`;
  resultArea.classList.add('show');
  mainArea.classList.add('has-result');
});

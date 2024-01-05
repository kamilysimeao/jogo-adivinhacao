const randomNumber = Math.floor(Math.random() * 50) + 1; // Número aleatório entre 1 e 50
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 50) {
    message.textContent = 'Por favor, insira um número válido entre 1 e 50.';
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativa(s)!`;
    disableInput();
  } else if (guess < randomNumber) {
    message.textContent = 'Tente um número maior.';
  } else {
    message.textContent = 'Tente um número menor.';
  }
}

function disableInput() {
  document.getElementById('guess').disabled = true;
  document.querySelector('button').disabled = true;
}

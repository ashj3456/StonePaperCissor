const choices = document.querySelectorAll('.choice');
const userChoiceText = document.getElementById('user-choice');
const computerChoiceText = document.getElementById('computer-choice');
const resultMessage = document.getElementById('result-message');

choices.forEach(choice => choice.addEventListener('click', playGame));

function playGame(event) {
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceText.textContent = `Your choice: ${userChoice}`;
    computerChoiceText.textContent =`Computer choice: ${computerChoice}`;
    resultMessage.textContent = result.message;

    resultMessage.classList.remove('win', 'lose', 'draw');
    resultMessage.classList.add(result.class);
}


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return { message: 'It\'s a draw!', class: 'draw' };
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return { message: 'You win!', class: 'win' };
    } else {
        return { message: 'You lose!', class: 'lose' };
    }
}
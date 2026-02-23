let countdownInterval;

const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timerDisplay');
const statusMessage = document.getElementById('statusMessage');
const secondsInput = document.getElementById('secondsInput');

startBtn.addEventListener('click', () => {
    // 1. Clear any existing timer before starting a new one
    clearInterval(countdownInterval);

    let timeLeft = parseInt(secondsInput.value);

    // Basic validation
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number of seconds!");
        return;
    }

    statusMessage.textContent = "Counting down...";
    timerDisplay.textContent = timeLeft;

    // 2. Start the Interval (repeats every 1000ms)
    countdownInterval = setInterval(() => {
        timeLeft--; // Subtract 1 second
        
        // 3. DOM Update
        timerDisplay.textContent = timeLeft;

        // 4. Check if finished
        if (timeLeft <= 0) {
            clearInterval(countdownInterval); // Stop the timer
            timerDisplay.textContent = "0";
            statusMessage.textContent = "⏰ Time Over!";
            statusMessage.style.color = "red";
        }
    }, 1000);
});
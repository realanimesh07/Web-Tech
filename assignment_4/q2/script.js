let generatedOTP = "";

const otpDisplay = document.getElementById('otpDisplay');
const userInput = document.getElementById('userInput');
const message = document.getElementById('message');

// Function to generate OTP
document.getElementById('generateBtn').addEventListener('click', () => {
    // Generate a random number between 0 and 999999
    // Math.random() gives a decimal, we multiply and floor it
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    
    generatedOTP = randomNum.toString();
    otpDisplay.textContent = generatedOTP;
    
    // Clear previous results
    message.textContent = "";
    userInput.value = "";
});

// Function to verify OTP
document.getElementById('verifyBtn').addEventListener('click', () => {
    const enteredValue = userInput.value.trim();

    if (enteredValue === "") {
        message.textContent = "Please enter the OTP first!";
        message.style.color = "orange";
        return;
    }

    // DOM Validation
    if (enteredValue === generatedOTP) {
        message.textContent = "✅ Valid OTP! Access Granted.";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Invalid OTP. Please try again.";
        message.style.color = "red";
    }
});
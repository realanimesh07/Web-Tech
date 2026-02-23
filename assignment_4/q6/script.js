document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form submission

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = "");

    let isValid = true;

    // 1. Name Check
    const name = document.getElementById('username').value.trim();
    if (name === "") {
        document.getElementById('nameErr').textContent = "Name is required";
        isValid = false;
    }

    // 2. Email Check (Regex)
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailErr').textContent = "Invalid email format";
        isValid = false;
    }

    // 3. Password Strength (Uppercase + Number)
    const pass = document.getElementById('password').value;
    const strongPassRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; 
    if (!strongPassRegex.test(pass)) {
        document.getElementById('passErr').textContent = "Must have 6+ chars, 1 uppercase, and 1 number";
        isValid = false;
    }

    // 4. Confirm Password Match
    const confirmPass = document.getElementById('confirmPass').value;
    if (confirmPass !== pass) {
        document.getElementById('confirmErr').textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        this.reset(); // Clear form
    }
});
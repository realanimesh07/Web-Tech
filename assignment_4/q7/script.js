const loginSection = document.getElementById('loginSection');
const welcomeSection = document.getElementById('welcomeSection');
const usernameInput = document.getElementById('usernameInput');
const welcomeMsg = document.getElementById('welcomeMsg');

// 1. Check if user is already "Logged In" on page load
function checkSession() {
    const savedUser = localStorage.getItem('username');

    if (savedUser) {
        // Show Welcome, Hide Login
        loginSection.style.display = "none";
        welcomeSection.style.display = "block";
        welcomeMsg.textContent = `Welcome back, ${savedUser}!`;
    } else {
        // Show Login, Hide Welcome
        loginSection.style.display = "block";
        welcomeSection.style.display = "none";
    }
}

// 2. Login Action
document.getElementById('loginBtn').addEventListener('click', () => {
    const user = usernameInput.value.trim();
    if (user) {
        localStorage.setItem('username', user); // Save to storage
        checkSession();
    }
});

// 3. Logout Action
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('username'); // Clear from storage
    usernameInput.value = "";
    checkSession();
});

// Run check on startup
checkSession();
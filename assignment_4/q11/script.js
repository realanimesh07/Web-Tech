const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const heading = document.getElementById('heading');

// 1. Check for saved preference on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'enabled') {
    body.classList.add('dark-mode');
    heading.textContent = "Current Theme: Dark";
}

// 2. Toggle logic
themeBtn.addEventListener('click', () => {
    // This adds 'dark-mode' if missing, and removes it if present
    body.classList.toggle('dark-mode');

    // 3. Save the current state to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'enabled');
        heading.textContent = "Current Theme: Dark";
    } else {
        localStorage.setItem('theme', 'disabled');
        heading.textContent = "Current Theme: Light";
    }
});
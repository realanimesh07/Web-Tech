const textArea = document.getElementById('myBox');
const charDisplay = document.getElementById('charCount');
const MAX_CHARS = 200;

textArea.addEventListener('input', () => {
    // 1. Calculate length
    const currentLength = textArea.value.length;
    const remaining = MAX_CHARS - currentLength;

    // 2. Update the DOM display
    charDisplay.textContent = remaining;

    // 3. Length Validation: Visual feedback
    if (remaining <= 20) {
        charDisplay.classList.add('warning');
    } else {
        charDisplay.classList.remove('warning');
    }
});
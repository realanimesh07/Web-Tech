// 1. Array of images (using placeholders for this example)
const images = [
    "https://picsum.photos/id/10/500/300",
    "https://picsum.photos/id/20/500/300",
    "https://picsum.photos/id/30/500/300",
    "https://picsum.photos/id/40/500/300"
];

let currentIndex = 0;
const imgElement = document.getElementById('sliderImg');

// Function to update the DOM src
function updateImage() {
    imgElement.src = images[currentIndex];
}

// Next Image Logic (Increments index)
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Reset to start
    }
    updateImage();
}

// Previous Image Logic (Decrements index)
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Go to last image
    }
    updateImage();
}

// 2. DOM Events
document.getElementById('nextBtn').addEventListener('click', () => {
    nextImage();
    resetTimer(); // Reset auto-slide on manual click
});

document.getElementById('prevBtn').addEventListener('click', () => {
    prevImage();
    resetTimer();
});

// 3. Auto-slide logic using setInterval()
let slideTimer = setInterval(nextImage, 3000);

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextImage, 3000);
}

// Initialize first image
updateImage();
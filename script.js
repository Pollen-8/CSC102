// Variable to hold movement interval
let moveInterval = null;

// Get elements from the page
const meme = document.getElementById("meme1");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const statusMsg = document.getElementById("statusMsg");

// Initial position setup
meme.style.position = "absolute";
meme.style.left = "100px";
meme.style.top = "150px";

// START BUTTON EVENT
startBtn.addEventListener("click", startMoving);

// STOP BUTTON EVENT
stopBtn.addEventListener("click", stopMoving);

// Function to start movement
function startMoving() {

    // Disable start, enable stop
    startBtn.disabled = true;
    stopBtn.disabled = false;

    // Update message using innerHTML (REQUIRED)
    statusMsg.innerHTML = "Meme is moving!";

    // Move image every 500ms
    moveInterval = setInterval(moveMeme, 500);
}

// Function to stop movement
function stopMoving() {

    // Enable start, disable stop
    startBtn.disabled = false;
    stopBtn.disabled = true;

    // Stop movement
    clearInterval(moveInterval);

    // Update message
    statusMsg.innerHTML = "Meme stopped.";
}

// Function that moves the meme randomly
function moveMeme() {

    // Generate random positions
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    // Apply new position
    meme.style.left = x + "px";
    meme.style.top = y + "px";
}
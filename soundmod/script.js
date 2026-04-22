// Variable to hold the movement interval reference
let moveInterval = null;

// Get the meme image element from the page
const meme = document.getElementById("meme1");

// Get the start button element
const startBtn = document.getElementById("startBtn");

// Get the stop button element
const stopBtn = document.getElementById("stopBtn");

// Get the status message paragraph element
const statusMsg = document.getElementById("statusMsg");

// Get the background audio element
const bgAudio = document.getElementById("bgAudio");

// Get the click sound audio element for when the meme is clicked
const clickAudio = document.getElementById("clickAudio");

// Set the meme's CSS position to absolute so it can be freely moved
meme.style.position = "absolute";

// Set the meme's starting horizontal position
meme.style.left = "100px";

// Set the meme's starting vertical position
meme.style.top = "150px";

// Attach click event to the start button
startBtn.addEventListener("click", startMoving);

// Attach click event to the stop button
stopBtn.addEventListener("click", stopMoving);

// Attach click event to the meme so it plays a sound when clicked
meme.addEventListener("click", playClickSound);

// Function to start meme movement and audio
function startMoving() {

    // Disable the start button so it can't be clicked again while running
    startBtn.disabled = true;

    // Enable the stop button so the user can stop movement
    stopBtn.disabled = false;

    // Update the status message to show the meme is moving
    statusMsg.innerHTML = "Meme is moving!";

    // Begin playing the background audio
    bgAudio.play();

    // Move the meme to a new random position every 500 milliseconds
    moveInterval = setInterval(moveMeme, 500);
}

// Function to stop meme movement and audio
function stopMoving() {

    // Re-enable the start button
    startBtn.disabled = false;

    // Disable the stop button since movement has stopped
    stopBtn.disabled = true;

    // Clear the interval to stop the meme from moving
    clearInterval(moveInterval);

    // Pause the background audio
    bgAudio.pause();

    // Reset audio playback position to the beginning
    bgAudio.currentTime = 0;

    // Update the status message to show the meme has stopped
    statusMsg.innerHTML = "Meme stopped.";
}

// Function that plays the click sound from the start when the meme is clicked
function playClickSound() {

    // Reset audio to the beginning so it plays fresh each click
    clickAudio.currentTime = 0;

    // Play the click sound audio clip
    clickAudio.play();
}

// Function that moves the meme to a random position on screen
function moveMeme() {

    // Generate a random horizontal position within the window width
    let x = Math.random() * (window.innerWidth - 200);

    // Generate a random vertical position within the window height
    let y = Math.random() * (window.innerHeight - 200);

    // Apply the new horizontal position to the meme
    meme.style.left = x + "px";

    // Apply the new vertical position to the meme
    meme.style.top = y + "px";
}

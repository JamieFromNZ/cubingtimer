// Timer-related functions (start, stop, reset) will be implemented here

// Variables to store the timer interval, start time, and the states of the timer
let timer;
let startTime;
let isRunning = false;
let isReady = false;

// Reference to the timer display element
let timerDisplay = document.getElementById('timer-display');

// Function to start the timer
function startTimer() {
    startTime = new Date(); // Set the start time
    isRunning = true; // Update the running state
    timer = setInterval(updateTimerDisplay, 10); // Initialize the timer interval to update the display
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer); // Clear the timer interval
    isRunning = false; // Update the running state
}

// Function to update the timer display
function updateTimerDisplay() {
    const now = new Date(); // Get the current time
    const elapsedTime = now - startTime; // Calculate the elapsed time

    // Convert the elapsed time to seconds and milliseconds
    const seconds = Math.floor(elapsedTime / 1000);
    const milliseconds = elapsedTime % 1000;

    // Format the time as a string (e.g., "18.305")
    const formattedTime = `${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

    // Update the timer display on the page
    timerDisplay.innerText = formattedTime;
}

// Function to set the timer's ready state and change the display color to red
function setReadyState() {
    isReady = true;
    timerDisplay.style.color = 'red';
}

// Function to unset the timer's ready state and change the display color back to the original color
function unsetReadyState() {
    isReady = false;
    timerDisplay.style.color = 'black';
}

// Function to save the recorded time to local storage
function saveRecordedTime(time) {
    // Retrieve the existing times from local storage or initialize an empty array
    const recordedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];

    // Add the new recorded time to the array
    recordedTimes.push(time);

    // Save the updated array of recorded times to local storage
    localStorage.setItem('recordedTimes', JSON.stringify(recordedTimes));
    console.log(localStorage);
}

// Event listener for keydown events (e.g., when the spacebar is pressed)
document.addEventListener('keydown', (event) => {
    event.preventDefault(); // Prevent the default behavior (e.g., scrolling)
    if (event.ctrlKey) return; // This is annoying

    // If the timer is not running and not ready, set the ready state
    if (!isRunning && !isReady) {
        setReadyState();
    }
    
    // If the timer is running, stop the timer
    else if (isRunning) {
        stopTimer();
        saveRecordedTime(timerDisplay.innerText);
    }
    
});

// Event listener for keyup events (e.g., when the spacebar is released)
document.addEventListener('keyup', (event) => {
    // Check if the spacebar was released
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent the default behavior (e.g., scrolling)

        // If the timer is in the ready state, unset the ready state and start the timer
        if (isReady) {
            unsetReadyState();
            startTimer();
        }
    }
});


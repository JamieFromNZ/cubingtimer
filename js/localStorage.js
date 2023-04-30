// Function to load the recorded times from local storage and display them in the list
function loadTimesFromLocalStorage() {
    // Retrieve the existing times from local storage or initialize an empty array
    const recordedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];

    // Loop through the recorded times and add each one to the list
    recordedTimes.forEach((solve) => {
        addTimeToList(solve);
    });
}

// Function to remove a solve from local storage by time number
function deleteSolveFromLocalStorage(timeNo) {
    // Retrieve the existing times from local storage or initialize an empty array
    const recordedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];

    // Filter out the solve with the matching time number
    const updatedTimes = recordedTimes.filter((solve) => solve.timeNo !== timeNo);

    // Save the updated array of recorded times to local storage
    localStorage.setItem('recordedTimes', JSON.stringify(updatedTimes));
}

// Function to update a solve's time in local storage
function updateSolveInLocalStorage(timeNo, newTime) {
    // Retrieve the existing times from local storage or initialize an empty array
    const recordedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];

    // Find the index of the solve with the matching time number
    const index = recordedTimes.findIndex((solve) => solve.timeNo === timeNo);

    // Update the time of the solve at the found index
    recordedTimes[index].time = newTime;

    // Save the updated array of recorded times to local storage
    localStorage.setItem('recordedTimes', JSON.stringify(recordedTimes));
}
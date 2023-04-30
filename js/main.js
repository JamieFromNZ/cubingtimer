document.addEventListener("DOMContentLoaded", function () {
    // Initialize your application here

});

// Function to clear local storage
function clearLocalStorage() {
    localStorage.removeItem('recordedTimes');
}

// Event listener for the "Clear Local Storage" button
document.getElementById('clear-storage-btn').addEventListener('click', clearLocalStorage);

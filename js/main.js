document.addEventListener("DOMContentLoaded", function () {
    // Initialize your application here
    loadTimesFromLocalStorage();
});

// Function to clear local storage
function clearLocalStorage() {
    localStorage.removeItem('recordedTimes');
}

// Event listener for the "Clear Local Storage" button
document.getElementById('clear-storage-btn').addEventListener('click', clearLocalStorage);

// Function to create a new list item with the time number, time, and a delete button, and add it to the times list
function addTimeToList(solve) {
    const timesList = document.getElementById('times-list');
    const listItem = document.createElement('li');

    const timeText = document.createElement('span');
    timeText.innerText = `${solve.timeNo}. ${solve.time}`;
    listItem.appendChild(timeText);

    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    const dropdownBtn = document.createElement('button');
    dropdownBtn.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
    dropdownBtn.classList.add('dropdown-btn');
    dropdown.appendChild(dropdownBtn);

    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');

    const plus2Btn = document.createElement('button');
    plus2Btn.innerText = '+2';
    plus2Btn.classList.add('plus2-btn');
    dropdownContent.appendChild(plus2Btn);

    const dnfBtn = document.createElement('button');
    dnfBtn.innerText = 'DNF';
    dnfBtn.classList.add('dnf-btn');
    dropdownContent.appendChild(dnfBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    dropdownContent.appendChild(deleteBtn);

    dropdown.appendChild(dropdownContent);
    listItem.appendChild(dropdown);
    timesList.appendChild(listItem);

    deleteBtn.addEventListener('click', () => {
        timesList.removeChild(listItem);
        deleteSolveFromLocalStorage(solve.timeNo);
    });

    plus2Btn.addEventListener('click', () => {
        if (solve.time.includes("DNF")) {
            return alert("Good luck +2ing a DNF, yeah nah you can't do that");
        }
        const newTime = addTwoSeconds(solve.time);
        timeText.innerText = `${solve.timeNo}. ${newTime}`;
        solve.time = newTime;
        updateSolveInLocalStorage(solve.timeNo, newTime);
    });

    dnfBtn.addEventListener('click', () => {
        const newTime = `DNF(${solve.time})`;
        timeText.innerText = `${solve.timeNo}. ${newTime}`;
        solve.time = newTime;
        updateSolveInLocalStorage(solve.timeNo, newTime);
    });
}

// Function to add 2 seconds to a given time string
function addTwoSeconds(time) {
    const timeParts = time.split('.');
    let seconds = parseInt(timeParts[0]);
    let milliseconds = parseInt(timeParts[1]);

    seconds += 2;

    return `${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function toggleCollapse() {
    const timesListContainer = document.getElementById("times-list-container");
    const collapseBtnContainer = document.getElementById("collapse-btn-container");
    const collapseBtn = document.getElementById("collapse-btn");
    timesListContainer.classList.toggle("collapsed");
    collapseBtnContainer.classList.toggle("collapsed");
    collapseBtn.classList.toggle("collapsed");
  }
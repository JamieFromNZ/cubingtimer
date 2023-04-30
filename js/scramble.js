function generateScramble() {
    const scrambleType = document.getElementById('scrambleType').value;
    const scrambler = new Scrambo();
    const scramble = scrambler.type(scrambleType).get(1)[0];
    displayScramble(scramble);
}

function displayScramble(scramble) {
    const scrambleElement = document.getElementById('scramble');
    scrambleElement.textContent = scramble;
}

document.addEventListener('DOMContentLoaded', () => {
    generateScramble();
});

document.getElementById('scrambleType').addEventListener('change', () => {
    generateScramble();
});
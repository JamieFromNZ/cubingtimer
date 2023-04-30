function generateScramble() {
    const scrambler = new Scrambo();
    const scramble = scrambler.get(1)[0];
    displayScramble(scramble);
}

function displayScramble(scramble) {
    const scrambleElement = document.getElementById('scramble');
    scrambleElement.textContent = scramble;
}

document.addEventListener('DOMContentLoaded', () => {
    generateScramble();
});
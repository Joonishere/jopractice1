document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersDiv = document.getElementById('lotto-numbers');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load dark mode preference from local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    generateBtn.addEventListener('click', () => {
        generateLottoNumbers();
    });

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save dark mode preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        displayNumbers([...numbers].sort((a, b) => a - b));
    }

    function displayNumbers(lottoNumbers) {
        lottoNumbersDiv.innerHTML = ''; // Clear previous numbers
        lottoNumbers.forEach(number => {
            const numberBall = document.createElement('span');
            numberBall.classList.add('lotto-number-ball');
            numberBall.textContent = number;
            lottoNumbersDiv.appendChild(numberBall);
        });
    }

    // Generate numbers on initial load
    generateLottoNumbers();
});
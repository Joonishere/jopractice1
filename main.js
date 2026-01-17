document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersDiv = document.getElementById('lotto-numbers');

    generateBtn.addEventListener('click', () => {
        generateLottoNumbers();
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
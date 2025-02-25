// Function to calculate factorial
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Handle "Enter" button click
document.getElementById('enterButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const resultScreen = document.getElementById('resultScreen');
    
    if (numberInput) {
        const factorial = calculateFactorial(parseInt(numberInput));
        resultScreen.textContent = `${numberInput}! = ${factorial}`;
    } else {
        resultScreen.textContent = 'Please enter a number.';
    }
});

// Handle dark/light mode toggle
const darkButton = document.querySelector('.btn-dark');
const lightButton = document.querySelector('.btn-light');

darkButton.addEventListener('click', function() {
    document.body.setAttribute('data-theme', 'dark');
});

lightButton.addEventListener('click', function() {
    document.body.setAttribute('data-theme', 'light');
});

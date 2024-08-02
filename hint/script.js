function showHintButton() {
    const hintButton = document.getElementById('hintButton');
    hintButton.style.display = 'block';
}
// Function to toggle calculator display
function toggleCalculator() {
    const calculator = document.getElementById('mathKeyboard');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
}

// Function to handle button clicks on the calculator
function handleButtonClick(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

// Function to handle backspace
function handleBackspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

// Function to clear the display
function handleClear() {
    const display = document.getElementById('display');
    display.innerText = 'Enter a problem...';
}
// JavaScript to toggle the calculator visibility
function toggleCalculator() {
    const calculator = document.getElementById('mathKeyboard');
    if (calculator.style.display === 'none' || calculator.style.display === '') {
      calculator.style.display = 'flex';
    } else {
      calculator.style.display = 'none';
    }
  }
  
  // Function to handle button clicks
  function handleButtonClick(value) {
    const display = document.getElementById('display');
    if (display.innerText === 'Enter a problem...') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }
  
  // Function to handle backspace
  function handleBackspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
  }
  
  // Function to clear the display
  function handleClear() {
    const display = document.getElementById('display');
    display.innerText = 'Enter a problem...';
  }
  // Function to handle submit
function handleSubmit() {
    const display = document.getElementById('display');
    const problemType = document.getElementById('problemType').value;
    const problemText = display.innerText;
  
    // Perform the necessary actions with the problemText and problemType
    console.log('Submitted Problem:', problemText);
    console.log('Problem Type:', problemType);
  
    // Hide the calculator after submission
    toggleCalculator();
  }
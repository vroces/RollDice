// This function just returns the dice roll result for testing purposes
function rollDiceLogic(sides) {
    if (isNaN(sides)) {
        return "Please select a dice type.";
    }
    return Math.floor(Math.random() * sides) + 1;  // Return only the dice result
}

// This is the function to update the DOM (used for the UI)
function rollDice() {
    const diceSelect = document.getElementById("diceSelect");
    const resultDisplay = document.getElementById("resultDisplay");

    const sides = parseInt(diceSelect.value);
    if (isNaN(sides)) {
        resultDisplay.textContent = "Please select a dice type.";
        return;
    }

    const result = rollDiceLogic(sides);  // Using the logic from the separate function
    resultDisplay.textContent = `You rolled: ${result}`;
}

function runTests() {
    // Loop through each dice side count from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Call rollDiceLogic() with the current number of sides
        let result = rollDiceLogic(i);

        // Check if the result is between 1 and i (inclusive)
        if (result < 1 || result > i) {
            throw Error(`Invalid dice result ${result} for D${i}`);
        }
    }
    
    console.log("All tests completed.");
}

// Run the tests
runTests();
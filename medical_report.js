document.addEventListener("DOMContentLoaded", function () {
    const rbcCountInput = document.getElementById("rbcCount");
    const wbcCountInput = document.getElementById("wbcCount");
    const hematocritInput = document.getElementById("hematocrit");
    const hemoglobinInput = document.getElementById("hemoglobin");
    const redBloodCellIndicesInput = document.getElementById("redBloodCellIndices");
    const calculateButton = document.getElementById("calculate-button");
    const resetButton = document.getElementById("reset-button");

    calculateButton.addEventListener("click", function () {
        // Get values from user input
        const rbcCount = parseFloat(rbcCountInput.value);
        const wbcCount = parseFloat(wbcCountInput.value);
        const hematocrit = parseFloat(hematocritInput.value);
        const hemoglobin = parseFloat(hemoglobinInput.value);
        const redBloodCellIndices = parseFloat(redBloodCellIndicesInput.value);

        // You can perform calculations and recommendations here based on the input values
        // Example: Check if values are within the normal range and display a message

        if (rbcCount >= 4.5 && rbcCount <= 6.0 &&
            wbcCount >= 4000 && wbcCount <= 11000 &&
            hematocrit >= 38 && hematocrit <= 52 &&
            hemoglobin >= 12.5 && hemoglobin <= 16.5 &&
            redBloodCellIndices >= 80 && redBloodCellIndices <= 100) {
            alert("Your results are within the normal range.");
        } else {
            alert("Your results are outside the normal range. Please consult a healthcare professional.");
        }
    });

    resetButton.addEventListener("click", function () {
        // Reset all input fields
        rbcCountInput.value = "";
        wbcCountInput.value = "";
        hematocritInput.value = "";
        hemoglobinInput.value = "";
        redBloodCellIndicesInput.value = "";
    });
});

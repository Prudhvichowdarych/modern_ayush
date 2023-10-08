document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const calculateButton = document.getElementById("calculate-button");
    const resetButton = document.getElementById("reset-button");
    const bmiResult = document.getElementById("bmi-result");
    const bmiValue = document.getElementById("bmi-value");
    const recommendations = document.getElementById("recommendations");

    calculateButton.addEventListener("click", function () {
        // Get height and weight values from user input
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Calculate BMI
        const bmi = calculateBMI(height, weight);

        // Display BMI result and recommendations
        bmiValue.textContent = `Your BMI: ${bmi.toFixed(2)}`;

        recommendations.textContent = getRecommendations(bmi);

        // Show the result
        bmiResult.classList.remove("hidden");
    });

    resetButton.addEventListener("click", function () {
        // Reset input fields and hide the result
        heightInput.value = "";
        weightInput.value = "";
        bmiResult.classList.add("hidden");
    });

    // BMI Calculation function
    function calculateBMI(height, weight) {
        return weight / (height * height);
    }

    // Recommendations based on BMI
    function getRecommendations(bmi) {
        if (bmi < 18.5) {
            return "You are underweight. Consider increasing your calorie intake and consult a nutritionist.";
        } else if (bmi < 24.9) {
            return "Your BMI is in the healthy range. Maintain a balanced diet and regular exercise.";
        } else if (bmi < 29.9) {
            return "You are overweight. Focus on portion control and engage in regular physical activity.";
        } else {
            return "You are obese. Consult a healthcare professional for personalized advice.";
        }
    }
});

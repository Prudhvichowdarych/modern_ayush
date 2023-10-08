document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById("chat-body");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to add a message to the chat
    function addMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
    }

    // Function to handle user input
    function handleUserInput() {
        const userMessage = userInput.value.trim();

        if (userMessage !== "") {
            // Add user's message to the chat
            addMessage(userMessage, "user");

            // Clear the user input field
            userInput.value = "";

            // Simulate chatbot responses
            setTimeout(() => {
                // Check user's response
                if (userMessage === "1") {
                    // Ask for the name of the herb
                    addMessage("Please enter the name of the herb you want to know about.", "chatbot");
                } else if (userMessage === "2") {
                    // Open the medical report entry webpage
                    window.open("medical_report_entry.html", "_blank");
                } else if (userMessage === "3") {
                    // Open the fitness routines webpage
                    window.open("fitness_routines.html", "_blank");
                } else if (userMessage === "4") {
                    // Ask the user to enter a disease name
                    addMessage("Please enter the name of the disease you want recommendations for.", "chatbot");
                } else if (userMessage === "5") {
                    window.open("natural_tips.html","_blank");
                }else if (userMessage === "6") {
                    window.open("yogaasanas.html","_blank");
                }else if (userMessage === "7") {
                    window.open("enquiries.html","_blank");
                }else {
                    // Fetch herb and disease data from JSON files
                    fetch("herb.json")
                        .then(response => response.json())
                        .then(herbData => {
                            const herbInfo = herbData[userMessage.toLowerCase()];

                            if (herbInfo) {
                                addMessage(`Here is information about ${userMessage}:`, "chatbot");
                                addMessage(`Uses: ${herbInfo.uses}`, "chatbot");
                                addMessage(`How to Use: ${herbInfo.howToUse}`, "chatbot");
                                addMessage(`Side Effects: ${herbInfo.sideEffects}`, "chatbot");
                            } else {
                                fetch("disease_recommendations.json")
                                    .then(response => response.json())
                                    .then(diseaseData => {
                                        const diseaseInfo = diseaseData.diseases.find(disease => disease.name.toLowerCase() === userMessage.toLowerCase());

                                        if (diseaseInfo) {
                                            addMessage(`Here are recommendations for ${diseaseInfo.name}:`, "chatbot");
                                            addMessage(`Symptoms: ${diseaseInfo.symptoms}`, "chatbot");
                                            addMessage(`Causes: ${diseaseInfo.causes}`, "chatbot");
                                            addMessage(`Treatment: ${diseaseInfo.treatment}`, "chatbot");
                                            addMessage("Recommendations:", "chatbot");
                                            diseaseInfo.recommendations.forEach(recommendation => {
                                                addMessage(`- ${recommendation}`, "chatbot");
                                            });
                                        } else {
                                            addMessage("Sorry, I don't have information about that herb or disease.", "chatbot");
                                        }
                                    })
                                    .catch(error => {
                                        console.error("Error fetching disease data:", error);
                                        addMessage("Sorry, there was an error fetching disease data.", "chatbot");
                                    });
                            }
                        })
                        .catch(error => {
                            console.error("Error fetching herb data:", error);
                            addMessage("Sorry, there was an error fetching herb data.", "chatbot");
                        });
                }
            }, 1000); // Simulate a delay for the chatbot's response
        }
    }

    // Handle user input when the send button is clicked
    sendButton.addEventListener("click", handleUserInput);

    // Handle user input when Enter key is pressed
    userInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            handleUserInput();
        }
    });

    // Initial greeting from the chatbot
    setTimeout(() => {
        addMessage("Hello! I'm your chatbot. How can I assist you today?", "chatbot");
        addMessage("Select an Option:", "chatbot");
        addMessage("1. Uses of a Herb", "chatbot");
        addMessage("2. Medical Report", "chatbot");
        addMessage("3. Fitness Routines", "chatbot");
        addMessage("4. Disease Recommendation", "chatbot");
        addMessage("5. Natural Tips", "chatbot");
        addMessage("6. Yoga Asanas", "chatbot");
        addMessage("7. Enquiry Form", "chatbot");
    }, 1000); // Simulate a delay for the initial greeting
});

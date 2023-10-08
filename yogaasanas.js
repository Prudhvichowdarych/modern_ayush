document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const asanaDetails = document.getElementById("asana-details");
    const asanaImage = document.getElementById("asana-image");
    const asanaName = document.getElementById("asana-name");
    const asanaDirections = document.getElementById("asana-directions");
    const asanaBenefits = document.getElementById("asana-benefits");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();

        // You can replace this with your own data source or API for yoga asanas
        // For now, we'll use a sample data object for demonstration
        const asanasData = {
            "downward_dog": {
                name: "Downward Dog Pose",
                image: "downward_dog.jpg",
                directions: "To do the Downward Dog Pose, follow these directions...",
                benefits: "This pose helps stretch and strengthen various muscles...",
            },
            // Add more yoga asanas here
        };

        const asana = asanasData[searchTerm.toLowerCase()];

        if (asana) {
            asanaImage.src = asana.image;
            asanaName.textContent = asana.name;
            asanaDirections.textContent = `Directions: ${asana.directions}`;
            asanaBenefits.textContent = `Benefits: ${asana.benefits}`;
            asanaDetails.style.display = "block";
        } else {
            alert("Yoga asana not found. Please try another search term.");
        }
    });
});

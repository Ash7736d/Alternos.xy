// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the popup trigger element
    var popupTrigger = document.getElementById("popup-trigger");
    
    // Get the popup card element
    var popupCard = document.getElementById("popup-card");

    // Add a click event listener to the popup trigger element
    popupTrigger.addEventListener("click", function() {
        // Toggle the visibility of the popup card by adding/removing the 'show' class
        popupCard.classList.toggle("show");
    });

    // Get the close button element
    var closeButton = document.getElementById("close-btn");

    // Add a click event listener to the close button
    closeButton.addEventListener("click", function() {
        // Remove the 'show' class from the popup card to hide it
        popupCard.classList.remove("show");
    });

    // Add event listener to the button to navigate to the main directory
    document.getElementById('shopButton').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action
      window.location.href = '../index.html'; // Navigate to the index.html in the main directory
    });
});

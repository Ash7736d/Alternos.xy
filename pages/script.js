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

    // Set the date we're counting down to
    var countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the element with id "countdown"
        document.getElementById("countdown").innerHTML = "In " + days + "𝗱 " + hours + "𝗵 " + minutes + "𝗺 " + seconds + "𝘀 ";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});

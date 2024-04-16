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

// Set the date for the countdown (April 25)
const countDownDate = new Date("Apr 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

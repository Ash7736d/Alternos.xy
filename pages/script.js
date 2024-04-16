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

// Set the countdown date (May 15, 2024)
var countdownDate = new Date("May 15, 2024 00:00:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countdownDate - now;

  // If the countdown is over, display the "Buy" button
  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdownButton").innerHTML = "Buy";
  } else {
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown inside the button
    document.getElementById("countdownButton").innerHTML = days + "d, " + hours + "h, " + minutes + "m, " + seconds + "s";
  }
}, 1000);

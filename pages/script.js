// Add event listener to the button to navigate to the main directory
document.getElementById('shopButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  window.location.href = '../index.html'; // Navigate to the index.html in the main directory
});

// Get the elements
const popupTrigger = document.getElementById('popup-trigger');
const popupCard = document.getElementById('popup-card');
const closeBtn = document.getElementById('close-btn');

// Function to toggle the popup card
function togglePopup() {
    popupCard.style.display = popupCard.style.display === 'block' ? 'none' : 'block';
}

// Add event listener to the trigger element
popupTrigger.addEventListener('click', togglePopup);

// Add event listener to the close button
closeBtn.addEventListener('click', togglePopup);

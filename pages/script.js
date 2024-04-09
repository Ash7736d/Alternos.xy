// Add event listener to the button to navigate to the main directory
document.getElementById('shopButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  window.location.href = '../index.html'; // Navigate to the index.html in the main directory
});

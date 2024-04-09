// Add event listener to the button to navigate to the shop page
document.getElementById('homeButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  window.location.href = 'index.html';
});

// Array to keep track of redeemed codes
const redeemedCodes = [];

document.querySelector('.rainbow-hover').addEventListener('click', function() {
  const inputCode = document.querySelector('.input').value.trim(); // Get input value and remove leading/trailing spaces
  const responseElement = document.querySelector('.response');

  // Create a loader element
  const loader = document.createElement('div');
  loader.className = 'loader';

  // Append the loader to the response element
  responseElement.textContent = ''; // Clear the response element
  responseElement.appendChild(loader);

  // Delay showing the original message for 3 seconds
  setTimeout(function() {
    if (inputCode === "") {
      responseElement.textContent = 'Input cannot be empty!'; // Show error message if input field is empty
      responseElement.style.color = 'white';
    } else {
      // Check if the input code is among the available codes
      if (codes.includes(inputCode)) {
        // Check if the code has already been redeemed
        if (!redeemedCodes.includes(inputCode)) {
          redeemedCodes.push(inputCode); // Mark the code as redeemed
          responseElement.textContent = 'Redeemed successfully! 🎉';
          responseElement.style.color = 'white';
          document.getElementById("popup").style.display = "block"; // Show the pop-up
          
          // Send the input code to be stored
          storeUserData(inputCode);
        } else {
          responseElement.textContent = 'The code has already been redeemed!'; // Show error message if code has already been redeemed
          responseElement.style.color = 'white';
        }
      } else {
        responseElement.textContent = 'Incorrect code!'; // Show error message if code is incorrect
        responseElement.style.color = 'white';
      }
    }

    // Adjust the position of the response messages
    responseElement.style.marginLeft = '45px'; // Move the message 45px to the right
  }, 3000); // 3 seconds delay
});

// Function to store user input
function storeUserData(input) {
  fetch('/storeUserData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userInput: input })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // You can handle the response from the server here if needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors if the request fails
  });
}

// Close the popup when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById("popup").style.display = "none";
});

// Add event listener to the button to navigate to the shop page
document.getElementById('shopButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  window.location.href = 'pages/shop.html';
});

// Initialize previous day and month
let prevDay = '';
let prevMonth = '';

// Function to update date & time
function updateDateTime() {
  // Check if last updated time is stored in localStorage
  const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');
  const now = new Date();
  
  // Check if last updated time exists and if it's been less than 5 minutes since the last update
  if (lastUpdatedTime && now.getTime() - parseInt(lastUpdatedTime) < 5 * 60 * 1000) {
    // If less than 5 minutes, display the last updated time
    const lastUpdatedDate = new Date(parseInt(lastUpdatedTime));
    document.getElementById('local-time').textContent = lastUpdatedDate.toLocaleTimeString();
    document.getElementById('local-day').textContent = lastUpdatedDate.toLocaleDateString(undefined, { weekday: 'long' });
    document.getElementById('local-month').textContent = lastUpdatedDate.toLocaleDateString(undefined, { month: 'long' });
  } else {
    // If more than 5 minutes, update the time
    const options = { weekday: 'long', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
    const localTime = now.toLocaleString('en-US', options);
    document.getElementById('local-time').textContent = localTime;
    document.getElementById('local-day').textContent = now.toLocaleDateString(undefined, { weekday: 'long' });
    document.getElementById('local-month').textContent = now.toLocaleDateString(undefined, { month: 'long' });

    // Store the current time in localStorage
    localStorage.setItem('lastUpdatedTime', now.getTime().toString());
  }
}

// Initial call to update date and time
updateDateTime();

// Update date and time every 5-10 minutes
setInterval(updateDateTime, Math.floor(Math.random() * (10 - 5 + 1)) + 5 * 60 * 1000);

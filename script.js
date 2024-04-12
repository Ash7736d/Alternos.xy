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
      responseElement.textContent = '𝗜𝗡𝗣𝗨𝗧 𝗖𝗔𝗡𝗡𝗢𝗧 𝗕𝗘 𝗘𝗠𝗣𝗧𝗬!'; // Show error message if input field is empty
      responseElement.style.color = 'white';
    } else {
      // Check if the input code is among the available codes
      if (codes.includes(inputCode)) {
        // Check if the code has already been redeemed
        if (!redeemedCodes.includes(inputCode)) {
          redeemedCodes.push(inputCode); // Mark the code as redeemed
          responseElement.textContent = '𝗥𝗘𝗗𝗘𝗘𝗠𝗘𝗗 𝗦𝗨𝗦𝗦𝗘𝗦𝗙𝗨𝗟𝗟𝗬! 🎉';
          responseElement.style.color = 'white';
          document.getElementById("popup").style.display = "block"; // Show the pop-up
        } else {
          responseElement.textContent = '𝗧𝗛𝗘 𝗖𝗢𝗗𝗘 𝗛𝗔𝗦 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗕𝗘𝗘𝗡 𝗥𝗘𝗗𝗘𝗘𝗠𝗘𝗗!'; // Show error message if code has already been redeemed
          responseElement.style.color = 'white';
        }
      } else {
        responseElement.textContent = '𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧 𝗖𝗢𝗗𝗘❌';
        responseElement.style.color = 'white';
      }
    }

    // Adjust the position of the response messages
    responseElement.style.marginLeft = '45px'; // Move the message 45px to the right
  }, 5000); // 5 seconds delay
});

// Close the popup when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById("popup").style.display = "none";
});

// Add event listener to the button to navigate to the shop page
document.getElementById('shopButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  window.location.href = 'pages/shop.html';
});

// Function to update data & time
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
  const localTime = now.toLocaleString('en-US', options);

  const day = now.toLocaleString('en-US', { weekday: 'long' });
  const month = now.toLocaleString('en-US', { month: 'long' });

  document.getElementById('lastUpdatedTime').textContent = localTime; // Update ID to 'lastUpdatedTime'
}

// Initial call to update date and time
updateDateTime();

// Update date and time every 5-10 minutes
setInterval(updateDateTime, Math.floor(Math.random() * (10 - 5 + 1)) + 5 * 60 * 1000);

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
      responseElement.textContent = '𝙄𝙣𝙥𝙪𝙩 𝙛𝙞𝙚𝙡𝙙 𝙘𝙖𝙣𝙣𝙤𝙩 𝙗𝙚 𝙚𝙢𝙥𝙩𝙮! ⚠️'; // Show error message if input field is empty
      responseElement.style.color = 'white';
    } else {
      // Check if the input code has already been redeemed by the user
      const redeemedCodes = localStorage.getItem('redeemedCodes') ? JSON.parse(localStorage.getItem('redeemedCodes')) : [];
      if (redeemedCodes.includes(inputCode)) {
        responseElement.textContent = '𝙏𝙝𝙞𝙨 𝙘𝙤𝙙𝙚 𝙝𝙖𝙨 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙧𝙚𝙙𝙚𝙚𝙢𝙚𝙙! ❌'; // Show error message if code has already been redeemed
        responseElement.style.color = 'red';
      } else {
        // Mark the code as redeemed for this user
        redeemedCodes.push(inputCode);
        localStorage.setItem('redeemedCodes', JSON.stringify(redeemedCodes));

        // Proceed with redemption logic
        if (inputCode === 'TEST') {
          responseElement.textContent = '𝙎𝙪𝙨𝙨𝙚𝙨𝙛𝙪𝙡𝙡𝙮 𝙍𝙚𝙙𝙚𝙚𝙢𝙚𝙙! 🎉';
          responseElement.style.color = 'green';

          // Show the popup card message
          document.getElementById("popup").style.display = "block";
        } else {
          responseElement.textContent = '𝙄𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩 𝙘𝙤𝙙𝙚! ❌';
          responseElement.style.color = 'red';
        }
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

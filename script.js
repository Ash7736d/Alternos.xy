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
      responseElement.textContent = '𝗜𝗡𝗣𝗨𝗧 𝗙𝗜𝗘𝗟𝗗 𝗖𝗔𝗡𝗡𝗢𝗧 𝗕𝗘 𝗘𝗠𝗣𝗧𝗘𝗗𝗬!'; // Show error message if input field is empty
      responseElement.style.color = 'white';
    } else {
      // Define your secret codes
      const secretCodes = [process.env.REDEEM_CODE1, process.env.REDEEM_CODE2]; // Replace process.env.REDEEM_CODE1 and process.env.REDEEM_CODE2 with your actual secret names
      
      // Check if the input code matches any of the secret codes
      // Show the popup card message immediately
        document.getElementById("popup").style.display = "block";
      if (secretCodes.includes(inputCode)) {
        responseElement.textContent = '𝗥𝗘𝗗𝗘𝗘𝗠𝗘𝗗 𝗦𝗨𝗦𝗦𝗘𝗦𝗙𝗨𝗟𝗟𝗬! 🎉';
        responseElement.style.color = 'white';
        
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

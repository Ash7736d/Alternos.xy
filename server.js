// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/storeUserData', (req, res) => {
  const { userInput } = req.body;
  fs.appendFile('user_data.txt', userInput + '\n', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('User input data written to file');
      res.status(200).send('User input data stored successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

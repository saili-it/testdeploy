const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Hamid 🚀 Running from Docker on Ubuntu VM!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

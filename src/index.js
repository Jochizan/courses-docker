const express = require('express');

const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('<h2>Hi there!!! Dx</h2>');
});

app.listen(PORT, () => {
  console.log('Server up');
  console.log('Application http://localhost:%d', PORT);
});

const express = require('express');

const app = express();

app.get('/health-checkup', function(req, res) {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "arrow" || password != "pas") {
    res.status(400).json("Something's up with Inputs");
    return;
  }

  if (kidneyId != '1' && kidneyId != '2') {
    res.status(400).json("Something's up with kidneyId");
    return;
  }

  res.json({ message: 'Your kidney is fine' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
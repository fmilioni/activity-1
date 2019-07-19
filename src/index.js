const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/sum', (req, res) => {
  const { x, y } = req.body;

  res.json({
    result: x + y,
  });
});

// sub

// mul

// div

app.listen(3001, () => {
  console.log('Server started!');
});

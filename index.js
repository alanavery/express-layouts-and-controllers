let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('This is the home page.');
});

app.listen(8000, () => console.log('The server is up and running!'));
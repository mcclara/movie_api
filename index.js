const express = require('express');
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/movies', (req, res) => {
  res.json(top10movies);
});

app.get('/', (req, res) => {
  res.send('Welcome to MyMovieConnect!');
});

app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});

// Should connet to the documentation file
app.use(express.static('public'));

//Will work if there is an error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

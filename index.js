const express = require('express');
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/movies', (req, res) => {
  res.json(movies);
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

let movies = [
  {
    title: "Black Panther",
    year: 2018,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: "PG-13",
    runtime: "2 h 14min",
    director: "Ryan Coogler",
    starring: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Guria", "Martin Freeman", "Daniel Kaluuya", "Letitia Wright", "Winston Duke", "Angela Bassett", "Forest Whitaker"],
    synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
  },

  {
    title: "Wonder Woman",
    year: 2017,
    genre: ["Action", "Adventure", "Fantasy"],
    rating: "PG-13",
    runtime: "2h 21min",
    director: : "Patty Jenkins",
    starring: ["Gal Gadot", "Chris Pine", "Connie Nielson", "Robin Wright"],
    synopsis: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
  },

  {
    title: "Step Brothers",
    year: 2008,
    genre: "Comedy",
    rating: "R",
    runtime: "1h 38min",
    director: "Adam McKay",
    starring: ["Will Ferell", "John C. Reilly",  "Mary Steenburgen", "Richard Jenkins"],
    synopsis: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry."
  },

  {
    title: "Friday After Next",
    year: 2002,
    genre: ["Comedy", "Drama"],
    rating: "R",
    runtime: "1h 25min",
    director: "Marcus Raboy",
    starring: ["Ice Cube", "Mike Epps", "John Witherspoon", "Don D.C. Curry", "Anna Maria Horsford", "Kat Willams", "Terry Crews"],
    synopsis: "Working as security guards, Craig and Day-Day run into the thief who stole their Christmas presents."
  },

  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: ["Animation", "Action", "Adventure"],
    rating: "PG",
    runtime: "1h 57min",
    directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    starring: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "	Mahershala Ali"],
    synopsis: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
  },

  {
    title: "The Equalizer",
    year: 2014,
    genre: ["Action", "Crime", "Thriller"],
    rating: "R",
    runtime: "2h 12min",
    directors: ["Antoine Fuqua"],
    starring: ["Denzel Washington", "Marton Csokas", "Chloë Grace Moretz"],
    synopsis: "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters."
  },

  {
    title: "Hotel Rwanda",
    year: 2004,
    genre: ["Biography", "Drama", "History"],
    rating: "PG 13",
    runtime: "2h 1min",
    director: "Terry George",
    starring: [" Don Cheadle", "Sophie Okonedo", "Joaquin Phoenix"],
    synopsis: "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa."
  },

  {
    title: "Girls Trip",
    year: 2017,
    genre: ["Adventure", "Comedy", "Drama"],
    rating: "R",
    runtime: "2h 2min",
    director: "Malcolm D. Lee",
    starring: ["Regina Hall", "Queen Latifah", "Jada Pinkett Smith", "Tiffany Haddish", "Larenz Tate"],
    synopsis: "When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there's enough dancing, drinking, brawling and romancing to make the Big Easy blush."
  },

  {
    title: "Straight Outta Compton",
    year: 2015,
    genre: ["Biography", "Drama", "History"],
    rating: "R",
    runtime: "2h 27min",
    director: "F. Gary Gray",
    starring: ["O'Shea Jackson Jr.", "Corey Hawkins", "Jason Mitchell", "Neil Brown Jr."],
    synopsis: "The rap group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood."
  },

  {
    title: "Poetic Justice",
    year: 1993,
    genre: ["Drama", "Romance"],
    rating: "R",
    runtime: "1h 49min",
    director: "John Singleton",
    starring: ["Janet Jackson", "Tupac Shakur", "Regina King", "Joe Torry"],
    synopsis: "In this movie, we see the world through the eyes of main character Justice (Janet Jackson), a young African-American poet. A mail carrier invites a few friends along for a long overnight delivery run."
  }
]

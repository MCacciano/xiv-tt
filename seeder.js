import fs from 'fs';

// this will fetch all cards from the api and update the main cards.json file try not
// to use this too much so we don't abuse api privileges or make breaking changes to our app
try {
  const response = await fetch('https://triad.raelys.com/api/cards');
  const data = await response.json();

  fs.writeFile('_data/cards.json', JSON.stringify(data.results), 'utf8', err => {
    if (err) {
      console.log('err', err);
    }

    console.log('Cards have been successfully saved to JSON file');
  });
} catch (err) {
  console.log('err', err);
}


// Requier the fetchBreedDescription from the .breedFetcher.js file
const { fetchBreedDescription } = require('./breedFetcher');

// Get the breedName from the command-line argument
const breedName = process.argv[2];

// Call the fetchBreedDescription function with the breedName and a callback fucntion
fetchBreedDescription(breedName, (error, description) => {
  // Check if there is an error
  if (error) {
    // Log the error if there is one
    console.log('Error fetching details:', error);
  } else {
    // Log the breed description if there is no error
    console.log(description);
  }
});


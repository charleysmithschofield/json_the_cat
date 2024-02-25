// Require the request library
const request = require('request');

// Define the API endpoint URL
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

// Define the fetchBreedDescription function
const fetchBreedDescription = function(breedName, callback) {
  // Construct the API endpoint URL with the breed name
  const apiURLWithBreed = apiUrl + breedName;

  // Use the `request` library to make a GET request to the API endpoint
  request(apiURLWithBreed, (error, response, body) => {
    // if there is an error or if the response statusCode is not 200 (200 = everything's ok)
    if (error || response.statusCode !== 200) {
      // Pass error and null as arguments to the callback function
      callback(error || `Status Code: ${response.statusCode}`, null);
    } else {
      // Parse the JSON string into an object
      const data = JSON.parse(body);
      
      // Check if data array is empty
      if (data.length === 0) {
        // Pass null for error and 'Breed not found.' as the description to the callback function
        callback('Breed not found.', null);
      } else {
        // Pass null for error and the description from the data as the description to the callback function
        callback(null, data[0].description);
      }
    }
  });
};

// Export the fetchBreedDescription function
module.exports = { fetchBreedDescription };
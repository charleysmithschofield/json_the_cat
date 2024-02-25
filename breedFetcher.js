
/*
Implmenting in Node:

Write the logic to fetch the Siberian data from the API endpoint
using request
*/


/*
Steps:

1. Requite the request library.
2. Define the API endpoint URL.
3. Get the breed name from command-line arguments.
4. Use the `request` library to make a GET request to the API endpoint.
5. If there is an error or if the response statusCode is not 200 (200 = everything's ok)
  5a. Print the error
  5b. If no error, log the body and the typeof body (should be a string type).
6. Use JSON.parse to convert the JSON string into an object.
7. Check if data array is empty, return 'Breed not found.'
  7a. If breed is found, access the first entry in the data array and print out the description for the user.
*/

// Require the request library
const request = require('request');

// Define the API endpoint URL
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

// Get the breed name from command-line arguments
const breedName = process.argv[2];

// Construct the API endpoint URL with the breed name
const apiURLWithBreed = apiUrl + breedName;

// Use the `request` library to make a GET request to the API endpoint
request(apiURLWithBreed, (error, response, body) => {
  // if there is an error or if the response statusCode is not 200 (200 = everything's ok)
  if (error || response.statusCode !== 200) {
    // print the error
    console.log('Error:', error || `Status Code: ${response.statusCode}`);
  } else {
    // if no error, log the body and the typeof body
    console.log('Body:', body);
    console.log('Type of Body:', typeof body); // its a string type

    // Use JSON.parse to convert the JSON string into an object
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);

    // Check if data array is empty, return 'Breed not found.'
    if (data.length === 0) {
      console.log('Breed not found.');
    } else {
      // Access the first entry in the data array and print out the description for the user.
      console.log('Description of the first entry:', data[0].description);
    }
  }
});

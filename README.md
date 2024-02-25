# Breed Details Fetcher

## Goal:

  Build a command line app that makes it "easy" for users to query this cat information based dataset from the terminal.

  Users can provide any breed name, causing the application to fetch the information from the API and print out a short description of that breed.

## Steps:

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

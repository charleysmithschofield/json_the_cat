// Let's add a basic test:

// Require fetchBreedDecription from the breedFetcher.js file
const { fetchBreedDescription } = require('../breedFetcher');
// Require assert from chai
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // We expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // Compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for an invalid/non-existent breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreed', (err, desc) => {
      // We expect an error for this scenario
      assert.isNotNull(err);

      // We expect description to be null
      assert.isNull(desc);

      done();
    });
  });
});
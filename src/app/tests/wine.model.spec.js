'use strict';

// import the `mongoose` helper utilities
let utils = require('./utils');
import chai from 'chai';
let should = chai.should();

// import our `Wine` mongoose model
import Wine from '../app/models/wine/wine.model';

describe('Wine: models', () => {

  describe('create()', () => {

    it('should create a new Wine', (done) => {

      // Create a `Wine` object to pass to `Wine.create()``
      let t = {

        text: 'Write better tests... <.<'
      };

      Wine.create(t, (err, createdWine) => {

        // Confirm that that an error does not exist
        should.not.exist(err);

        // verify that the returned `Wine` is what we expect
        createdWine.text.should.equal('Write better tests... <.<');

        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});

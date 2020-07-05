let _ = require('lodash');
const TestData = require('../models/testdata');
// const Chart2 = require('../models/chart2');

/**
 * Fetch chart information
 *
 * @param req
 * @param res
 * @param next
 */
exports.fetchTestData = function (req, res, next) {
  TestData.find({})
    .select({})
    .exec(function (err, tdata) {
      if (err) {
        console.log(err);
        return res.status(422).json({
          message: 'Error! Could not retrieve data.',
        });
      }
      res.json(tdata);
    });
};

let _ = require('lodash');
const typePhoto = require('../models/testdata');
// const Chart2 = require('../models/chart2');

/**
 * Fetch chart information
 *
 * @param req
 * @param res
 * @param next
 */
exports.fetchTypePhoto = function (req, res, next) {
  typePhoto.find({
    "Type": "Photo"
  }, {
    "Type": 1,
    "Post Message": 1,
    "Lifetime Post Total Reach": 1,
    "Lifetime Post organic reach": 1,
    "Lifetime Post Paid Reach": 1,
    "Lifetime Post Total Impressions": 1,
    "Lifetime Post Organic Impressions": 1,
    "Lifetime Post Paid Impressions": 1,
    "Lifetime Engaged Users": 1,
    "Lifetime Post Stories by action type - share": 1,
    "Lifetime Post Stories by action type - like": 1,
    "Lifetime Post Stories by action type - comment": 1
  })
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


// db.testdata.find({
//   "Type": "Video"
// }, {
//   "Type": 1,
//   "Posted": 1
// });
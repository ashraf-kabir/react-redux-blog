let _ = require('lodash');
const Chart = require('../models/chart');
const Chart2 = require('../models/chart2');

/**
 * Fetch chart information
 *
 * @param req
 * @param res
 * @param next
 */
exports.fetchCharts = function(req, res, next) {

  // Return chart info
  // const chart = ({
  //   month_data: req.charts.month_data,
  //   number_of_posts_data: req.charts.number_of_posts_data,
  // });
  // res.send({
  //   chart: chart
  // });

  Chart
    .find({})
    .select({})
    .exec(function(err, charts) {
      if (err) {
        console.log(err);
        return res.status(422).json({
          message: 'Error! Could not retrieve charts.'
        });
      }
      res.json(charts);
    });
};

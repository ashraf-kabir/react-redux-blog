const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const chart2Schema = new Schema({
    month2: String,
    number_of_posts2: Number
}, { collection : 'chart2' });
  
// Create the model class
const ModelClass = mongoose.model('chart2', chart2Schema);

// Export the model
module.exports = ModelClass;
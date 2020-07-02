const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const chartSchema = new Schema({
    month: String,
    number_of_posts: Number
}, { collection : 'charts' });
  
// Create the model class
const ModelClass = mongoose.model('chart', chartSchema);

// Export the model
module.exports = ModelClass;
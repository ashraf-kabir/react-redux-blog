const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const chartSchema = new Schema({}, { collection : 'testdata2' });
  
// Create the model class
const ModelClass = mongoose.model('testdata2', chartSchema);

// Export the model
module.exports = ModelClass;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // Additional student details can be added here
});

module.exports = mongoose.model('students', StudentSchema);

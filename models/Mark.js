const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarkSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'students',
    required: true
  },
  ratings: [{
    type: Number,
    required: true
  }]
});

module.exports = mongoose.model('marks', MarkSchema);

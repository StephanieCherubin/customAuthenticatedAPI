const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  createdAt       : { type: Date },
  updatedAt       : { type: Date },
  name: { type: String, required: true },
  date: Date,
  idreservation: [{type: Schema.Types.ObjectId, ref: 'post'}]
})

module.exports = mongoose.model('Comment', CommentSchema)
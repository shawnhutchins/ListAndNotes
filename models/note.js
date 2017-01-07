'use strict';

//grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  name: String,
  note: String,

  created_at: Date,
  updated_at: Date

});


noteSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});


var Note = mongoose.model('Note', noteSchema);

module.exports = Note;

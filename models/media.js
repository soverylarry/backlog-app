const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: new Date(Date.now()) }
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
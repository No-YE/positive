const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postThankSchema = new Schema({
    writer: String,
    content: [String],
    date: {type: Date, default: Date.now}
});
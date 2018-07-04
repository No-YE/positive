const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postPraiseSchema = new Schema({
    writer: String,
    content: [String],
    date: {type: Date, default: Date.now}
});
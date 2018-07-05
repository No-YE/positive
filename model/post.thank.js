const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postThankSchema = new Schema({
    projectID: {
        type: String
    },
    writer: {
        type: String
    },
    content: {
        type: [String]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("thank", postThankSchema);
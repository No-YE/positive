const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
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

postThankSchema.plugin(autoIncrement.plugin, {
    model: "thank",
    field: "projnum",
    startAt: 1
});

module.exports = mongoose.model("thank", postThankSchema);
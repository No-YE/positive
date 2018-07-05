const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectID: {
        type: String,
        unique: true
    },
    user: {
        type: String
    },
    resolution: {
        type: String
    },
    term: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("project", ProjectSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    id: String,
    pw: String
});

module.exports = mongoose.model('user', userSchema);
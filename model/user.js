const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        match: [/^.{1,10}$/, "Should be 1~10 characters!"],
        trim: true
    },
    id:  {
        type: String,
        required: [true, "ID is required!"],
        match: [/^.{6,15}$/, "Should be 6~15 characters!"],
        unique: true,
        trim: true
    },
    pw: {
        type: String,
        required: [true, "PW is required!"],
        match: [/^.{6,15}$/, "Should be 6~15 characters!"],
        trim: true,
        select: false
    }
});

module.exports = mongoose.model('user', userSchema);
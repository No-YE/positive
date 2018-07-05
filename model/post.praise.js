const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postPraiseSchema = new Schema({
    projectID: {
        type: String
    }, 
    writer:{
        type: String
    },
    content:  {
        type: [String]
    },
    date: {
        type: Date, 
        default: Date.now
    }
});
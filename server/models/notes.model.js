const mongoose = require('../config/connection.mongo');
const Schema = mongoose.Schema;

const NotesSchema = new Schema(
    {
        user: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        
    },
    { versionKey: false }
);

module.exports = Game = mongoose.model('user_notes', NotesSchema);
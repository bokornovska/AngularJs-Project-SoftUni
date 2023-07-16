const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    petName: {
        type: String,
        minLength: [2, 'Name must be at least 2 characters'],
        required: [true, 'Name is required'],
    },
    image: {
        type: String,
        match: [/^https?:\/\//, 'Invalid url'],
        required: [true, 'Image is required']
    },
    location: {
        type: String,
        minLength: [5, 'The location must be at least 5 characters long'],
        maxLength: [15, 'The location must be no more than 15 characters long'],
        required: [true, 'Location is required']
    },
    years: {
        type: String,
        required: [true, 'Years is required'],
    },
    type: {
        type: String,
        minLength: [3, 'Type must be at least 3 characters'],
        required: [true, 'Type is required'],
    },    
    description: {
        type: String,
        minLength: [5, 'The description must be at least 5 characters long'],
        maxLength: [50, 'The description must be no more than 50 characters long'],
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }]
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
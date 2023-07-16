const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const petSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true
    },
    petImage: {
        type: String,
        validate: {
            validator: function (v) {
                // Regular expression to validate URL format
                return /^(http|https):\/\/[^ "]+$/.test(v);
            },
            message: 'Invalid URL format for the image field'
        }
    },
    location: {
        type: String,
        required: true
    },
    years: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Pet', petSchema);

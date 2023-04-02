const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true, // for creating indexes
    },
    email: { 
        type: String, 
        required: true,
    },
    type: { // "Individual" | "Group"
        type: String, 
        required: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    posts: {
        type: Array,
        required: false,
    }
});

mongoose.model("user", userSchema);
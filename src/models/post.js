const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const postSchema = mongoose.Schema({
    title: { 
        type: String,
        required: true,
    },
    description: { 
        type: String, 
        required: true,
    },
    created_by: { 
        type: ObjectId, 
        required: false,
    },
    created_at: {
        type: Date,
        required: true,
    },
    last_updated_at: {
        type: String,
        required: true,
    },
    visibility: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    tags: {
        type: Array,
        required: false,
    },
    views: {
        type: Number,
        required: false,
    },
    likes: {
        type: Number,
        required: false,
    },
    comments: {
        type: Object,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    restaurant_details: {
        restaurant_id: { type: ObjectId },
        restaurant_name: { type: String },
        cuisine: { type: String },
    },
});

mongoose.model("post", postSchema);
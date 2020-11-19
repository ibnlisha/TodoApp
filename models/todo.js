const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String, 
        required: "This field cannot be left empty"
    },
    status: {
        type: String,
        enum: ["started", "pending", "completed"],
        default: "pending"
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Todo", todoSchema);
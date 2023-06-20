
const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
    deposit: {
        type: Number,
        required: [true, "Must be a number greater than 0"],
    },
    spent: {
        type: Number,
        required: [true, "Must be a number greater than 0"],
    },
    date: {
        type: String,
        required: [true, "Please enter valid date"],
    },

}, { timestamps: true })

const Finance = mongoose.model("Finance", financeSchema);

module.exports = Finance;
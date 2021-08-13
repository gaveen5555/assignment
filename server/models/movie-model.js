const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movies = new Schema(
    {
        images: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movies)
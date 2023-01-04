const mongoose = require('mongoose')
const { float } = require('webidl-conversions')

const Schema = mongoose.Schema
const model = mongoose.model

const productSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inCart: {
        type: Number,
        required: true
    }
}, { timestamps : true })

module.exports = model('Product', productSchema)
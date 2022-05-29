const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    subserviceId: {
        type: [String]
        // required: true
    },

    // totalPrice: {
    //     type: Number,
    //     required: true
    // },


    instructions: {
        type: String,
    },


    address: {
        type: String
    },

    completed: {
        type: Boolean,
        default: false
    },


    datePlacingOrder: {
        type: Date,
        default: Date.now
    },

    dateOrderRequired: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Orders', OrderSchema);
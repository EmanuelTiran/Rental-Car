const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    driverLicense: {
        type: String,
        required: true,
        trim: true
    },
    // You might want to add a reference to the Car being rented
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    // You might also want to add a status field
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    // Automatically managed timestamps
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the 'updatedAt' field on save
OrderSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

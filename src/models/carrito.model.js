import mongoose from 'mongoose';
// carrito.model.js
const carritoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    total: {
        type: Number,
        required: true,
        default: 0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    }
});

export default mongoose.model('Carrito', carritoSchema);
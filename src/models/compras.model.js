//modelo para guardar las compras de todos los usuarios
import mongoose from 'mongoose';
//compras.model.js
const compraSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        idproduct: {
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
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});
export default mongoose.model('Compra', compraSchema);
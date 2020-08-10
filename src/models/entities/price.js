import mongoose from 'mongoose';

const priceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    price: Number,
    date: Date
});

export default mongoose.model('Price', priceSchema);
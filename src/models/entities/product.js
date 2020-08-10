import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: Number,
    productLink: Date
});

export default mongoose.model('Product', productSchema);
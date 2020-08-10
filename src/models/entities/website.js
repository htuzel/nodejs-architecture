import mongoose from 'mongoose';

const websiteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    xpath: String
});

export default mongoose.model('Website', websiteSchema);
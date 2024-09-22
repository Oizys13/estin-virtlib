// models/Reading.js
import mongoose from 'mongoose';

const readingSchema = new mongoose.Schema({
    user: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
}, { timestamps: true });

const Reading = mongoose.models.Reading || mongoose.model('Reading', readingSchema);

export default Reading;

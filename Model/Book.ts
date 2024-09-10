// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    isbn: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    overview: { type: String },
    language: { type: String },
    numPages: { type: Number },
    category: { type: String },
    downloadable: { type: String },
    hardCopy: { type: String },
    publisher: { type: String },
    pdf: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;

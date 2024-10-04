// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    isbn: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: String },
    language: { type: String },
    numPages: { type: Number },
    downloadable: { type: String },
    hardCopy: { type: String },
    publisher: { type: String },
    url: {type: String},
    tags: [{ type: String }]
    
}, { timestamps: true });

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;

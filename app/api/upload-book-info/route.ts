import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Book from "../../../Model/Book";

export async function POST(request: Request) {
    try {
        await connectMongoDB();

        const { isbn, title, author, year, languages, numPages, downloadable, hardCopy, publisher, url, tags } = await request.json();

        // Create the book document
        const newBook = await Book.create({
            isbn,
            title,
            author,
            year,
            languages,
            numPages,
            downloadable,
            hardCopy,
            publisher,
            url,
            tags
        });

        return NextResponse.json(newBook, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating book record", message: error.message },
            { status: 500 }
        );
    }
}

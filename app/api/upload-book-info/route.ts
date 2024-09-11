import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Book from "../../../Model/Book";

export async function POST(request: Request) {
    try {
        await connectMongoDB();

        const { isbn, title, author, overview, languages, numPages, category, downloadable, hardCopy, publisher, url } = await request.json();

        // Create the book document
        const newBook = await Book.create({
            isbn,
            title,
            author,
            overview,
            languages,
            numPages,
            category,
            downloadable,
            hardCopy,
            publisher,
            url
        });

        return NextResponse.json(newBook, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating book record", message: error.message },
            { status: 500 }
        );
    }
}

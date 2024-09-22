import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Favorite from "../../../Model/Favorite";

export async function POST(request: Request) {
    try {
        await connectMongoDB();
        const { userEmail, bookId } = await request.json();

        // Check if the email already exists in the favorites
        const existingFavorite = await Favorite.findOne({ user: userEmail });

        if (existingFavorite) {
            // If the email exists, check if the book is already in the booklist
            if (!existingFavorite.books.includes(bookId)) {
                existingFavorite.books.push(bookId);
                await existingFavorite.save();
            }
        } else {
            // If the email does not exist, create a new favorite document
            const newFavorite = new Favorite({
                user: userEmail,
                books: [bookId], // Wrap bookId into an array
            });
            await newFavorite.save();
        }

        return NextResponse.json({ message: "Favorite document created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating favorite document", message: (error as Error).message },
            { status: 500 }
        );
    }
}
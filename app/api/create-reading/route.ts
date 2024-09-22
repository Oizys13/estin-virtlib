import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Reading from "../../../Model/Reading";

export async function POST(request: Request) {
    try {
        await connectMongoDB();
        const { userEmail, bookId } = await request.json();

        // Check if the email already exists in the readings
        const existingReading = await Reading.findOne({ user: userEmail });

        if (existingReading) {
            // If the email exists, check if the book is already in the booklist
            if (!existingReading.books.includes(bookId)) {
                existingReading.books.push(bookId);
                await existingReading.save();
            }
        } else {
            // If the email does not exist, create a new reading document
            const newReading = new Reading({
                user: userEmail,
                books: [bookId], // Wrap bookId into an array
            });
            await newReading.save();
        }

        return NextResponse.json({ message: "Reading document created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating reading document", message: (error as Error).message },
            { status: 500 }
        );
    }
}
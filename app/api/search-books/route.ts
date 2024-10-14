import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB"; // Ensure this is the correct path for your MongoDB connection
import Book from "../../../Model/Book"; // Adjust the path based on your project structure

export async function GET(request: Request) {
  try {
    await connectMongoDB();

    const url = new URL(request.url);
    const searchQuery = url.searchParams.get('query'); // Capture the search query from URL

    let books;

    if (searchQuery) {
      const searchRegex = new RegExp(searchQuery, 'i'); // Case-insensitive search

      // Search across multiple fields in the Book model
      books = await Book.find({
        $or: [
          { title: { $regex: searchRegex } },
          { author: { $regex: searchRegex } },
          { isbn: { $regex: searchRegex } },
          { publisher: { $regex: searchRegex } },
          { year: { $regex: searchRegex } },
          { language: { $regex: searchRegex } }
        ]
      });
    } else {
      // If no search query, return all books
      books = await Book.find();
    }

    // Return the list of books in the response
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching books", message: error.message },
      { status: 500 }
    );
  }
}
    
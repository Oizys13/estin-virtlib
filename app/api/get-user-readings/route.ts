import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Reading from "../../../Model/Reading"; // Assuming this is your model
import Book from "../../../Model/Book"; // Assuming this is your model

export async function GET(req: Request) {
  try {
    await connectMongoDB();

    // Extract the user from the query parameters (e.g., ?user=email@example.com)
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("user");

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email is required as a query parameter." },
        { status: 400 }
      );
    }

    // Fetch the reading record for the specific user
    const readingRecord = await Reading.findOne({ user: userEmail }).populate('books');

    if (!readingRecord) {
      return NextResponse.json(
        { error: "No reading record found for the specified user." },
        { status: 404 }
      );
    }

    // Return the list of books read in the response
    return NextResponse.json(readingRecord.books, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching books read", message: (error as Error).message },
      { status: 500 }
    );
  }
}


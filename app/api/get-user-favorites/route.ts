import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Favorite from "../../../Model/Favorite"; // Assuming this is your model
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

    // Fetch the favorite record for the specific user
    const favoriteRecord = await Favorite.findOne({ user: userEmail }).populate('books');

    if (!favoriteRecord) {
      return NextResponse.json(
        { error: "No favorite record found for the specified user." },
        { status: 404 }
      );
    }

    // Return the list of favorite books in the response
    return NextResponse.json(favoriteRecord.books, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching favorite books", message: (error as Error).message },
      { status: 500 }
    );
  }
}


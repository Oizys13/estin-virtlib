import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import BookRequest from "../../../Model/bookRequests"; // Assuming this is your model

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

    // Fetch all book requests for the specific user
    const bookRequests = await BookRequest.find({ user: userEmail });

    // Return the list of book requests in the response
    return NextResponse.json(bookRequests, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching book requests", message: error.message },
      { status: 500 }
    );
  }
}

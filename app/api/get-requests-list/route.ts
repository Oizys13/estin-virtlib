import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import BookRequest from "../../../Model/bookRequests"; // The model you shared

export async function GET() {
  try {
    await connectMongoDB();

    // Fetch all book requests from the database
    const bookRequests = await BookRequest.find();

    // Return the list of book requests in the response
    return NextResponse.json(bookRequests, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching book requests", message: error.message },
      { status: 500 }
    );
  }
}

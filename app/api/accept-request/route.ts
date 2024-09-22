import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import BookRequest from "../../../Model/bookRequests";// The model you shared

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const { title, author, category, motive, user } = await request.json();

    // Find the book request document
    const existingRequest = await BookRequest.findOne({
      title,
      author,
      category,
      motive,
      user,
    });

    if (!existingRequest) {
      return NextResponse.json(
        { error: "Book request not found" },
        { status: 404 }
      );
    }

    // Update the status field to true
    existingRequest.status = true;
    await existingRequest.save();

    return NextResponse.json(existingRequest, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating book request", message: (error as Error).message },
      { status: 500 }
    );
  }
}

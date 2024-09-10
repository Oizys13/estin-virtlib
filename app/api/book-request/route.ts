import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import BookRequest from "../../../Model/bookRequests";// The model you shared

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const { title, author, motive, user } = await request.json();

    // Create the book request document
    const newRequest = await BookRequest.create({
      title,
      author,
      motive,
      user,
      status: false, // default status
    });

    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating book request", message: error.message },
      { status: 500 }
    );
  }
}

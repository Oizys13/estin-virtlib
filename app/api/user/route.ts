import { connectMongoDB } from "../../../pages/lib/connectDB";
import User from "../../../Model/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email, isSuperuser:false });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
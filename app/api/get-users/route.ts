import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '@/pages/lib/connectDB';
import User from '@/Model/User';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectMongoDB();

    // Fetch all book requests from the database
    const Users = await User.find();

    // Return the list of book requests in the response
    return NextResponse.json(Users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching book requests", message: error.message },
      { status: 500 }
    );
  }
}
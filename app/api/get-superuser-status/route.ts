import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/pages/lib/connectDB';
import User from '@/Model/User';

// Define the API route handler
export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { email } = await request.json();

    // Find the user and return the superuser status
    const user = await User.findOne({ email }, { isSuperuser: 1 });

    if (user) {
      return NextResponse.json({ isSuperuser: user.isSuperuser });
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
  }
}

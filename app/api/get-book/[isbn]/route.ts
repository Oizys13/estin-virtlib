import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/pages/lib/connectDB';
import Book from '@/Model/Book';

export async function GET(request: Request, { params }: { params: { isbn: string } }) {
  const { isbn } = params;

  if (!isbn) {
    return NextResponse.json({ error: 'Invalid ISBN' }, { status: 400 });
  }

  try {
    await connectMongoDB();
    const book = await Book.findOne({ isbn });

    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    return NextResponse.json(book, { status: 200 });
  } catch (error) {
    console.error('Error fetching book details:', error);
    return NextResponse.json({ error: 'Error fetching book details', message: (error as Error).message }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import multer from 'multer';
import { connectToDatabase, getGFS } from '@/pages/lib/mongodb';
import { Readable } from 'stream';

const upload = multer({ storage: multer.memoryStorage() });

const handler = async (req: Request) => {
    if (req.method === 'POST') {
        const formData = new FormData();
        formData.append('pdf', req?.body?.pdf);

        try {
            await connectToDatabase();
            const gfs = getGFS();

            const uploadStream = gfs.createWriteStream({
                filename: req.body?.pdf.originalname,
                contentType: req.body?.pdf.mimetype
            });

            const bufferStream = new Readable();
            bufferStream.push(req.body.pdf.buffer);
            bufferStream.push(null);

            bufferStream.pipe(uploadStream);

            uploadStream.on('close', () => {
                return NextResponse.json({ message: 'File uploaded successfully!' });
            });

            uploadStream.on('error', (err) => {
                console.error('Error uploading file:', err);
                return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
            });
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            return NextResponse.json({ error: 'Server error.' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
};

export default handler;

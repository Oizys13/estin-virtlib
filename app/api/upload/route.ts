import { google, drive_v3 } from 'googleapis';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

// Function to authenticate with Google Drive
async function authenticate(): Promise<drive_v3.Options['auth']> {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'driveAPI.json', // Path to your service account JSON file
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  // Return the authenticated client
  return await auth.getClient();
}

async function uploadToGoogleDrive(file: File) {
  const authClient = await authenticate();
  
  const drive = google.drive({
    version: 'v3',
    auth: authClient as drive_v3.Options['auth'], // Ensure correct type for the auth client
  });

  const fileMetadata = {
    name: file.name, // Original filename
    parents: ['1SjGFApcDgzPxnqTncdIQghrV23ZdoVmR'], // Folder ID where the file will be uploaded
  };

  const buffer = Buffer.from(await file.arrayBuffer());
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // Indicates the end of the stream

  const media = {
    mimeType: file.type,
    body: stream,
  };

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: 'id',
  });

  return response.data.id; // Return file ID from Google Drive
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Upload file to Google Drive
    const fileId = await uploadToGoogleDrive(file);

    return NextResponse.json({
      message: 'File uploaded successfully to Google Drive',
      fileId,
    });
  } catch (error) {
    console.error('Error uploading file to Google Drive:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}

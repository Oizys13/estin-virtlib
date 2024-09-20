import { NextResponse } from 'next/server';
import { google, drive_v3 } from 'googleapis';

async function authenticate(): Promise<drive_v3.Options['auth']> {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'driveAPI.json',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  return auth.getClient();
}

async function getDriveClient(): Promise<drive_v3.Drive> {
  const auth = await authenticate();
  const drive = google.drive({ version: 'v3', auth });
  return drive;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const fileLink = url.searchParams.get('fileLink');
    if (!fileLink) {
      return NextResponse.json({ error: 'fileLink parameter is required' }, { status: 400 });
    }

    const fileId = fileLink.split('/d/')[1]?.split('/')[0]; // Extract fileId from fileLink

    if (!fileId) {
      return NextResponse.json({ error: 'Invalid fileLink format' }, { status: 400 });
    }

    const drive = await getDriveClient();
    const response = await drive.files.get({
      fileId,
      fields: 'thumbnailLink',
    });

    const thumbnailLink = response.data.thumbnailLink;
    if (!thumbnailLink) {
      return NextResponse.json({ error: 'Thumbnail not found' }, { status: 404 });
    }

    return NextResponse.json({ thumbnailLink }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching thumbnail', message: error.message },
      { status: 500 }
    );
  }
}

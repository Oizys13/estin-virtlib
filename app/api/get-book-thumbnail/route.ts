import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

// Function to authenticate with Google Drive
async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'driveAPI.json', // Path to your service account JSON file
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  return await auth.getClient();
}

// Function to extract file ID from the file link
function getFileIdFromLink(fileLink: string): string {
  const match = fileLink.match(/\/d\/(.*?)(\/|$)/);
  if (!match || !match[1]) {
    throw new Error('Invalid file link');
  }
  return match[1];
}

// API route handler to get the thumbnail of a file
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fileLink } = req.query as { fileLink: string };

  if (!fileLink) {
    return res.status(400).json({ error: 'File link is required' });
  }

  try {
    const auth = await authenticate();
    const drive = google.drive({ version: 'v3', auth });
    
    const fileId = getFileIdFromLink(fileLink);

    // Get file metadata to fetch thumbnail link
    const response = await drive.files.get({
      fileId,
      fields: 'thumbnailLink',
    });

    const thumbnailLink = response.data.thumbnailLink;
    
    if (!thumbnailLink) {
      return res.status(404).json({ error: 'Thumbnail not found' });
    }

    res.status(200).json({ thumbnailLink });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

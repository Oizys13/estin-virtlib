//Create a file to handle the Mongoose connection and GridFS configuration
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

const uri = process.env.MONGODB2_URI as string;

let gfs: Grid.Grid;
let conn: mongoose.Connection;

export const connectToDatabase = async () => {
    if (conn && conn.readyState === 1) return;

    conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    gfs = Grid(conn.connection.db, mongoose.mongo);
    gfs.collection('pdfs');
};

export const getGFS = () => gfs;

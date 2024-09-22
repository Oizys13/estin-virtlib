import { NextResponse } from "next/server";
import { connectMongoDB } from "@/pages/lib/connectDB";
import Reading from "../../../Model/Reading";

export async function GET() {
    try {
        await connectMongoDB();

        // Get the total number of readings for all users
        const totalReadings = await Reading.aggregate([
            { $unwind: "$books" },
            { $group: { _id: null, total: { $sum: 1 } } }
        ]);

        // Get the top 20 books with the most readings
        const topBooks = await Reading.aggregate([
            { $unwind: "$books" },
            { $group: { _id: "$books", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 20 },
            { $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "bookDetails"
            }},
            { $unwind: "$bookDetails" }
        ]);

        return NextResponse.json({ totalReadings, topBooks }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error fetching readings data", message: (error as Error).message },
            { status: 500 }
        );
    }
}
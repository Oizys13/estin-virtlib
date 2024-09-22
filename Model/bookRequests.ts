import mongoose from "mongoose";

const bookRequestSchema = new mongoose.Schema(
  {
    title : {
        type:  String,
        required: true
    },
    author : {
        type:  String,
        required: true
    },
    category: {
        type:  String,
        required: true
    },
    motive : {
        type:  String,
    },
    user:{
        type: String,
    },
    status:{
        type:Boolean,
    },
    

    
   
  },
  { timestamps: true }
);

const BookRequest = mongoose.models.Request || mongoose.model("Request", bookRequestSchema);

export default BookRequest;
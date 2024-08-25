import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      trim: true, 
      unique: true 
    },
    name: {
      type: String,
      trim: true,
      required: true,
    }

    
   
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
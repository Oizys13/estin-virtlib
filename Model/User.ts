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
    },
    isSuperuser: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

// Use singular 'User' as the model name, and Mongoose will handle pluralizing it to 'users'
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

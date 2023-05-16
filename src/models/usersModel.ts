import mongoose from "mongoose";

// Define the User interface for TypeScript type checking
interface User {
  uid: string;
  username: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
  providerData: string;
  reloadUserInfo: string;
  creationTime: string;
  createdAt: string;
}

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: { unique: true, dropDups: true },
  },
  phoneNumber: {
    type: String || null,
    required: false,
  },
  photoURL: {
    type: String,
    required: false,
  },
  providerData: {
    type: String || null,
    required: false,
  },
  reloadUserInfo: {
    type: String || null,
    required: false,
  },
  creationTime: {
    type: String || null,
    required: false,
  },
  createdAt: {
    type: String || null,
    required: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

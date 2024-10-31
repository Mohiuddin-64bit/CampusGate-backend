import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  university: { type: String },
  address: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // 
});

const User = mongoose.model("User", userSchema);
export default User;

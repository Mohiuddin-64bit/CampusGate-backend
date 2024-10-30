import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  university: { type: String },
  address: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // reference to reviews made by the user
});

const User = mongoose.model("User", userSchema);
export default User;

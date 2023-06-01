import mongoose, { Schema, model } from "mongoose";

export const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  user: { type: String, required: true },
  pass: { type: String, required: true },
  pass: { type: String, required: false },
});

const userModel = model("User", userSchema);

export { userModel };

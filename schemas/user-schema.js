import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fname: {
    type: "string",
    required: true,
    trim: true,
    min: 6,
    max: 20,
  },
  lastname: {
    type: "string",
    required: true,
    trim: true,
    min: 6,
    max: 20,
  },
  uname: {
    type: "string",
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: "string",
    required: true,
    index: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: "string",
  },
  phoneno: {
    type: "string",
  },
  photo: {
    type: "string",
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
export default user;

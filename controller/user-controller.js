import { response } from "express";
import User from "../schemas/user-schema.js";
import { tokenGenerator } from "./token-controller.js";
import mongoose from "mongoose";
export const userSignup = async (req, res) => {
  try {
    const user = req.body;
    const filteredEmail = {email: req.body.email};
    // console.log(filteredEmail);
    // console.log(user)
    const inserteduser = await User.findOneAndUpdate(filteredEmail, user, {
      upsert: true,
      new: true,
    });
    const token = tokenGenerator(user?.email);

    res.status(200).json({ message: user, accessToken: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const uname = req.body.uname;
    const password = req.body.password;

    let user = await User.findOne({ uname: uname, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("Failed to login");
    }
  } catch (err) {
    res.status(500).json("Error", err.message);
  }
};

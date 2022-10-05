import express from "express";
import {userSignup,userLogin} from '../controller/user-controller.js';
const router = express.Router();
router.patch("/signup",userSignup);
router.patch("/login",userLogin);

export default router;
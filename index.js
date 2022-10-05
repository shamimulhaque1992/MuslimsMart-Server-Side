import  express from "express";
import  cors from "cors";
import jwt from 'jsonwebtoken'
const app = express();
const port = process.env.PORT || 5000;
import dotenv from 'dotenv';
import Conncetion from "./database/database.js";
import DefaultData from './default.js';
import Router from './routes/route.js';




dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/',Router);






const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
Conncetion(USERNAME, PASSWORD);





app.get("/", (req, res) => {
  res.send("Welcome to Muslims Mart");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

DefaultData();

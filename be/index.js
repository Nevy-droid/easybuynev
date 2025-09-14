import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./src/config/db.config.js";
import userRouter from "./src/routes/userRoute.js";

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

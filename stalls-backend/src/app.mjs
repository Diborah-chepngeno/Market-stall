import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.mjs";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use("/api/v1/", router);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

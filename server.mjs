import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import grangarden from "./routes/store-routes.mjs";

dotenv.config({ path: "./config/.env" });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/grangarden", grangarden);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));

require("dotenv").config();
import express from "express";
import { router } from "./routes/router";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api", router);

mongoose.connect(process.env.MONGO_DB, (err) => {
    if (err) throw err;
    console.log("connected to database");
    app.listen(process.env.PORT);
    console.log("server listening...");
});

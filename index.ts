require("dotenv").config();
import express from "express";
import { router } from "./routes/router";

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT);
console.log("server listening...");

import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/configuration";
import router from "./routes/event";

const app = express();

// Connect to the database
connectDB();

app.use(bodyParser.json());
app.use("/events", router);

export default app;

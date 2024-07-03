import express from "express";
import expressOasGenerator from  "express-oas-generator";
import mongoose from "mongoose";
import { dbConnection } from "./config/db.js";
import cors from "cors";
import eventRouter from "./routes/event.js";

// connect to database
dbConnection();

// creating the app
const eventApp = express();
expressOasGenerator.handleResponses(eventApp, {
    alwaysServeDocs: true,
    tags : ['events'],
    mongooseModels:mongoose.modelNames(),
});

// apply the middleware
eventApp.use(cors());
eventApp.use(express.json());
eventApp.use(express.static("events"));

// use routes
eventApp.use(eventRouter);
expressOasGenerator.handleRequests();
eventApp.use((req, res) => res.redirect('/api-docs/'))



// listening to the server
const port = process.env.PORT || 3050;
eventApp.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
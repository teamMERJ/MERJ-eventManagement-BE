import express from "express";
import expressOasGenerator from  "express-oas-generator";
import mongoose from "mongoose";
import { dbConnection } from "./config/db.js";

// connect to database
dbConnection();

// creating the app
const eventApp = express();
expressOasGenerator.handleResponses(eventApp, {
    tags : ['events'],
    mongooseModels: mongoose.modelNames()
});

// apply the middleware
eventApp.use(express.json())

// use routes
expressOasGenerator.handleRequests();
eventApp.use((req, res) => res.redirect('/api-docs/'))

// listening to the server
const port = process.env.PORT || 3000;
eventApp.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
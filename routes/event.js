import { Router } from "express";
import {getOneEvent,getEvent,deleteEvent,postEvent,patchEvent,} from "../controllers/event.js";
import { remoteUpload } from "../middlewares/uploads.js";

// create a router
const eventRouter = Router();

// define routes
eventRouter.post("/events", remoteUpload.single("flier"), postEvent);
eventRouter.get("/events", getEvent);
eventRouter.get('/events/:id',getOneEvent);
eventRouter.patch("/events/:id", remoteUpload.single("flier"), patchEvent);
eventRouter.delete("/events/:id", deleteEvent);

// exporting the events router
export default eventRouter;

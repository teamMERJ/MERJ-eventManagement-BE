import { Router } from "express";
import { getEvents,getEvent,deleteEvent,postEvent,patchEvent } from "../controllers/event.js";
import { remoteUpload } from "../middlewares/uploads.js";


// create a router
const eventRouter = Router();

// define routes
eventRouter.post('/events', remoteUpload.single("flier"), postEvent);
eventRouter.get('/events',getEvents);
eventRouter.get('/events/:id',getEvent);
eventRouter.patch('/events/:id',patchEvent);
eventRouter.delete('/events/:id',deleteEvent);

// exporting the events router
export default eventRouter;


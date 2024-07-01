import { Router } from "express";
import { getEvents,getEvent,deleteEvent,postEvent,patchEvent } from "../controllers/event.js";

// create a router
const eventRouter = Router();

// define routes
eventRouter.get('/events',getEvents);
eventRouter.get('/events/:id',getEvent);
eventRouter.post('/events',postEvent);
eventRouter.patch('/events/:id',patchEvent);
eventRouter.delete('/events/:id',deleteEvent);

// exporting the events router
export default eventRouter;


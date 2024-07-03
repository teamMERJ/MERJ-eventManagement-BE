import {EventModel} from "../models/event.js";

// getting all events 
export const getEvents = async(req,res,next) =>{
    try {
        console.log('hyuhy7uhyg')
        // Get events from database
        const allEvents = await EventModel.find();
        // Return all events as response
        res.json(allEvents);
    } catch (error) {
       next(error);
    }
}

// getting one event
export const getEvent = async(req,res,next) =>{
    try {
        // Get an event from database
        const event = await EventModel.findById(req.params.id);
        // Return an event with an id as a response
        res.json(event);
    } catch (error) {
        next(error);
    }
}

// Adding a new event
export const postEvent = async(req,res,next) =>{
    try {
        console.log('hyuhy7uhyg')
        console.log(req.body);
        console.log(req.file);
        // posting an event to the database
        const newEvent = await EventModel.create({
            ...req.body,
            flier: req.file.filename
        });
        // return response
        res.status(201).json(newEvent);
    } catch (error) {
        console.log(error);
    }
}

// Updating an event
export const patchEvent = async(req,res,next) =>{
    try {
        // updating details of an event
        const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id);
        // return response
        res.json(updatedEvent);
    } catch (error) {
        next(error)
    }
}

// Deleting an event
export const deleteEvent = async(req,res,next) =>{
    try {
        // deleting an event
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(`Event with ID ${req.params.id} deleted`);
    } catch (error) {
        next(error)
    }
}
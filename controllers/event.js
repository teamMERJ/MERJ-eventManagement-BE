import { EventModel } from "../models/event.js";

// getting all events
 export const getOneEvent = async(req,res,next) =>{
    try {
        // Get one event from database
        const oneEvent = await EventModel.findById(  req.params.id);
        // Return one events as response
        res.json(oneEvent);
    } catch (error) {
       next(error);
    }
}

// getting one event
export const getEvent = async (req, res, next) => {
  try {
    // Get query params
    const {
      limit = 4,
      skip = 0,
      filter = "{}",
      sort = "{}",
      fields = "{}",
    } = req.query;
    // Get all categories from database
    const event = await EventModel.find(JSON.parse(filter))
      .select(JSON.parse(fields))
      .limit(JSON.parse(skip))
      .sort(JSON.parse(sort));
    // Return response
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

// Adding a new event
export const postEvent = async (req, res, next) => {
  try {
    // posting an event to the database
    const newEvent = await EventModel.create({
      ...req.body,
      flier: req.file.filename,
    });
    // return response
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

// Updating an event
export const patchEvent = async (req, res, next) => {
  try {
    // updating details of an event
    const updatedEvent = await EventModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, flier: req?.file?.filename },
      { new: true }
    );
    // return response
    res.status(200).json(updatedEvent);
  } catch (error) {
    next(error);
  }
};

// Deleting an event
export const deleteEvent = async (req, res, next) => {
  try {
    // deleting an event
    const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
    // return response
    res.json(`Event with ID ${req.params.id} deleted`);
  } catch (error) {
    next(error);
  }
};

import { Schema, model} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    price: {type: Number, required: true},
    location: {type: String, required: true},
    number_of_participants: {type: Number},
    flier: {type: String},
}, {
    timestamps:true
}
);

eventSchema.plugin(toJSON);

// export the model
export const EventModel = model('event', eventSchema);







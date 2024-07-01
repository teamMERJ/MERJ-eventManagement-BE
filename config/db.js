import mongoose from "mongoose";
import 'doten/config';


const mongo_url = process.env.MONGO_URL;

// CONNECTIONLINK
export const dbConnection = () =>{
    mongoose.connect(mongo_url).then(() => {
        console.log('Database connected')
    })
};
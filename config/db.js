import mongoose from "mongoose";
import 'dotenv/config';


const mongo_url = process.env.MONGO_URL;

// CONNECTIONLINK
export const dbConnection = () =>{
    mongoose.connect(mongo_url).then(() => {
        console.log('Database connected')
    })
};
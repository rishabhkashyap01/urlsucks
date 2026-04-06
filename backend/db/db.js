import mongoose from "mongoose";

mongoose.connection.on('connected', () => {console.log("Database connected")});

export const connectdb = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/url_short`);
    }
    catch(error){
        console.log(error);
    }
}

console.log("")

import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    short_code: {
        type: String,
        required: true,
        unique: true,
        index: true
    } 
});


export const url= mongoose.model('url', urlSchema);
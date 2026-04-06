import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    original_url: String,
    short_code: String
});

const counterSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: {type: Number, default: 0}
});

export const url= mongoose.model('url', urlSchema);

export const counter = mongoose.model('counter', counterSchema);
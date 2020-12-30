import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const TripModel = new Schema({
    title: {
        type: String,
        index: true,
        text: true
    },
    description: {
        type: String,
        index: true,
        text: true
    },
    price: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});


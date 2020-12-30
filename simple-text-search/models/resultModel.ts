import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const ResultModel = new Schema({
    _id: String,
    keyword: String,
    search_results: { type : Array}
});

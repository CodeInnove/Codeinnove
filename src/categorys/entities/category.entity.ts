import { Schema } from "mongoose";
import { Proposal } from "src/proposals/types/Proposals";
import { Category } from "../types/Category";


export const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

export interface ICategoryEntity extends Omit<Category, '_id'>, Document {}
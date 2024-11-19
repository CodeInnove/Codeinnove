import { Schema } from "mongoose";
import { Skill } from "../types/Skills";

export const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

export interface ISkillEntity extends Omit<Skill, '_id'>, Document {}
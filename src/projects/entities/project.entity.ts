import { Schema } from "mongoose";
import { Project } from "../types/Project";

    const projectSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        deadline: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ['open', 'in progress', 'completed', 'cancelled'],
            default: 'open',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User ', // Referência ao modelo User
            required: true,
        },
        companyId: {
            type: Schema.Types.ObjectId,
            ref: 'Company', // Referência ao modelo Company (opcional)
        },
    });
    export interface IProjectEntity extends Omit<Project, '_id'>, Document {}
import { Schema } from "mongoose";
import { Proposal } from "../types/Proposals";

export const proposalSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project', // Referência ao modelo Project
        required: true,
    },
    freelancerId: {
        type: Schema.Types.ObjectId,
        ref: 'User ', // Referência ao modelo User
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export interface IProposalEntity extends Omit<Proposal, '_id'>, Document {}
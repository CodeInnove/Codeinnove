import { Schema } from "mongoose";
import { Payment } from "../types/Payments";


export const paymentSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project', // Referência ao modelo Project
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export interface IPaymentEntity extends Omit<Payment, '_id'>, Document {}
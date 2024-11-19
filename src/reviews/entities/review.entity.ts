import { Schema } from "mongoose";
import { Review } from "../types/Reviews";


export const reviewSchema = new Schema({
    reviewerId: {
        type: Schema.Types.ObjectId,
        ref: 'User ', // Referência ao modelo User
        required: true,
    },
    reviewedId: {
        type: Schema.Types.ObjectId,
        ref: 'User ', // Pode ser User ou Company, dependendo de como você deseja implementar
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export interface IReviewEntity extends Omit<Review, '_id'>, Document {}
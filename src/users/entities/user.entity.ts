import { Schema } from "mongoose";
import { User } from "../types/User";



export const UsersSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true, required: true},
    name: { type: String, required: true},
    birthdate: {type: String, required: false},
    cpf: {type: String, required: false},
    rg: {type: String, required: false},
    email: { type: String, required: true, unique: true},
    phone: {type: String, required: false},
    password: { type: String, required: true},
    passwordResetToken: { type: String, required: false, select: false },
    //type: [{ type: String, default: 'user', enum: UserTypes, required: true }],
})


export interface IUsersEntity extends Omit<User, '_id'>, Document {}
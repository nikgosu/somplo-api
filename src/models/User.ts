import { Schema, Document, Types } from "mongoose";

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly token: string;
  readonly _id?: string;
  readonly __v?: number;
}

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String, required: false },
}, );

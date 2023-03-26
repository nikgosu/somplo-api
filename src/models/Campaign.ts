import { Schema, Document } from 'mongoose';

export interface Campaign extends Document {
  readonly name: string;
}

export const CampaignSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
}, );

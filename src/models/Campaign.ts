import { Schema, Document } from 'mongoose';

export interface Campaign extends Document {
  readonly name: string;
  readonly userId: string;
  readonly placements: number;
  readonly creatives: number;
}

export const CampaignSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  placements: { type: Number, required: false },
  creatives: { type: Number, required: false },
}, );

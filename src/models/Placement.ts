import { Schema, Document } from 'mongoose';

export interface Placement extends Document {
  readonly name: string;
  readonly size: string;
  readonly userId: string;
  readonly campaignId: string;
  readonly creatives: number;
}

export const PlacementSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  userId: { type: String, required: true },
  campaignId: { type: String, required: true },
  creatives: { type: Number, required: true },
}, );

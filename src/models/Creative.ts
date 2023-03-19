import { Schema, Document } from 'mongoose';

export interface Creative extends Document {
  readonly name: string;
  readonly animation: string;
  readonly height: number;
  readonly horizontalPos: number;
  readonly imageSize: number;
  readonly verticalPos: number;
  readonly width: number;
  readonly imageSrc: string;
}

export const CreativeSchema = new Schema({
  name: { type: String, required: true },
  animation: { type: String, required: true },
  height: { type: Number, required: true },
  horizontalPos: { type: Number, required: true },
  imageSize: { type: Number, required: true },
  verticalPos: { type: Number, required: true },
  width: { type: Number, required: true },
  imageSrc: { type: String, required: true },
}, );

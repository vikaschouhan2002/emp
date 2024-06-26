import mongoose, { Document, Schema } from "mongoose";

interface EventLocation {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Event extends Document {
  eventName: string;
  eventDate: Date;
  organizer: string;
  email: string;
  phone: string;
  location: EventLocation;
  createdAt: Date;
  updatedAt: Date;
}

const EventLocationSchema: Schema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const EventSchema: Schema = new Schema(
  {
    eventName: { type: String, required: true },
    eventDate: { type: Date, required: true },
    organizer: { type: String, required: true },
    email: { type: String, required: true , unique:true },
    phone: { type: String, required: true },
    location: { type: EventLocationSchema, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Event>("Event", EventSchema);

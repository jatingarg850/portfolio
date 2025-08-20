import mongoose, { Schema, Document } from 'mongoose';

export interface ICall extends Document {
  name: string;
  email: string;
  date: string;
  time: string;
  callType: 'video' | 'phone';
  type: 'discovery' | 'consultation' | 'follow_up';
  projectBrief?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled';
  meetingLink?: string;
  notes?: string;
  duration?: number;
  outcome?: string;
  followUpRequired?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CallSchema = new Schema<ICall>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  callType: { 
    type: String, 
    enum: ['video', 'phone'], 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['discovery', 'consultation', 'follow_up'], 
    default: 'discovery' 
  },
  projectBrief: String,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled', 'rescheduled'], 
    default: 'pending' 
  },
  meetingLink: String,
  notes: String,
  duration: Number,
  outcome: String,
  followUpRequired: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.models.Call || mongoose.model<ICall>('Call', CallSchema);
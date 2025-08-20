import mongoose, { Schema, Document } from 'mongoose';

export interface IDiscoveryCall extends Document {
  name: string;
  email: string;
  company?: string;
  role?: string;
  projectType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  scheduledDate: Date;
  scheduledTime: string;
  timezone: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  meetingLink?: string;
  notes?: string;
  followUpRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const DiscoveryCallSchema = new Schema<IDiscoveryCall>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  role: String,
  projectType: { type: String, required: true },
  projectDescription: { type: String, required: true },
  budget: { type: String, required: true },
  timeline: { type: String, required: true },
  scheduledDate: { type: Date, required: true },
  scheduledTime: { type: String, required: true },
  timezone: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['scheduled', 'completed', 'cancelled', 'rescheduled'], 
    default: 'scheduled' 
  },
  meetingLink: String,
  notes: String,
  followUpRequired: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.models.DiscoveryCall || mongoose.model<IDiscoveryCall>('DiscoveryCall', DiscoveryCallSchema);
import mongoose, { Schema, Document } from 'mongoose';

export interface IContactSubmission extends Document {
  name: string;
  email: string;
  company?: string;
  role?: string;
  type: 'Landing Page' | 'Web App' | 'Redesign' | 'UI Audit' | 'Performance Optimization' | 'Custom';
  goals: string;
  scope: string[];
  budget: {
    min: number;
    max: number;
  };
  timeline: string;
  message?: string;
  status: 'new' | 'reviewed' | 'responded' | 'converted' | 'archived';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  role: String,
  type: { 
    type: String, 
    required: true,
    enum: ['Landing Page', 'Web App', 'Redesign', 'UI Audit', 'Performance Optimization', 'Custom']
  },
  goals: { type: String, required: true },
  scope: [{ type: String }],
  budget: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  timeline: { type: String, required: true },
  message: String,
  status: { 
    type: String, 
    enum: ['new', 'reviewed', 'responded', 'converted', 'archived'], 
    default: 'new' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'], 
    default: 'medium' 
  }
}, {
  timestamps: true
});

export default mongoose.models.ContactSubmission || mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'archived';
  source: 'contact_form' | 'referral' | 'social' | 'other';
  priority: 'low' | 'medium' | 'high';
  notes?: string;
  followUpDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  projectType: String,
  budget: String,
  timeline: String,
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'in_progress', 'completed', 'archived'], 
    default: 'new' 
  },
  source: { 
    type: String, 
    enum: ['contact_form', 'referral', 'social', 'other'], 
    default: 'contact_form' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'], 
    default: 'medium' 
  },
  notes: String,
  followUpDate: Date
}, {
  timestamps: true
});

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
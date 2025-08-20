import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  timezone: string;
  skills: string[];
  experience: number;
  role: 'admin' | 'super-admin';
  permissions: string[];
  lastLogin?: Date;
  loginAttempts: number;
  accountLocked: boolean;
  twoFactorEnabled: boolean;
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    nextAvailable?: Date;
    responseTime: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  stats: {
    projectsCompleted: number;
    clientSatisfaction: number;
    avgPerformanceScore: number;
    responseTime: string;
  };
  preferences: {
    theme: 'light' | 'dark';
    accentColor: string;
    language: 'en' | 'hi';
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  avatar: { type: String, default: '' },
  location: { type: String, required: true },
  timezone: { type: String, required: true },
  skills: [{ type: String }],
  experience: { type: Number, required: true },
  role: { 
    type: String, 
    enum: ['admin', 'super-admin'], 
    default: 'admin' 
  },
  permissions: [{ type: String }],
  lastLogin: Date,
  loginAttempts: { type: Number, default: 0 },
  accountLocked: { type: Boolean, default: false },
  twoFactorEnabled: { type: Boolean, default: false },
  availability: {
    status: { 
      type: String, 
      enum: ['available', 'busy', 'unavailable'], 
      default: 'available' 
    },
    nextAvailable: Date,
    responseTime: { type: String, default: '<12h' }
  },
  social: {
    github: String,
    linkedin: String,
    twitter: String,
    website: String
  },
  stats: {
    projectsCompleted: { type: Number, default: 0 },
    clientSatisfaction: { type: Number, default: 100 },
    avgPerformanceScore: { type: Number, default: 95 },
    responseTime: { type: String, default: '<12h' }
  },
  preferences: {
    theme: { type: String, enum: ['light', 'dark'], default: 'light' },
    accentColor: { type: String, default: '#3b82f6' },
    language: { type: String, enum: ['en', 'hi'], default: 'en' }
  }
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
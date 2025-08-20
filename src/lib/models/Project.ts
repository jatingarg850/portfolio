import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  slug: string;
  tagline: string;
  category: 'Web' | 'UI/UX' | 'APIs' | 'Experiments';
  year: number;
  metrics: {
    lcp?: string;
    conversion?: string;
    a11y?: number;
    performance?: number;
  };
  stack: string[];
  gallery: string[];
  links: {
    live?: string;
    repo?: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    process: string[];
    outcome: string;
    timeline: Array<{
      date: string;
      title: string;
      description: string;
      type: 'milestone' | 'decision' | 'launch';
    }>;
  };
  position: {
    x: number;
    y: number;
    orbit: number;
  };
  featured: boolean;
  status: 'active' | 'archived' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  tagline: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['Web', 'UI/UX', 'APIs', 'Experiments', 'Android App', 'iOS App', 'IoT', 'Data Engineering'] 
  },
  year: { type: Number, required: true },
  metrics: {
    lcp: String,
    conversion: String,
    a11y: Number,
    performance: Number
  },
  stack: [{ type: String }],
  gallery: [{ type: String }],
  links: {
    live: String,
    repo: String
  },
  caseStudy: {
    overview: { type: String, required: true },
    problem: { type: String, required: true },
    process: [{ type: String }],
    outcome: { type: String, required: true },
    timeline: [{
      date: String,
      title: String,
      description: String,
      type: { type: String, enum: ['milestone', 'decision', 'launch'] }
    }]
  },
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    orbit: { type: Number, default: 1 }
  },
  featured: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ['active', 'archived', 'draft'], 
    default: 'active' 
  }
}, {
  timestamps: true
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
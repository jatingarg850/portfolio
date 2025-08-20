import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  category: string;
  proficiency: number;
  description?: string;
  proof: {
    repos?: string[];
    certificates?: string[];
    projects?: string[];
  };
  position: {
    x: number;
    y: number;
  };
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  proficiency: { type: Number, required: true, min: 0, max: 100 },
  description: String,
  proof: {
    repos: [{ type: String }],
    certificates: [{ type: String }],
    projects: [{ type: String }]
  },
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 }
  },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

export default mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);
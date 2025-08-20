import mongoose, { Schema, Document } from 'mongoose';

export interface IAnalytics extends Document {
  date: Date;
  pageViews: number;
  uniqueVisitors: number;
  projectViews: { [projectId: string]: number };
  contactFormViews: number;
  contactFormSubmissions: number;
  discoveryCallRequests: number;
  averageSessionDuration: number;
  bounceRate: number;
  topReferrers: string[];
  deviceTypes: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  topPages: Array<{
    path: string;
    views: number;
  }>;
  conversionFunnel: {
    visitors: number;
    projectViews: number;
    contactViews: number;
    submissions: number;
    calls: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  date: { type: Date, required: true, unique: true },
  pageViews: { type: Number, default: 0 },
  uniqueVisitors: { type: Number, default: 0 },
  projectViews: { type: Map, of: Number, default: {} },
  contactFormViews: { type: Number, default: 0 },
  contactFormSubmissions: { type: Number, default: 0 },
  discoveryCallRequests: { type: Number, default: 0 },
  averageSessionDuration: { type: Number, default: 0 },
  bounceRate: { type: Number, default: 0 },
  topReferrers: [{ type: String }],
  deviceTypes: {
    desktop: { type: Number, default: 0 },
    mobile: { type: Number, default: 0 },
    tablet: { type: Number, default: 0 }
  },
  topPages: [{
    path: String,
    views: Number
  }],
  conversionFunnel: {
    visitors: { type: Number, default: 0 },
    projectViews: { type: Number, default: 0 },
    contactViews: { type: Number, default: 0 },
    submissions: { type: Number, default: 0 },
    calls: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

export default mongoose.models.Analytics || mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);
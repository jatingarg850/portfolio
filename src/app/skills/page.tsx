'use client';

import { useState, useEffect } from 'react';
import SkillsGrid from './SkillsGrid';
import { DEFAULT_SKILLS } from '@/lib/constants';
import { Skill } from '@/lib/types';

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skills');
        if (!res.ok) throw new Error('Failed to fetch skills');
        const { data } = await res.json();
        setSkills(data || []);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err instanceof Error ? err.message : 'Failed to load skills');
        // Use default skills if API fails
        setSkills([...DEFAULT_SKILLS]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading skills...</p>
        </div>
      </div>
    );
  }

  if (error && skills.length === 0) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unable to Load Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We&apos;re having trouble connecting to our skills database.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Skill Constellations
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Technical <span className="text-accent">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore Our technical expertise across different domains. Each skill is backed by real projects, 
            certifications, and years of hands-on experience.
          </p>
        </div>

        {/* Error notice if using fallback data */}
        {error && (
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm text-center">
              ⚠️ Showing cached skills data. Some information may not be up to date.
            </p>
          </div>
        )}

        {/* Skills by Category */}
        <SkillsGrid skills={skills} />

        {/* Additional Skills */}
        <div className="mt-20 text-center">
          <h2 className="font-display text-2xl font-bold mb-8">Beyond the Code</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Project Management',
              'Client Communication',
              'Performance Optimization',
              'SEO & Analytics',
              'Accessibility (A11y)',
              'DevOps & Deployment',
              'API Design',
              'Database Design',
              "3d Designing",
              'Assests Management',
              'IOT automation',
              'Help & Support'
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-muted/50 rounded-lg text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 py-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
          <h2 className="font-display text-3xl font-bold mb-4">
            Let&#39;s Build Something Amazing
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Ready to leverage these skills for your next project? Let&#39;s discuss how we can bring your vision to life.
          </p>
          <button className="btn-primary">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
}
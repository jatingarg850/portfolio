'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Star, ExternalLink, Github } from 'lucide-react';

export default function SkillsPage() {
  const skillCategories = ['Frontend', 'Backend', 'Design', 'Tools'];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Skill Constellations
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Navigate the <span className="text-accent">Tech Galaxy</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my technical expertise across different domains. Each skill is backed by real projects, 
            certifications, and years of hands-on experience.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h2 className="font-display text-2xl font-bold mb-8 text-center">
                  {category} Constellation
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      className="card p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display text-xl font-semibold">{skill.name}</h3>
                        <div className="text-accent font-bold">{skill.proficiency}%</div>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <motion.div
                          className="bg-accent h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                        />
                      </div>
                      
                      {/* Proof Links */}
                      {skill.proof && (
                        <div className="space-y-2">
                          {skill.proof.repos && skill.proof.repos.length > 0 && (
                            <div className="flex items-center gap-2">
                              <Github size={16} className="text-muted-foreground" />
                              <a 
                                href={skill.proof.repos[0]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-accent hover:underline"
                              >
                                View Repositories
                              </a>
                            </div>
                          )}
                          
                          {skill.proof.projects && skill.proof.projects.length > 0 && (
                            <div className="flex items-center gap-2">
                              <ExternalLink size={16} className="text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Used in {skill.proof.projects.length} project{skill.proof.projects.length > 1 ? 's' : ''}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
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

            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + (index * 0.05) }}
                className="p-4 bg-muted/50 rounded-lg text-sm font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-20 py-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Let&#39;s Build Something Amazing
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Ready to leverage these skills for your next project? Let&#39;s discuss how we can bring your vision to life.
          </p>
          <button className="btn-primary">
            Start a Project
          </button>
        </motion.div>
      </div>
    </div>
  );
}
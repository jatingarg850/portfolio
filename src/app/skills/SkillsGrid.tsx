'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

export default function SkillsGrid({ skills }: { skills: Skill[] }) {
  const skillCategories = ['Frontend', 'Backend', 'Design', 'Tools'];
  return (
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
                  key={skill._id || skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  className="card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold">{skill.name}</h3>
                    <div className="text-accent font-bold">{skill.proficiency}%</div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                    />
                  </div>
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
  );
}

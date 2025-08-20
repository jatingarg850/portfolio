'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  if (compact) {
    return (
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-lg max-w-xs">
        <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{project.tagline}</p>
        <div className="flex flex-wrap gap-1">
          {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
            <span key={key} className="metric-badge text-xs">
              {value}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="card p-6 h-full cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
              {project.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Calendar size={12} />
              {project.year}
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {project.tagline}
          </p>
        </div>
        <div className="flex gap-2 ml-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(project.metrics).map(([key, value]) => (
          <span key={key} className="metric-badge">
            {key === 'lcp' && <Zap size={12} className="mr-1" />}
            {value}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-4">
        <div className="text-xs text-muted-foreground mb-2">Tech Stack</div>
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-muted rounded font-medium"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs px-2 py-1 bg-muted rounded font-medium">
              +{project.stack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4">
        <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
          <span>Open Mission Logs</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="ml-1"
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
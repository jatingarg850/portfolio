'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/orbit/project-card';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
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
            <Rocket className="w-4 h-4 mr-2" />
            Mission Logs
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Explore the <span className="text-accent">Project Universe</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each project is a unique mission with its own challenges, solutions, and measurable outcomes. 
            Dive into the case studies to see the full journey.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => {
                <Link href={'${project}'}></Link>
                // Navigate to project detail
                console.log('Navigate to project:', project.slug);
                alert(`Navigate to project: ${project.links.live}`);
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 py-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Start Your Mission?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's build something amazing together. Every great product starts with a conversation.
          </p>
          <Link href={'/contact'}>
          <button className="btn-primary" >
            Dock Your Brief
          </button></Link>
        </motion.div>
      </div>
    </div>
  );
}
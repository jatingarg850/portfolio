
import ProjectsGrid from './ProjectsGrid';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

async function getProjects() {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch projects');
  const { data } = await res.json();
  return data;
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

  {/* Projects Grid */}
  <ProjectsGrid projects={projects} />

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Start Your Mission?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let&#39;s build something amazing together. Every great product starts with a conversation.
          </p>
          <Link href={'/contact'}>
            <button className="btn-primary" >
              Launch Your Vision
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
'use client';

import { ProjectCard } from '@/components/orbit/project-card';
import { Project } from '@/lib/types';

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: Project) => (
        <div
          key={project._id || project.id}
          className="cursor-pointer"
          onClick={() => window.open(project.links?.live, '_blank')}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

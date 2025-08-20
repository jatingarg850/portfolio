import SkillsGrid from './SkillsGrid';

async function getSkills() {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/skills`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch skills');
  const { data } = await res.json();
  return data;
}

export default async function SkillsPage() {
  const skills = await getSkills();
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Skill Constellations
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Navigate the <span className="text-accent">Tech Galaxy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my technical expertise across different domains. Each skill is backed by real projects, 
            certifications, and years of hands-on experience.
          </p>
        </div>

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
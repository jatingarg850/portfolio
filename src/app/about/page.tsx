'use client';

import { motion } from 'framer-motion';
import { User, Code, Palette, Zap, Heart, Coffee, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const tools = [
    { category: 'Design', items: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Vercel', 'AWS', 'Docker'] }
  ];

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance First',
      description: 'Every millisecond matters. I optimize for speed without compromising functionality.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'User-Centric',
      description: 'Great products start with understanding users and solving their real problems.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design Thinking',
      description: 'Beautiful interfaces that are intuitive, accessible, and conversion-focused.'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'SkillVerse Launch',
      description: 'Launched my interactive portfolio and expanded into full-stack consulting.'
    },
    {
      year: '2023',
      title: 'Freelance Focus',
      description: 'Transitioned to full-time freelancing, working with startups and enterprises.'
    },
    {
      year: '2022',
      title: 'Senior Developer',
      description: 'Led development teams and architected scalable web applications.'
    },
    {
      year: '2020',
      title: 'Full-Stack Journey',
      description: 'Expanded into backend development and cloud technologies.'
    },
    {
      year: '2018',
      title: 'Frontend Specialist',
      description: 'Started as a frontend developer, focusing on React and modern web technologies.'
    }
  ];

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
            <User className="w-4 h-4 mr-2" />
            Mission Commander
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The Human Behind <span className="text-accent">SkillVerse</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m a full-stack developer and designer who believes in building products that make a difference. 
            Here&apos;s my story and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">My Journey</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  My journey into the digital universe started with a simple curiosity: how do websites work? 
                  That question led me down a rabbit hole of HTML, CSS, and JavaScript that I&apos;m still exploring today.
                </p>
                <p>
                  Over the years, I&apos;ve had the privilege of working with startups that became unicorns, 
                  enterprises that needed digital transformation, and everything in between. Each project 
                  taught me something new about the intersection of technology, design, and human behavior.
                </p>
                <p>
                  What excites me most is the moment when a user interacts with something I&apos;ve built and 
                  it just works. That seamless experience, that &quot;aha&quot; moment, that&apos;s what I&apos;m chasing 
                  with every line of code and every pixel I push.
                </p>
                <p>
                  Today, I help businesses launch bold products that users love and that drive real results. 
                  Whether it&apos;s a lightning-fast landing page or a complex web application, I bring the same 
                  attention to detail and passion for excellence to every mission.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">What I Believe In</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="card p-6"
                  >
                    <div className="text-accent mb-3">{value.icon}</div>
                    <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">Mission Timeline</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Based in India (UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm">6+ years experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-accent" />
                  <span className="text-sm">Powered by coffee & curiosity</span>
                </div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-4">Mission Tools</h3>
              <div className="space-y-4">
                {tools.map((toolGroup) => (
                  <div key={toolGroup.category}>
                    <h4 className="text-sm font-medium text-accent mb-2">{toolGroup.category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {toolGroup.items.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-1 bg-muted rounded font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="card p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-4">Beyond Code</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>🎵 Music producer in spare time</p>
                <p>📚 Sci-fi book enthusiast</p>
                <p>🏃‍♂️ Marathon runner</p>
                <p>🌱 Sustainability advocate</p>
                <p>🎮 Retro gaming collector</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20"
            >
              <h3 className="font-display text-lg font-semibold mb-2">Let&apos;s Connect</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ready to start your next mission? Let&apos;s chat about your project.
              </p>
              <Link href="/contact" className="btn-primary w-full text-center text-sm">
                Dock Your Brief
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center py-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Launch Something Amazing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Every great product starts with a conversation. Let&apos;s discuss your vision and make it reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/projects" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
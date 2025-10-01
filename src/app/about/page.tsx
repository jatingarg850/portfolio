'use client';

import { motion } from 'framer-motion';
import { User, Code, Palette, Zap, Heart, Coffee, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {


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
            The Team Behind <span className="text-accent">DataVidhi</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At DataVidhi, we blend technical expertise with innovation to craft solutions that inspire users and empower businesses. From full-stack development and AI to IoT and data engineering, we deliver technology that scales with impact. Guided by data and driven by Vidhi, we build with precision, creativity, and purpose.
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
              <h2 className="font-display text-3xl font-bold mb-6">Our Journey</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  DataVidhi started with a clear mission — to deliver technology that solves real problems and drives measurable growth.
                </p>
                <p>
                  From our beginnings in web and mobile development, we have expanded into a full-service IT partner offering expertise in AI, IoT, data engineering, and digital marketing. Over the years, we&apos;ve built a reputation for precision, reliability, and innovation, helping businesses of all sizes scale with confidence.
                </p>
                <p>
                  Today, DataVidhi is a trusted partner for organizations worldwide, committed to turning ambitious ideas into powerful digital solutions.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">What we Believe in</h2>
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
                    <p className="text-muted-foreground text-sm">{value.description.replace('I believe', 'We believe').replace('I optimize', 'we optimize')}</p>
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
                  <span className="text-sm">Guided By Data, Driven By Vidhi</span>
                </div>
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
                Launch Your Vision
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
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
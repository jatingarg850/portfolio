'use client';

import { motion } from 'framer-motion';
import ProjectsGrid from './ProjectsGrid';
import { 
  Rocket, 
  TrendingUp, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const stats = [
    { label: "Projects Delivered", value: "200+", icon: <Rocket className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "99.5%", icon: <Award className="w-6 h-6" /> },
    { label: "Countries Served", value: "25+", icon: <Globe className="w-6 h-6" /> },
    { label: "ROI Increase", value: "40%", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const industries = [
    { name: "FinTech", projects: 45, description: "Banking, payments, and financial services" },
    { name: "Healthcare", projects: 38, description: "Medical devices, patient management, telemedicine" },
    { name: "E-commerce", projects: 52, description: "Online retail, marketplaces, logistics" },
    { name: "Manufacturing", projects: 31, description: "Industry 4.0, IoT, automation" },
    { name: "Education", projects: 24, description: "EdTech, learning platforms, student management" },
    { name: "Real Estate", projects: 18, description: "PropTech, property management, smart buildings" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Transforming Ideas Into
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our portfolio of successful digital transformations. From startup MVPs to enterprise-scale 
              solutions, each project represents our commitment to delivering exceptional results that drive business growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="font-display text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Industries We Transform
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions that address unique sector challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                    {industry.name}
                  </h3>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {industry.projects}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Proven Results That Matter
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our success is measured by the tangible impact we create for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "On-Time Delivery",
                value: "98%",
                description: "Projects delivered within agreed timelines"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Boost",
                value: "3.5x",
                description: "Average performance improvement achieved"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Client Retention",
                value: "95%",
                description: "Clients who continue working with us"
              }
            ].map((metric) => (
              <div key={metric.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4">
                  {metric.icon}
                </div>
                <div className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading our amazing projects...</p>
          </div>
        ) : (
          <ProjectsGrid projects={projects} />
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-20 py-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl text-white"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
            Let&apos;s transform your vision into a digital reality. Every great project starts with a conversation 
            about your goals, challenges, and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/schedule" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
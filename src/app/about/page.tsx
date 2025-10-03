'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp,
  Code,
  Palette,
  Heart,
  MapPin,
  Calendar,
  Coffee,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Excellence',
      description: 'We believe in writing maintainable, scalable code that stands the test of time and drives business value.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Every project is an opportunity to push boundaries and implement cutting-edge solutions that create competitive advantages.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships that drive mutual growth.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security and 99.9% uptime are not just promises - they are our standard operating procedures.'
    }
  ];

  const team = [
    {
      name: "Vidhi Sharma",
      role: "Founder & CEO",
      expertise: "AI/ML, Strategic Leadership",
      experience: "8+ years",
      education: "MS Computer Science, IIT Delhi",
      achievements: ["Led 50+ AI implementations", "Forbes 30 Under 30", "TEDx Speaker"],
      image: "/team/vidhi.jpg"
    },
    {
      name: "Arjun Patel", 
      role: "CTO & Co-founder",
      expertise: "Full-Stack Architecture, DevOps",
      experience: "10+ years",
      education: "B.Tech CSE, NIT Trichy",
      achievements: ["Ex-Google Senior Engineer", "Open Source Contributor", "AWS Certified Solutions Architect"],
      image: "/team/arjun.jpg"
    },
    {
      name: "Dr. Priya Mehta",
      role: "Head of Data Science",
      expertise: "Machine Learning, Data Engineering",
      experience: "12+ years",
      education: "PhD in Data Science, Stanford",
      achievements: ["Published 25+ Research Papers", "Ex-Microsoft Principal Scientist", "Kaggle Grandmaster"],
      image: "/team/priya.jpg"
    },
    {
      name: "Rohit Kumar",
      role: "Lead IoT Engineer", 
      expertise: "IoT, Embedded Systems, Hardware",
      experience: "7+ years",
      education: "M.Tech Electronics, IISc Bangalore",
      achievements: ["50+ IoT Deployments", "Patent Holder", "Industry 4.0 Expert"],
      image: "/team/rohit.jpg"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "DataVidhi Founded",
      description: "Started with a vision to democratize AI and data solutions for businesses of all sizes.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      year: "2020", 
      title: "First Enterprise Client",
      description: "Secured our first Fortune 500 client and delivered a transformative AI solution.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across 15 countries with 24/7 support.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "100+ Projects Milestone",
      description: "Successfully delivered 100+ projects with 99.5% client satisfaction rate.",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "AI Innovation Lab",
      description: "Launched dedicated R&D lab for next-generation AI and IoT solutions.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as 'Top AI Solutions Provider' by TechCrunch and Forbes.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "Global Clients", value: "200+", icon: <Users className="w-6 h-6" /> },
    { label: "Countries Served", value: "25+", icon: <Globe className="w-6 h-6" /> },
    { label: "Team Members", value: "50+", icon: <Users className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.5%", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Meet the DataVidhi Team
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            The Visionaries Behind <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DataVidhi</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At DataVidhi, we are a team of passionate technologists, data scientists, and innovators 
            committed to transforming businesses through cutting-edge AI, IoT, and full-stack solutions. 
            Our diverse expertise spans across industries, enabling us to deliver solutions that scale globally.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4">
                {stat.icon}
              </div>
              <div className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Journey</h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                DataVidhi was born from a simple yet powerful vision: to make advanced technology accessible 
                to businesses of all sizes. Founded in 2019 by a team of IIT and Stanford alumni, we started 
                with the belief that data-driven solutions should not be a luxury reserved for tech giants.
              </p>
              <p>
                From our humble beginnings as a three-person startup to becoming a trusted partner for 200+ 
                global enterprises, our journey has been defined by relentless innovation, unwavering commitment 
                to quality, and a deep understanding of our clients&apos; unique challenges.
              </p>
              <p>
                Today, DataVidhi stands as a beacon of technological excellence, with offices across three 
                continents and a team of world-class engineers, data scientists, and domain experts who 
                share our passion for transforming businesses through technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="font-display text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses worldwide with intelligent, scalable, and secure technology solutions 
                that drive measurable growth and competitive advantage.
              </p>
              
              <h3 className="font-display text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the global leader in AI-powered business transformation, making advanced technology 
                accessible, reliable, and impactful for organizations across all industries.
              </p>
            </div>
          </motion.div>
        </div>

       
        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
        >
          <h2 className="font-display text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 200+ global enterprises who trust DataVidhi for their digital transformation. 
            Let&apos;s discuss how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Project
            </Link>
            <Link href="/projects" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
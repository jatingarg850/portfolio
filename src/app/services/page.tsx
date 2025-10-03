'use client';

import { motion } from 'framer-motion';
import {
  Check,
  Rocket,
  Zap,
  Target,
  ArrowRight,
  Code,
  Brain,
  Smartphone,
  Cloud,
  Database,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  BarChart3,
  Palette
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      name: 'Starter',
      price: '$10 - $500',
      duration: '5-7 days',
      description: 'Perfect for landing pages and simple websites',
      icon: <Rocket className="w-6 h-6" />,
      features: [
        'Responsive landing page',
        'SEO optimization',
        'Contact forms',
        'Analytics setup',
        'Mobile-first design',
        '1 round of revisions',
        'Basic performance optimization'
      ],
      cta: 'Start',
      popular: false
    },
    {
      name: 'Growth',
      price: '$2K - $10K',
      duration: '3-5 weeks',
      description: 'Full-featured web applications and MVPs',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Custom web application',
        'User authentication',
        'Database integration',
        'API development',
        'Admin dashboard',
        'Payment integration',
        'Advanced SEO',
        '3 rounds of revisions',
        'Performance optimization',
        '30 days support'
      ],
      cta: 'Start',
      popular: true
    },
    {
      name: 'Scale',
      price: '$10K - $25K+',
      duration: '6-12 weeks',
      description: 'Enterprise solutions and complex systems',
      icon: <Target className="w-6 h-6" />,
      features: [
        'Complex web platform',
        'Microservices architecture',
        'Advanced integrations',
        'Custom CMS/Admin',
        'Multi-user roles',
        'Advanced analytics',
        'Design system',
        'Unlimited revisions',
        'Performance monitoring',
        '90 days support',
        'Team training'
      ],
      cta: 'Start',
      popular: false
    }
  ];

  const expertiseAreas = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, predictive analytics, computer vision, and NLP implementations that drive business intelligence.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "MLflow"],
      projects: "50+ AI Projects",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications with modern frameworks, scalable architecture, and cloud deployment.",
      technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript"],
      projects: "200+ Applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "IoT & Edge Computing",
      description: "Connected device solutions, sensor networks, real-time data processing, and industrial automation systems.",
      technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT", "Edge AI"],
      projects: "75+ IoT Deployments",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Big data pipelines, real-time analytics, data warehousing, and business intelligence solutions at scale.",
      technologies: ["Apache Spark", "Kafka", "Snowflake", "dbt", "Airflow"],
      projects: "100+ Data Pipelines",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps with seamless user experiences and robust backend integration.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      projects: "80+ Mobile Apps",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure, CI/CD pipelines, containerization, and automated deployment solutions.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      projects: "150+ Cloud Deployments",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", projects: "25+" },
    { name: "Fintech", icon: "💰", projects: "30+" },
    { name: "E-commerce", icon: "🛒", projects: "40+" },
    { name: "Manufacturing", icon: "🏭", projects: "20+" },
    { name: "Education", icon: "🎓", projects: "15+" },
    { name: "Real Estate", icon: "🏢", projects: "18+" }
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
            <Target className="w-4 h-4 mr-2" />
            Enterprise Solutions
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Transform Your Business with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cutting-Edge Technology</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From AI-powered solutions to full-stack applications, we deliver enterprise-grade technology
            that scales with your business and drives measurable results.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Our Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${area.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {area.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {area.projects}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {area.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                        +{area.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Choose Your Launch Package
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border flex flex-col h-full ${service.popular ? 'border-blue-500 scale-105 shadow-blue-500/25' : 'border-gray-200 dark:border-gray-700'
                  }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${service.popular
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-gray-900 dark:text-white">{service.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</div>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">{service.description}</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 border mt-auto ${service.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                >
                  {service.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{industry.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{industry.projects} Projects</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Our Development Process
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your business goals and technical requirements', icon: '🔍' },
                { step: '02', title: 'Strategy', desc: 'Creating comprehensive technical architecture and project roadmap', icon: '🎯' },
                { step: '03', title: 'Development', desc: 'Agile development with regular progress updates and demos', icon: '⚡' },
                { step: '04', title: 'Testing', desc: 'Comprehensive QA, security audits, and performance optimization', icon: '🧪' },
                { step: '05', title: 'Launch', desc: 'Deployment, monitoring, and ongoing support for success', icon: '🚀' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900 text-white flex items-center justify-center text-lg font-bold mx-auto mb-2 shadow-lg backdrop-blur-sm">
                      {item.step}
                    </div>
                    <div className="text-3xl mb-4">{item.icon}</div>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>

                  {/* Arrow for mobile */}
                  {index < 4 && (
                    <div className="md:hidden flex justify-center mt-4 mb-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/40 to-transparent"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center py-16 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl text-white"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join 200+ global enterprises who trust DataVidhi for their digital transformation.
            Let&apos;s discuss your project and build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
              Launch Your Vision
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/schedule" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
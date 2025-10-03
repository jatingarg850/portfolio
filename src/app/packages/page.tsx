'use client';

import { motion } from 'framer-motion';
import { 
  Check, 
  X,
  Rocket, 
  Zap, 
  Target, 
  ArrowRight,
  Star,
  Crown,
  Shield,
  Clock,
  Users,
  Headphones,
  Code,
  Database,
  Smartphone,
  Cloud,
  Brain,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function PackagesPage() {
  const packages = [
    {
      name: 'Starter',
      subtitle: 'Perfect for MVPs and Small Projects',
      price: '$2,500',
      originalPrice: '$3,500',
      duration: '2-3 weeks',
      description: 'Ideal for startups and small businesses looking to establish their digital presence with a professional solution.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Custom web application or website',
        'Responsive design (mobile-first)',
        'Basic SEO optimization',
        'Contact forms and analytics',
        'Content management system',
        'Social media integration',
        'Basic performance optimization',
        '2 rounds of revisions',
        '30 days post-launch support',
        'Documentation and training'
      ],
      notIncluded: [
        'Advanced integrations',
        'Custom API development',
        'Multi-user authentication',
        'Payment processing',
        'Advanced analytics'
      ],
      deliverables: [
        'Fully functional website/app',
        'Source code and documentation',
        'Deployment on your hosting',
        'Basic SEO setup',
        'Training session'
      ]
    },
    {
      name: 'Professional',
      subtitle: 'Complete Business Solutions',
      price: '$7,500',
      originalPrice: '$10,000',
      duration: '4-6 weeks',
      description: 'Comprehensive solution for growing businesses that need advanced features and integrations.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Advanced web application',
        'User authentication & roles',
        'Database design & optimization',
        'API development & integration',
        'Payment gateway integration',
        'Admin dashboard',
        'Advanced SEO & analytics',
        'Email automation setup',
        'Security implementation',
        'Performance optimization',
        '3 rounds of revisions',
        '60 days post-launch support',
        'Priority support channel'
      ],
      notIncluded: [
        'Mobile app development',
        'AI/ML features',
        'IoT integrations',
        'Enterprise-level scaling'
      ],
      deliverables: [
        'Full-stack web application',
        'Admin panel and user dashboard',
        'API documentation',
        'Database schema',
        'Deployment and monitoring setup',
        'Comprehensive training'
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'Scalable Enterprise Solutions',
      price: '$20,000',
      originalPrice: '$28,000',
      duration: '8-12 weeks',
      description: 'Enterprise-grade solution with advanced features, AI integration, and scalable architecture.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      popular: false,
      features: [
        'Complex enterprise application',
        'Microservices architecture',
        'AI/ML integration',
        'Advanced user management',
        'Multi-tenant support',
        'Real-time features',
        'Advanced analytics & reporting',
        'Third-party integrations',
        'Mobile app (iOS/Android)',
        'DevOps & CI/CD setup',
        'Security audit & compliance',
        'Load balancing & scaling',
        'Unlimited revisions',
        '90 days post-launch support',
        'Dedicated project manager',
        '24/7 priority support'
      ],
      notIncluded: [],
      deliverables: [
        'Enterprise web platform',
        'Mobile applications',
        'Admin and analytics dashboards',
        'Complete API ecosystem',
        'DevOps infrastructure',
        'Security documentation',
        'Team training and handover'
      ]
    }
  ];

  const addOns = [
    {
      name: 'Mobile App Development',
      description: 'Native iOS and Android apps',
      price: '+$5,000',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: 'AI/ML Integration',
      description: 'Custom AI features and analytics',
      price: '+$3,000',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'IoT Integration',
      description: 'Connect and manage IoT devices',
      price: '+$4,000',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: 'Advanced Analytics',
      description: 'Custom dashboards and reporting',
      price: '+$2,500',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'Cloud Infrastructure',
      description: 'AWS/Azure setup and optimization',
      price: '+$2,000',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: 'Extended Support',
      description: '6 months of priority support',
      price: '+$1,500',
      icon: <Headphones className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      package: "Professional Package",
      quote: "DataVidhi delivered exactly what we needed. The Professional package was perfect for our growing startup.",
      rating: 5,
      savings: "$2,500"
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Plus",
      package: "Enterprise Package",
      quote: "The Enterprise package transformed our business. ROI was achieved within 3 months of launch.",
      rating: 5,
      savings: "$8,000"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director, MedTech Solutions",
      package: "Starter Package",
      quote: "Great value for money. The Starter package gave us everything we needed to validate our concept.",
      rating: 5,
      savings: "$1,000"
    }
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
              <Crown className="w-4 h-4 mr-2" />
              Premium Packages
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Success Package
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transparent pricing, exceptional value. Each package is designed to deliver maximum ROI 
              and includes everything you need to succeed in the digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Fixed timeline delivery</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Dedicated project team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'border-purple-500 shadow-purple-500/25' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} text-white mb-4`}>
                    {pkg.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pkg.subtitle}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {pkg.price}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        {pkg.originalPrice}
                      </div>
                      <div className="text-xs text-green-600 font-semibold">
                        Save ${parseInt(pkg.originalPrice.replace('$', '').replace(',', '')) - parseInt(pkg.price.replace('$', '').replace(',', ''))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {pkg.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 dark:text-white mt-6">Not Included:</h4>
                      {pkg.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Deliverables:</h4>
                  <div className="space-y-2">
                    {pkg.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  href="/contact" 
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 shadow-lg' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Enhance Your Package
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Add specialized features to customize your solution and maximize your investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
                      {addon.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{addon.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{addon.description}</p>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {addon.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              See how our packages have transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{testimonial.package}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-semibold">Saved {testimonial.savings}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Package FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I upgrade my package during development?',
                a: 'Yes! You can upgrade to a higher package at any time. We\'ll adjust the timeline and deliverables accordingly, and you\'ll only pay the difference.'
              },
              {
                q: 'What if my project needs custom features not in any package?',
                a: 'We can create a custom package tailored to your specific needs. Contact us for a personalized quote based on your requirements.'
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we offer flexible payment plans. Typically 50% upfront and 50% on completion, but we can discuss other arrangements based on your needs.'
              },
              {
                q: 'What happens if the project takes longer than estimated?',
                a: 'We stick to our timelines. If delays are on our end, there\'s no additional cost. If scope changes extend the timeline, we\'ll discuss adjustments transparently.'
              },
              {
                q: 'Is ongoing maintenance included?',
                a: 'Each package includes post-launch support (30-90 days). For ongoing maintenance, we offer separate maintenance packages starting at $500/month.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
              >
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center py-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl text-white"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
            Choose your package and let's transform your vision into reality. 
            Every great success story starts with the right foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
              Choose Your Package
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
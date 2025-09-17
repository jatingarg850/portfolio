'use client';

import { motion } from 'framer-motion';
import { Check, Rocket, Zap, Target, ArrowRight } from 'lucide-react';
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
            <Target className="w-4 h-4 mr-2" />
            Mission Packages
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-accent">Launch Package</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From quick landing pages to complex web platforms, we have the right mission package 
            for your project needs and budget.
          </p>
        </motion.div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative card p-8 ${
                service.popular ? 'border-accent shadow-lg scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-accent mb-1">{service.price}</div>
                <div className="text-sm text-muted-foreground">{service.duration}</div>
                <p className="text-muted-foreground mt-4">{service.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  service.popular 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                    : 'border border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {service.cta}
              </Link>
            </motion.div>
          ))}
        </div>



        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Mission Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Build', desc: 'Development with regular progress updates' },
              { step: '04', title: 'Ship', desc: 'Testing, deployment, and launch' },
              { step: '05', title: 'Iterate', desc: 'Ongoing support and improvements' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What\'s included in the project cost?',
                a: 'All packages include design, development, testing, deployment, and initial support. No hidden fees.'
              },
              {
                q: 'How do revisions work?',
                a: 'Each package includes a set number of revision rounds. Additional revisions can be purchased separately.'
              },
              {
                q: 'Do you provide ongoing maintenance?',
                a: 'Yes, we offer maintenance packages starting at $200/month for updates, security, and minor changes.'
              },
              {
                q: 'What if my project doesn\'t fit these packages?',
                a: 'No problem! we can create custom proposals for unique requirements. Just Book the free call.'
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center py-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Launch Your Mission?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let&#39;s discuss your project and find the perfect package for your needs.
            </p>
          <Link href="/contact" className="btn-primary group">
            Launch Your Vision
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Core', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'Services', href: '/skills' },
      { name: 'Packages', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Startup Tech Development', href: '/contact' },
      { name: 'Android/iOS Apps', href: '/contact' },
      { name: 'Data Engineering', href: '/contact' },
      { name: 'IoT Projects', href: '/contact' },
      { name: 'AI/ML Solutions', href: '/contact' },
      { name: 'Web Development', href: '/contact' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-blue-500/20">
                  <Image 
                    src="/image.jpg" 
                    alt="DataVidhi Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-full object-cover w-full h-full" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold">DataVidhi</span>
                  <span className="text-xs text-gray-400">Guided by Data, Driven By Vidhi</span>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                From first launch to full scale, we build products that win users and grow businesses. 
                Precision in every byte, guided by data.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a 
                    href="mailto:datavidhics@gmail.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    datavidhics@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">Available for consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">Global Remote Services</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3 mb-8">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/20">
                <h4 className="font-semibold mb-2">Ready to Launch?</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Let&apos;s discuss your next project and bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Launch Your Vision
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">© {currentYear} DataVidhi. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-gray-400">for innovation.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500">
              <div className="mb-4 md:mb-0">
                <span>Precision in Every Byte • Guided by Data, Driven by Vidhi</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <span className="flex items-center">🚀 20+ Projects Launched</span>
                <span className="flex items-center">⚡ 60 Days Delivery</span>
                <span className="flex items-center">🎯 100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
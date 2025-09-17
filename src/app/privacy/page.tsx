'use client';

import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Privacy & Security
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how DataVidhi collects, uses, and protects your information.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="w-6 h-6 mr-3 text-blue-600" />
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out contact forms or schedule consultations</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Communicate with us via email or other channels</li>
              <li>Use our website and services</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-blue-600" />
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about projects, services, and updates</li>
              <li>Analyze usage patterns to improve user experience</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-blue-600" />
              Data Protection
            </h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
              <li>Secure hosting and backup systems</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-blue-600" />
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> datavidhics@gmail.com</p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This policy is effective immediately and will remain in effect except with respect to any changes in its provisions in the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, Rocket, CheckCircle, AlertCircle, User, Lock } from 'lucide-react';

export default function SetupPage() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    setSeedResult(null);

    try {
      const response = await fetch('/api/seed', {
        method: 'POST',
      });

      const result = await response.json();
      setSeedResult(result);
    } catch {
      setSeedResult({
        success: false,
        message: 'Failed to seed database. Please check your MongoDB connection.'
      });
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium mb-6">
            <Database className="w-4 h-4 mr-2" />
            Database Setup
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            SkillVerse <span className="text-purple-400">Setup</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Initialize your portfolio database with sample projects, admin user, and initial data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Database Seeding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-purple-400" />
              Database Setup
            </h2>

            <p className="text-gray-300 mb-6">
              Seed your MongoDB database with sample projects, admin user profile, and initial data.
            </p>

            <button
              onClick={handleSeedDatabase}
              disabled={isSeeding}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              {isSeeding ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                  />
                  Seeding Database...
                </>
              ) : (
                <>
                  <Rocket className="w-4 h-4 mr-2" />
                  Initialize Database
                </>
              )}
            </button>

            {seedResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-start ${seedResult.success
                  ? 'bg-green-900/50 border border-green-500/50'
                  : 'bg-red-900/50 border border-red-500/50'
                  }`}
              >
                {seedResult.success ? (
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <div className={`font-medium ${seedResult.success ? 'text-green-300' : 'text-red-300'}`}>
                    {seedResult.success ? 'Success!' : 'Error'}
                  </div>
                  <div className={`text-sm ${seedResult.success ? 'text-green-400' : 'text-red-400'}`}>
                    {seedResult.message}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Setup Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              What gets created?
            </h2>

            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2 text-blue-400" />
                  Admin User Profile
                </h3>
                <p className="text-sm">Complete developer profile with stats, skills, and social links.</p>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">Sample Projects</h3>
                <p className="text-sm">5 diverse projects across Web, UI/UX, APIs, and Experiments categories.</p>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">Database Collections</h3>
                <ul className="text-sm space-y-1">
                  <li>• users - Profile information</li>
                  <li>• projects - Portfolio projects</li>
                  <li>• contactsubmissions - Form submissions</li>
                  <li>• discoverycalls - Scheduled calls</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
              <div className="text-sm text-blue-300">
                <strong>MongoDB Connection:</strong><br />
                mongodb://localhost:27017/portfolio
              </div>
            </div>

            {seedResult?.success && (
              <div className="mt-4 p-4 bg-green-900/30 rounded-lg border border-green-500/30">
                <div className="text-sm text-green-300">
                  <strong className="flex items-center">
                    <Lock className="w-4 h-4 mr-2" />
                    Admin Login Credentials:
                  </strong>
                  <div className="mt-2 font-mono">
                    Email: jatingarg850@gmail.com<br />
                    Password: Jatingarg850@
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex gap-4">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Portfolio
            </Link>
            <a
              href="/admin/login"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Admin Login
            </a>
            <a
              href="/schedule"
              className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Test Discovery Call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FolderOpen, 
  Calendar, 
  MessageSquare, 
  Clock,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { ProtectedRoute } from '@/components/admin/protected-route';
import { AdminLayout } from '@/components/admin/admin-layout';
import Link from 'next/link';

interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalContacts: number;
  newContacts: number;
  scheduledCalls: number;
  completedCalls: number;
  conversionRate: number;
}

interface RecentActivity {
  id: string;
  type: 'contact' | 'call' | 'project';
  title: string;
  description: string;
  time: string;
  status: 'new' | 'pending' | 'completed';
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    activeProjects: 0,
    totalContacts: 0,
    newContacts: 0,
    scheduledCalls: 0,
    completedCalls: 0,
  // portfolioViews: 0,
    conversionRate: 0
  });
  
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch dashboard statistics
      const [projectsRes, contactsRes, callsRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/contacts'),
        fetch('/api/calls')
      ]);

      const [projectsData, contactsData, callsData] = await Promise.all([
        projectsRes.json(),
        contactsRes.json(),
        callsRes.json()
      ]);

      if (projectsData.success && contactsData.success) {
        const projects = projectsData.data || [];
        const contacts = contactsData.data || [];
        const calls = callsData.success ? callsData.data || [] : [];

        setStats({
          totalProjects: projects.length,
          activeProjects: projects.filter((p: { status: string }) => p.status === 'active').length,
          totalContacts: contacts.length,
          newContacts: contacts.filter((c: { status: string }) => c.status === 'new').length,
          scheduledCalls: calls.filter((c: { status: string }) => c.status === 'scheduled').length,
          completedCalls: calls.filter((c: { status: string }) => c.status === 'completed').length,
          conversionRate: contacts.length > 0 ? Math.round((calls.length / contacts.length) * 100) : 0
        });

        // Create recent activity from contacts and calls
        const activities: RecentActivity[] = [
          ...contacts.slice(0, 3).map((contact: { _id: string; name: string; type: string; createdAt: string; status: string }) => ({
            id: contact._id,
            type: 'contact' as const,
            title: `New contact from ${contact.name}`,
            description: `${contact.type} project inquiry`,
            time: new Date(contact.createdAt).toLocaleDateString(),
            status: contact.status === 'new' ? 'new' : 'pending'
          })),
          ...calls.slice(0, 2).map((call: { _id: string; name: string; projectType: string; scheduledDate: string; status: string }) => ({
            id: call._id,
            type: 'call' as const,
            title: `Discovery call with ${call.name}`,
            description: `${call.projectType} discussion`,
            time: new Date(call.scheduledDate).toLocaleDateString(),
            status: call.status === 'completed' ? 'completed' : 'pending'
          }))
        ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 5);

        setRecentActivity(activities);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      change: `${stats.activeProjects} active`,
      icon: FolderOpen,
      color: 'blue',
      href: '/admin/projects'
    },
    {
      title: 'New Contacts',
      value: stats.newContacts,
      change: `${stats.totalContacts} total`,
      icon: Users,
      color: 'green',
      href: '/admin/contacts'
    },
    {
      title: 'Scheduled Calls',
      value: stats.scheduledCalls,
      change: `${stats.completedCalls} completed`,
      icon: Calendar,
      color: 'purple',
      href: '/admin/calls'
    },
    {
      title: 'Update Profile',
      value: '',
      change: 'Edit your info',
      icon: ArrowUpRight,
      color: 'blue',
      href: '/admin/profile'
    }
  ];

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Here&#39;s what&#39;s happening with your portfolio today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={card.href}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {card.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                          {loading ? '...' : card.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {card.change}
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg bg-${card.color}-100 dark:bg-${card.color}-900/20 group-hover:scale-110 transition-transform`}>
                        <card.icon className={`w-6 h-6 text-${card.color}-600 dark:text-${card.color}-400`} />
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 mt-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Recent Activity
                  </h2>
                </div>
                <div className="p-6">
                  {loading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse flex space-x-4">
                          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : recentActivity.length > 0 ? (
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-4">
                          <div className={`p-2 rounded-full ${
                            activity.type === 'contact' ? 'bg-blue-100 dark:bg-blue-900/20' :
                            activity.type === 'call' ? 'bg-purple-100 dark:bg-purple-900/20' :
                            'bg-green-100 dark:bg-green-900/20'
                          }`}>
                            {activity.type === 'contact' ? (
                              <MessageSquare className={`w-4 h-4 ${
                                activity.type === 'contact' ? 'text-blue-600 dark:text-blue-400' : ''
                              }`} />
                            ) : activity.type === 'call' ? (
                              <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            ) : (
                              <FolderOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {activity.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {activity.description}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                              {activity.time}
                            </p>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'new' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                            activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          }`}>
                            {activity.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">No recent activity</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Response Rate</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {stats.conversionRate}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Active Projects</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {stats.activeProjects}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Pending Contacts</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {stats.newContacts}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/admin/projects/new"
                    className="flex items-center justify-between w-full p-3 text-left bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
                      Add New Project
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </Link>
                  
                    <Link href="/admin/skills" className="flex items-center justify-between w-full p-3 text-left bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 rounded-lg transition-colors">
                      <span className="text-sm font-medium text-yellow-900 dark:text-yellow-300">
                        Add Skill
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </Link>
                  
                    <Link href="/admin/contacts" className="flex items-center justify-between w-full p-3 text-left bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                      <span className="text-sm font-medium text-green-900 dark:text-green-300">
                        Review Contacts
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </Link>
                  
                    <Link href="/admin/profile" className="flex items-center justify-between w-full p-3 text-left bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                      <span className="text-sm font-medium text-purple-900 dark:text-purple-300">
                        Update Profile
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
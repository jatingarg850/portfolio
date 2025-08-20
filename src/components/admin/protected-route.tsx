'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'super-admin';
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ 
  children, 
  requiredRole = 'admin', 
  fallback 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session) {
      router.push('/admin/login');
      return;
    }

    // Check role permissions
    if (requiredRole === 'super-admin' && session.user?.role !== 'super-admin') {
      router.push('/admin/unauthorized');
      return;
    }

    if (!session.user?.role || (session.user.role !== 'admin' && session.user.role !== 'super-admin')) {
      router.push('/admin/unauthorized');
      return;
    }
  }, [session, status, router, requiredRole]);

  // Loading state
  if (status === 'loading') {
    return fallback || (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-purple-200">Authenticating...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!session) {
    return null; // Will redirect in useEffect
  }

  // Insufficient permissions
  if (requiredRole === 'super-admin' && session.user?.role !== 'super-admin') {
    return null; // Will redirect in useEffect
  }

  if (!session.user?.role || (session.user.role !== 'admin' && session.user.role !== 'super-admin')) {
    return null; // Will redirect in useEffect
  }

  // Authenticated and authorized
  return <>{children}</>;
}
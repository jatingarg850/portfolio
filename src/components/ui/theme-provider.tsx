'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeConfig } from '@/lib/types';

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>({
    mode: 'light',
    accentHue: 240,
    reducedMotion: false,
    accessibleMode: false,
    language: 'en'
  });

  useEffect(() => {
    // Load theme from localStorage
    const saved = localStorage.getItem('skillverse-theme');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTheme(prev => ({ ...prev, ...parsed }));
      } catch {
  console.warn('Failed to parse saved theme');
      }
    }

    // Check for system preferences
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setTheme(prev => ({
      ...prev,
      mode: saved ? prev.mode : (prefersDark ? 'dark' : 'light'),
      reducedMotion: prefersReducedMotion
    }));
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    // Use standard dark mode class
    if (theme.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    root.style.setProperty('--accent-hue', theme.accentHue.toString());
    
    if (theme.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Save to localStorage
    localStorage.setItem('skillverse-theme', JSON.stringify(theme));
  }, [theme]);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
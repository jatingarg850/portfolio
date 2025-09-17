'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Moon, Sun, Settings, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '@/components/ui/theme-provider';
import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';

export function Header() {
  const { theme, updateTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navigation = [
    { name: 'Core', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/skills' },
    { name: 'Packages', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const accentColors = [
    { hue: 240, name: 'Blue' },
    { hue: 280, name: 'Purple' },
    { hue: 320, name: 'Pink' },
    { hue: 0, name: 'Red' },
    { hue: 30, name: 'Orange' },
    { hue: 120, name: 'Green' },
    { hue: 180, name: 'Cyan' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-blue-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Image src="/image.jpg" alt="DataVidhi Logo" width={32} height={32} className="rounded-full object-cover w-full h-full" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-gray-900 dark:text-white">DataVidhi</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Guided by Data, Driven By Vidhi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => updateTheme({ mode: theme.mode === 'dark' ? 'light' : 'dark' })}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Settings */}
            <Dialog.Root open={settingsOpen} onOpenChange={setSettingsOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                  aria-label="Settings"
                >
                  <Settings size={20} />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-card rounded-xl border shadow-lg">
                  <Dialog.Title className="text-lg font-semibold mb-4">Settings</Dialog.Title>
                  
                  <div className="space-y-6">
                    {/* Accent Color */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Accent Color</label>
                      <div className="flex flex-wrap gap-2">
                        {accentColors.map((color) => (
                          <button
                            key={color.hue}
                            onClick={() => updateTheme({ accentHue: color.hue })}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${
                              theme.accentHue === color.hue ? 'border-white scale-110' : 'border-transparent'
                            }`}
                            style={{ backgroundColor: `hsl(${color.hue} 70% 50%)` }}
                            aria-label={`Select ${color.name} accent color`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Accessibility Options */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label htmlFor="reduced-motion" className="text-sm font-medium">
                          Reduced Motion
                        </label>
                        <Switch.Root
                          id="reduced-motion"
                          checked={theme.reducedMotion}
                          onCheckedChange={(checked) => updateTheme({ reducedMotion: checked })}
                          className="w-11 h-6 bg-muted rounded-full data-[state=checked]:bg-accent transition-colors"
                        >
                          <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform data-[state=checked]:translate-x-5 translate-x-0.5" />
                        </Switch.Root>
                      </div>

                      <div className="flex items-center justify-between">
                        <label htmlFor="accessible-mode" className="text-sm font-medium">
                          Accessible Mode
                        </label>
                        <Switch.Root
                          id="accessible-mode"
                          checked={theme.accessibleMode}
                          onCheckedChange={(checked) => updateTheme({ accessibleMode: checked })}
                          className="w-11 h-6 bg-muted rounded-full data-[state=checked]:bg-accent transition-colors"
                        >
                          <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform data-[state=checked]:translate-x-5 translate-x-0.5" />
                        </Switch.Root>
                      </div>
                    </div>

                    {/* Language */}
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Language</label>
                      <button
                        onClick={() => updateTheme({ language: theme.language === 'en' ? 'hi' : 'en' })}
                        className="flex items-center space-x-2 px-3 py-1 rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <Globe size={16} />
                        <span className="text-sm">{theme.language === 'en' ? 'EN' : 'हि'}</span>
                      </button>
                    </div>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      className="absolute top-4 right-4 p-1 rounded-lg hover:bg-accent/10 transition-colors"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border mt-4 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-accent transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
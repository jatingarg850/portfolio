'use client';

import { useEffect, useMemo, useState } from 'react';

// Responsive hook for mobile detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/types';
import { useTheme } from '@/components/ui/theme-provider';
import { ProjectCard } from './project-card';
import { Search, Filter, Sparkles } from 'lucide-react';

interface OrbitCanvasProps {
  onProjectClick: (project: Project) => void;
}

type CategoryKey =
  | 'Startup Tech Development'
  | 'Android/iOS Application'
  | 'Data Engineering Solutions'
  | 'IoT Project'
  | 'AI/ML/DL/Gen AI Projects'
  | 'Web'
  | 'UI/UX'
  | 'APIs'
  | 'Experiments';

const CATEGORY_CONFIG: Record<CategoryKey, { bg: string; glow: string; ring: string }> = {
  'Startup Tech Development': { bg: 'from-red-400 to-red-600', glow: 'rgba(239,68,68,0.6)', ring: 'rgba(239,68,68,0.4)' },
  'Android/iOS Application': { bg: 'from-green-400 to-green-600', glow: 'rgba(34,197,94,0.6)', ring: 'rgba(34,197,94,0.4)' },
  'Data Engineering Solutions': { bg: 'from-yellow-400 to-yellow-600', glow: 'rgba(253,224,71,0.6)', ring: 'rgba(253,224,71,0.4)' },
  'IoT Project': { bg: 'from-cyan-400 to-cyan-600', glow: 'rgba(6,182,212,0.6)', ring: 'rgba(6,182,212,0.4)' },
  'AI/ML/DL/Gen AI Projects': { bg: 'from-indigo-400 to-indigo-600', glow: 'rgba(99,102,241,0.6)', ring: 'rgba(99,102,241,0.4)' },
  Web: { bg: 'from-blue-400 to-blue-600', glow: 'rgba(59,130,246,0.6)', ring: 'rgba(59,130,246,0.4)' },
  'UI/UX': { bg: 'from-purple-400 to-purple-600', glow: 'rgba(147,51,234,0.6)', ring: 'rgba(147,51,234,0.4)' },
  APIs: { bg: 'from-emerald-400 to-emerald-600', glow: 'rgba(16,185,129,0.6)', ring: 'rgba(16,185,129,0.4)' },
  Experiments: { bg: 'from-orange-400 to-orange-600', glow: 'rgba(249,115,22,0.6)', ring: 'rgba(249,115,22,0.4)' },
};


// Responsive layout values
const DESKTOP_PLANET_SIZE = 72;
const DESKTOP_INNER_RADIUS = 170;
const DESKTOP_RING_GAP = 100;
const MOBILE_PLANET_SIZE = 48;
const MOBILE_INNER_RADIUS = 90;
const MOBILE_RING_GAP = 60;
const MAX_PER_RING = 8;

export function OrbitCanvas({ onProjectClick }: OrbitCanvasProps) {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const PLANET_SIZE = isMobile ? MOBILE_PLANET_SIZE : DESKTOP_PLANET_SIZE;
  const INNER_RADIUS = isMobile ? MOBILE_INNER_RADIUS : DESKTOP_INNER_RADIUS;
  const RING_GAP = isMobile ? MOBILE_RING_GAP : DESKTOP_RING_GAP;
  // const CANVAS_HEIGHT = isMobile ? MOBILE_CANVAS_HEIGHT : DESKTOP_CANVAS_HEIGHT;
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Effects
  useEffect(() => {
    let cancelled = false;
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (!cancelled) {
          if (data?.success && Array.isArray(data.data)) setProjects(data.data);
          else setProjects([]);
        }
      } catch (e) {
        if (!cancelled) setProjects([]);
        console.error('Error fetching projects:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchProjects();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Derived
  const filteredProjects = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return projects.filter((p) => {
      const matchesSearch =
        (p.title || '').toLowerCase().includes(term) ||
        (p.tagline || '').toLowerCase().includes(term);
      const matchesCategory =
        selectedCategory === 'all' ||
        ((p.category || '').toLowerCase() === selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [projects, searchTerm, selectedCategory]);

  type Positioned = {
    project: Project;
    ringIndex: number;
    angleDeg: number;
    rotationDuration: number;
  };

  const positioned = useMemo<Positioned[]>(() => {
    const N = filteredProjects.length;
    const result: Positioned[] = [];
    let cursor = 0;
    let ring = 0;

    while (cursor < N) {
      const remaining = N - cursor;
      const take = Math.min(MAX_PER_RING, remaining);
      const angleStep = 360 / take;
      const ringStart = (ring * 23) % 360; // stable stagger per ring

      for (let k = 0; k < take; k++) {
        const project = filteredProjects[cursor + k];
        result.push({
          project,
          ringIndex: ring,
          angleDeg: ringStart + k * angleStep,
          rotationDuration: 18 + ring * 7,
        });
      }
      cursor += take;
      ring += 1;
    }
    return result;
  }, [filteredProjects]);

  const ringsCount = useMemo(
    () => (positioned.length ? positioned[positioned.length - 1].ringIndex + 1 : 0),
    [positioned]
  );

  const reducedMotion = Boolean(theme && (theme as { reducedMotion?: boolean }).reducedMotion);
  const accessibleMode = Boolean(theme && (theme as { accessibleMode?: boolean }).accessibleMode);

  const getCatKey = (cat: string): CategoryKey =>
    (
      [
        'Startup Tech Development',
        'Android/iOS Application',
        'Data Engineering Solutions',
        'IoT Project',
        'AI/ML/DL/Gen AI Projects',
        'Web',
        'UI/UX',
        'APIs',
        'Experiments',
      ] as const
    ).includes(cat as CategoryKey)
      ? (cat as CategoryKey)
      : 'Startup Tech Development';

  const hoveredRingIndex = useMemo(() => {
    if (!hoveredProject) return null;
    const p = positioned.find((x) => x.project.id === hoveredProject.id);
    return p ? p.ringIndex : null;
  }, [hoveredProject, positioned]);

  // Views
  const AccessibleGrid = (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            {['all', 'Startup Tech Development', 'Android/iOS Application', 'Data Engineering Solutions', 'IoT Project', 'AI/ML/DL/Gen AI Projects', 'Web', 'UI/UX', 'APIs', 'Experiments'].map((c) => (
              <option key={c} value={c}>
                {c === 'all' ? 'All Categories' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id ?? `${project.title ?? 'proj'}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cursor-pointer"
            onClick={() => onProjectClick(project)}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const LoadingView = (
    <div className={`relative w-full rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-purple-500/20 flex items-center justify-center ${isMobile ? 'h-[400px]' : 'h-[700px]'}`}>
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-purple-200">Initializing cosmic system...</p>
        <div className="flex items-center justify-center mt-2 text-purple-300">
          <Sparkles className="w-4 h-4 mr-2" />
          <span className="text-sm">Loading {projects.length} celestial bodies</span>
        </div>
      </div>
    </div>
  );

  const OrbitsView = (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-purple-500/20 ${isMobile ? 'h-[400px]' : 'h-[700px]'}`}>
      {/* Content boxes for mobile: move outside orbit area, stack vertically */}
      {isMobile && (
        <div className="flex flex-col items-center gap-2 absolute left-0 right-0 top-2 z-[100] px-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl p-2 w-full max-w-[95vw] text-[11px] overflow-auto"
          >
            <div className="text-xs text-purple-200 mb-2 font-semibold">Project Categories</div>
            <div className="space-y-2">
              {[
                { name: 'Startup Tech Development', color: 'from-red-400 to-red-600', key: 'Startup Tech Development' },
                { name: 'Android/iOS Application', color: 'from-green-400 to-green-600', key: 'Android/iOS Application' },
                { name: 'Data Engineering Solutions', color: 'from-yellow-400 to-yellow-600', key: 'Data Engineering Solutions' },
                { name: 'IoT Project', color: 'from-cyan-400 to-cyan-600', key: 'IoT Project' },
                { name: 'AI/ML/DL/Gen AI Projects', color: 'from-indigo-400 to-indigo-600', key: 'AI/ML/DL/Gen AI Projects' },
                { name: 'Web Applications', color: 'from-blue-400 to-blue-600', key: 'Web' },
                { name: 'UI/UX Design', color: 'from-purple-400 to-purple-600', key: 'UI/UX' },
                { name: 'API Development', color: 'from-emerald-400 to-emerald-600', key: 'APIs' },
                { name: 'Experiments', color: 'from-orange-400 to-orange-600', key: 'Experiments' },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-xs">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${c.color}`} />
                  <span className="text-white/80">{c.name}</span>
                  <span className="text-purple-300 ml-auto">({filteredProjects.filter((p) => (p.category || '') === c.key).length})</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl p-2 w-full max-w-[95vw] text-[11px] overflow-auto"
          >
            <div className="text-xs text-purple-200 mb-1 font-semibold">Navigation</div>
            <div className="text-xs text-white/70 space-y-1">
              <div>🪐 Hover planets to explore</div>
              <div>🚀 Click to launch project</div>
              <div>✨ Watch the cosmic dance</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/10 bg-black/40 backdrop-blur-md rounded-xl px-2 py-1 w-full max-w-[95vw] text-[11px] overflow-auto"
          >
            <div className="text-center">
              <div className="text-lg font-bold text-white">{filteredProjects.length}</div>
              <div className="text-xs text-purple-200">Active Projects</div>
            </div>
          </motion.div>
        </div>
      )}
      {/* Background pulse */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      </div>

      {/* Starfield (behind everything) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* CenterAnchor: the single origin for sun + rings + planets */}
      <div className="absolute inset-0 z-10">
        <div
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 0,
            height: 0,
          }}
        >
          {/* Sun (never intercept pointer events) */}
          <div className="relative pointer-events-none z-10">
            {/* Corona */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '50%',
                width: 148,
                height: 148,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(249,115,22,0.10) 55%, transparent 72%)',
              }}
              animate={{ scale: [1, 1.23, 1], rotate: 360 }}
              transition={{
                scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              }}
            />
            {/* Outer glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '50%',
                width: 110,
                height: 110,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(251,191,36,0.40) 0%, rgba(249,115,22,0.20) 62%, transparent 82%)',
                filter: 'blur(10px)',
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Core */}
            <motion.div
              className="absolute rounded-full overflow-hidden bg-gradient-to-br from-yellow-200 via-orange-400 to-red-500"
              style={{
                left: '50%',
                top: '50%',
                width: 88,
                height: 88,
                transform: 'translate(-50%, -50%)',
                boxShadow:
                  '0 0 60px rgba(251,191,36,0.8), 0 0 120px rgba(251,191,36,0.35), inset 0 0 20px rgba(255,255,255,0.2)',
              }}
              animate={{ scale: [1, 1.04, 1], rotate: 360 }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              }}
            >
              <div className="absolute inset-0 rounded-full">
                <div className="absolute top-2 left-3 w-3 h-3 bg-white/40 rounded-full blur-sm" />
                <div className="absolute bottom-3 right-2 w-2 h-2 bg-yellow-200/60 rounded-full blur-sm" />
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-200/30 rounded-full blur-md" />
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/50 rounded-full" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-l from-transparent via-yellow-200/20 to-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Rays */}
            {Array.from({ length: 8 }).filter((_, i) => i !== 4).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent"
                style={{
                  left: '50%',
                  top: '50%',
                  width: 2,
                  height: 48,
                  transformOrigin: 'center bottom',
                  transform: `translate(-50%, -50%) rotate(${i >= 4 ? (i + 1) * 45 : i * 45}deg) translateY(-24px)`,
                }}
                animate={{ scaleY: [0.3, 0.82, 0.3], opacity: [0.18, 0.5, 0.18] }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Ring outlines (under planets), no pointer events */}
          <div className="relative z-0 pointer-events-none">
            {Array.from({ length: ringsCount }).map((_, ringIndex) => {
              const radius = INNER_RADIUS + ringIndex * RING_GAP;
              const hovered = hoveredRingIndex === ringIndex;
              const color =
                hovered && hoveredProject
                  ? CATEGORY_CONFIG[getCatKey(hoveredProject.category)].ring
                  : 'rgba(255,255,255,0.08)';
              return (
                <motion.div
                  key={`ring-${ringIndex}`}
                  className="absolute rounded-full border"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: radius * 2,
                    height: radius * 2,
                    transform: 'translate(-50%, -50%)',
                    borderColor: color,
                  }}
                  animate={{ opacity: hovered ? 0.35 : 0.12 }}
                  transition={{ duration: 0.2 }}
                />
              );
            })}
          </div>

          {/* Rotating rings + planets (above outlines) */}
          <div className="relative z-20">
            {positioned.map(({ project, ringIndex, angleDeg, rotationDuration }, idx) => {
              const radius = INNER_RADIUS + ringIndex * RING_GAP;
              const cat = CATEGORY_CONFIG[getCatKey(project.category)];
              const planetKey = (project.id ?? `${project.title ?? 'proj'}-${idx}`) as string;

              // Animate each planet's position individually
              return (
                <div
                  key={`orbit-layer-${planetKey}`}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: radius * 2,
                    height: radius * 2,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Animate the angle of each planet individually */}
                  <motion.div
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: PLANET_SIZE,
                      height: PLANET_SIZE,
                      zIndex: 30,
                    }}
                    animate={{
                      rotate: reducedMotion ? 0 : 360,
                    }}
                    transition={{
                      duration: reducedMotion ? 0 : rotationDuration,
                      repeat: reducedMotion ? 0 : Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateY(-${radius}px)`,
                        width: PLANET_SIZE,
                        height: PLANET_SIZE,
                        zIndex: 30,
                      }}
                    >
                      {/* Click/hover target */}
                      <motion.button
                        type="button"
                        className="relative block w-full h-full cursor-pointer rounded-full focus:outline-none z-[100]"
                        style={{ zIndex: 100 }}
                        onClick={() => onProjectClick(project)}
                        onMouseEnter={() => setHoveredProject(project)}
                        onMouseLeave={() => setHoveredProject(null)}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {/* Glow (no events) */}
                        <motion.div
                          className="pointer-events-none absolute inset-0 rounded-full blur-md"
                          style={{
                            background: `radial-gradient(circle, ${cat.glow} 0%, transparent 70%)`,
                            zIndex: 0,
                          }}
                          animate={{
                            scale: hoveredProject?.id === project.id ? [1, 1.25, 1] : [0.9, 1.05, 0.9],
                            opacity: hoveredProject?.id === project.id ? [0.7, 1, 0.7] : [0.4, 0.6, 0.4],
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        {/* Body */}
                        <motion.div
                          className={`absolute inset-2 rounded-full bg-gradient-to-br ${cat.bg} border-2 border-white/30 overflow-hidden`}
                          style={{ boxShadow: `0 0 18px ${cat.glow}`, zIndex: 1 }}
                          animate={{
                            boxShadow:
                              hoveredProject?.id === project.id
                                ? `0 0 28px ${cat.glow}`
                                : `0 0 14px ${cat.glow}`,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0">
                            <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full" />
                            <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-white/20 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/15 rounded-full" />
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8 + ringIndex, repeat: Infinity, ease: 'linear' }}
                          />
                          {idx % 2 === 1 && (
                            <motion.div
                              className="absolute inset-0 border-2 border-white/25 rounded-full pointer-events-none"
                              style={{ transform: 'scale(1.35)' }}
                              animate={{ rotate: -360, opacity: [0.3, 0.6, 0.3] }}
                              transition={{
                                rotate: { duration: rotationDuration * 0.7, repeat: Infinity, ease: 'linear' },
                                opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                              }}
                            />
                          )}
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      {/* Desktop content boxes: keep inside orbit area */}
      {!isMobile && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 z-[100]"
          >
            <div className="text-xs text-purple-200 mb-3 font-semibold">Project Categories</div>
            <div className="space-y-2">
              {[
                { name: 'Startup Tech Development', color: 'from-red-400 to-red-600', key: 'Startup Tech Development' },
                { name: 'Android/iOS Application', color: 'from-green-400 to-green-600', key: 'Android/iOS Application' },
                { name: 'Data Engineering Solutions', color: 'from-yellow-400 to-yellow-600', key: 'Data Engineering Solutions' },
                { name: 'IoT Project', color: 'from-cyan-400 to-cyan-600', key: 'IoT Project' },
                { name: 'AI/ML/DL/Gen AI Projects', color: 'from-indigo-400 to-indigo-600', key: 'AI/ML/DL/Gen AI Projects' },
                { name: 'Web Applications', color: 'from-blue-400 to-blue-600', key: 'Web' },
                { name: 'UI/UX Design', color: 'from-purple-400 to-purple-600', key: 'UI/UX' },
                { name: 'API Development', color: 'from-emerald-400 to-emerald-600', key: 'APIs' },
                { name: 'Experiments', color: 'from-orange-400 to-orange-600', key: 'Experiments' },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-3 text-xs">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${c.color}`} />
                  <span className="text-white/80">{c.name}</span>
                  <span className="text-purple-300 ml-auto">({filteredProjects.filter((p) => (p.category || '') === c.key).length})</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-6 right-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 z-[100]"
          >
            <div className="text-xs text-purple-200 mb-2 font-semibold">Navigation</div>
            <div className="text-xs text-white/70 space-y-1">
              <div>🪐 Hover planets to explore</div>
              <div>🚀 Click to launch project</div>
              <div>✨ Watch the cosmic dance</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 z-[100]"
          >
            <div className="text-center">
              <div className="text-lg font-bold text-white">{filteredProjects.length}</div>
              <div className="text-xs text-purple-200">Active Projects</div>
            </div>
          </motion.div>
        </>
      )}

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`absolute border border-white/10 bg-black/40 backdrop-blur-md rounded-xl ${isMobile ? 'top-2 right-1/2 translate-x-1/2 p-2 max-w-[90vw] w-[95vw] text-[11px]' : 'top-6 right-6 p-4'} overflow-auto`}
      >
        <div className="text-xs text-purple-200 mb-2 font-semibold">Navigation</div>
        <div className="text-xs text-white/70 space-y-1">
          <div>🪐 Hover planets to explore</div>
          <div>🚀 Click to launch project</div>
          <div>✨ Watch the cosmic dance</div>
        </div>
      </motion.div>

      {/* Project Count */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute border border-white/10 bg-black/40 backdrop-blur-md rounded-xl ${isMobile ? 'top-2 left-1/2 -translate-x-1/2 px-2 py-1 text-[11px]' : 'top-6 left-1/2 -translate-x-1/2 px-4 py-2'} overflow-auto`}
      >
        <div className="text-center">
          <div className="text-lg font-bold text-white">{filteredProjects.length}</div>
          <div className="text-xs text-purple-200">Active Projects</div>
        </div>
      </motion.div>

      {/* Hover card */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.15 }}
            className={`absolute pointer-events-none z-[60] ${isMobile ? 'top-14 left-1/2 -translate-x-1/2 px-3 py-2 text-xs max-w-[95vw] w-[90vw]' : 'top-20 left-1/2 -translate-x-1/2 px-6 py-4 max-w-[350px] min-w-[300px]'}`}
          >
            <div className="bg-black/95 backdrop-blur-md text-white text-sm rounded-xl shadow-2xl border border-white/20 text-center">
              <div className="font-bold text-base mb-1">{hoveredProject.title}</div>
              <div className="text-gray-300 text-xs mb-3 leading-relaxed">
                {hoveredProject.tagline}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    hoveredProject.category === 'Web'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : hoveredProject.category === 'UI/UX'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : hoveredProject.category === 'APIs'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  }`}
                >
                  {hoveredProject.category}
                </span>
                <span className="text-xs text-gray-400">{hoveredProject.year}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-2">
                {Object.entries(hoveredProject.metrics || {})
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <span key={key} className="bg-white/10 px-2 py-1 rounded text-xs font-mono">
                      {String(value)}
                    </span>
                  ))}
              </div>

              <div className="text-xs text-gray-400 mb-2">
                {(hoveredProject.stack || []).slice(0, 3).join(' • ')}
                {(hoveredProject.stack || []).length > 3 &&
                  ` • +${(hoveredProject.stack || []).length - 3} more`}
              </div>

              <div className="text-xs text-blue-300 opacity-75">Click to explore →</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return accessibleMode ? AccessibleGrid : loading || !isLoaded ? LoadingView : OrbitsView;
}

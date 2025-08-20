'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Rocket, 
  Globe, 
  Palette, 
  Zap, 
  Search,
  Calendar,
  User,
  Mail,
  Building,
  MessageSquare
} from 'lucide-react';

const contactSchema = z.object({
  type: z.enum(['Landing Page', 'Web App', 'Redesign', 'UI Audit', 'Performance Optimization', 'Custom']),
  goals: z.string().min(10, 'Please describe your goals (minimum 10 characters)'),
  scope: z.array(z.string()).min(1, 'Please select at least one feature'),
  budget: z.object({
    min: z.number().min(500),
    max: z.number().min(500)
  }),
  timeline: z.string().min(1, 'Please select a timeline'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  role: z.string().optional(),
  message: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  {
    id: 'Landing Page',
    title: 'Landing Page',
    description: 'High-converting landing page with analytics',
    icon: <Globe className="w-6 h-6" />,
    timeline: '5-7 days',
    features: ['Responsive Design', 'SEO Optimization', 'Analytics Setup', 'Contact Forms']
  },
  {
    id: 'Web App',
    title: 'Web App',
    description: 'Full-featured web application',
    icon: <Rocket className="w-6 h-6" />,
    timeline: '3-8 weeks',
    features: ['User Authentication', 'Database Integration', 'API Development', 'Admin Dashboard']
  },
  {
    id: 'Redesign',
    title: 'Redesign',
    description: 'Modern redesign of existing site',
    icon: <Palette className="w-6 h-6" />,
    timeline: '2-4 weeks',
    features: ['UI/UX Audit', 'Modern Design', 'Performance Optimization', 'Mobile Responsive']
  },
  {
    id: 'UI Audit',
    title: 'UI Audit',
    description: 'Comprehensive UX/UI analysis',
    icon: <Search className="w-6 h-6" />,
    timeline: '3-5 days',
    features: ['Usability Analysis', 'Accessibility Review', 'Performance Audit', 'Recommendations']
  },
  {
    id: 'Performance Optimization',
    title: 'Performance Optimization',
    description: 'Speed and performance improvements',
    icon: <Zap className="w-6 h-6" />,
    timeline: '1-2 weeks',
    features: ['Core Web Vitals', 'Bundle Optimization', 'Image Optimization', 'Caching Strategy']
  },
  {
    id: 'Custom',
    title: 'Custom Project',
    description: 'Something unique? Let\'s discuss',
    icon: <MessageSquare className="w-6 h-6" />,
    timeline: 'Variable',
    features: ['Custom Requirements', 'Flexible Scope', 'Tailored Solution', 'Ongoing Support']
  }
];

const scopeOptions = [
  'User Authentication',
  'Payment Integration',
  'Admin Dashboard',
  'Content Management',
  'Real-time Features',
  'API Development',
  'Third-party Integrations',
  'Mobile App',
  'SEO Optimization',
  'Analytics & Tracking',
  'Email Marketing',
  'Social Media Integration'
];

const budgetRanges = [
  { min: 500, max: 2000, label: '$500 - $2K' },
  { min: 2000, max: 5000, label: '$2K - $5K' },
  { min: 5000, max: 10000, label: '$5K - $10K' },
  { min: 10000, max: 25000, label: '$10K - $25K' },
  { min: 25000, max: 50000, label: '$25K+' }
];

const timelineOptions = [
  'ASAP (Rush job)',
  '1-2 weeks',
  '1 month',
  '2-3 months',
  '3+ months',
  'Flexible'
];

export function HiringDockForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      scope: [],
      budget: { min: 2000, max: 5000 }
    }
  });

  const watchedValues = watch();
  const totalSteps = 7;

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof ContactFormData)[] => {
    switch (step) {
      case 1: return ['type'];
      case 2: return ['goals'];
      case 3: return ['scope'];
      case 4: return ['budget'];
      case 5: return ['timeline'];
      case 6: return ['name', 'email'];
      default: return [];
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleScope = (option: string) => {
    const currentScope = watchedValues.scope || [];
    const newScope = currentScope.includes(option)
      ? currentScope.filter(item => item !== option)
      : [...currentScope, option];
    setValue('scope', newScope);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h2 className="font-display text-2xl font-bold mb-4">Flight Plan Received! 🚀</h2>
        <p className="text-muted-foreground mb-6">
          Expect a response within 12 hours. Meanwhile, pick a slot for our mission briefing.
        </p>
        <button className="btn-primary">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Briefing
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Mission Brief Progress</span>
          <span className="text-sm text-muted-foreground">{currentStep} of {totalSteps}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="bg-accent h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">What type of mission are we launching?</h2>
                <p className="text-muted-foreground">Select the project type that best fits your needs.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <motion.label
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                      watchedValues.type === type.id
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <input
                      type="radio"
                      value={type.id}
                      {...register('type')}
                      className="sr-only"
                    />
                    <div className="flex items-start space-x-3">
                      <div className="text-accent mt-1">{type.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{type.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                        <div className="text-xs text-accent font-medium">{type.timeline}</div>
                      </div>
                    </div>
                  </motion.label>
                ))}
              </div>

              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </motion.div>
          )}

          {/* Step 2: Goals */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">What are your mission objectives?</h2>
                <p className="text-muted-foreground">Describe what you want to achieve with this project.</p>
              </div>

              <div>
                <textarea
                  {...register('goals')}
                  placeholder="e.g., Increase conversions by 30%, improve user experience, modernize our brand presence..."
                  className="w-full h-32 p-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                {errors.goals && (
                  <p className="text-red-500 text-sm mt-2">{errors.goals.message}</p>
                )}
              </div>

              {/* Quick presets */}
              <div>
                <p className="text-sm font-medium mb-3">Quick presets:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Increase conversions',
                    'Improve user experience',
                    'Modernize design',
                    'Boost performance',
                    'Mobile optimization',
                    'SEO improvement'
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        const current = watchedValues.goals || '';
                        const newValue = current ? `${current}, ${preset.toLowerCase()}` : preset.toLowerCase();
                        setValue('goals', newValue);
                      }}
                      className="px-3 py-1 text-sm bg-muted hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                    >
                      + {preset}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Scope */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">What features do you need?</h2>
                <p className="text-muted-foreground">Select all features that apply to your project.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {scopeOptions.map((option) => (
                  <motion.button
                    key={option}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleScope(option)}
                    className={`p-3 text-sm rounded-lg border-2 transition-all text-left ${
                      watchedValues.scope?.includes(option)
                        ? 'border-accent bg-accent/5 text-accent'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {errors.scope && (
                <p className="text-red-500 text-sm">{errors.scope.message}</p>
              )}
            </motion.div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">What's your mission budget?</h2>
                <p className="text-muted-foreground">Select a budget range that works for your project.</p>
              </div>

              <div className="space-y-3">
                {budgetRanges.map((range) => (
                  <motion.label
                    key={range.label}
                    whileHover={{ scale: 1.01 }}
                    className={`cursor-pointer flex items-center p-4 rounded-lg border-2 transition-all ${
                      watchedValues.budget?.min === range.min && watchedValues.budget?.max === range.max
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="budget"
                      onChange={() => setValue('budget', { min: range.min, max: range.max })}
                      className="sr-only"
                    />
                    <div className="font-semibold">{range.label}</div>
                  </motion.label>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 5: Timeline */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">When do you need launch?</h2>
                <p className="text-muted-foreground">Select your ideal timeline for project completion.</p>
              </div>

              <div className="space-y-3">
                {timelineOptions.map((option) => (
                  <motion.label
                    key={option}
                    whileHover={{ scale: 1.01 }}
                    className={`cursor-pointer flex items-center p-4 rounded-lg border-2 transition-all ${
                      watchedValues.timeline === option
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <input
                      type="radio"
                      value={option}
                      {...register('timeline')}
                      className="sr-only"
                    />
                    <div className="font-semibold">{option}</div>
                  </motion.label>
                ))}
              </div>

              {errors.timeline && (
                <p className="text-red-500 text-sm">{errors.timeline.message}</p>
              )}
            </motion.div>
          )}

          {/* Step 6: Contact Details */}
          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">Mission Control Details</h2>
                <p className="text-muted-foreground">How should I contact you about this project?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full p-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full p-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full p-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <input
                    type="text"
                    {...register('role')}
                    className="w-full p-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Additional Message
                </label>
                <textarea
                  {...register('message')}
                  className="w-full h-24 p-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Anything else you'd like to share about your project?"
                />
              </div>
            </motion.div>
          )}

          {/* Step 7: Summary */}
          {currentStep === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">Flight Plan Summary</h2>
                <p className="text-muted-foreground">Review your mission details before launch.</p>
              </div>

              <div className="bg-card p-6 rounded-lg border space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Project Type</h3>
                  <p className="text-muted-foreground">{watchedValues.type}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Goals</h3>
                  <p className="text-muted-foreground">{watchedValues.goals}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Features ({watchedValues.scope?.length || 0})</h3>
                  <div className="flex flex-wrap gap-2">
                    {watchedValues.scope?.map((item) => (
                      <span key={item} className="px-2 py-1 bg-accent/10 text-accent rounded text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Budget</h3>
                    <p className="text-muted-foreground">
                      ${watchedValues.budget?.min?.toLocaleString()} - ${watchedValues.budget?.max?.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Timeline</h3>
                    <p className="text-muted-foreground">{watchedValues.timeline}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    {watchedValues.name} ({watchedValues.email})
                    {watchedValues.company && ` at ${watchedValues.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-border">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                  />
                  Launching...
                </>
              ) : (
                <>
                  <Rocket className="w-4 h-4 mr-2" />
                  Launch Mission
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
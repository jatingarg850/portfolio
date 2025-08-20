import 'dotenv/config';
import connectDB from './mongodb';
import Project from './models/Project';
import User from './models/User';
import bcrypt from 'bcryptjs';

const seedData = async () => {
  try {

  const conn = await connectDB();
  console.log('MongoDB URI:', process.env.MONGODB_URI);
  console.log('Connected to DB:', conn?.connection?.name || conn?.connections?.[0]?.name);

    // Clear existing data

  const deletedProjects = await Project.deleteMany({});
  const deletedUsers = await User.deleteMany({});
  console.log(`Deleted ${deletedProjects.deletedCount} projects, ${deletedUsers.deletedCount} users.`);

    // Create admin user profile with hashed password
    const hashedPassword = await bcrypt.hash('Jatingarg850@', 12);

    const user = new User({
      name: 'Jatin Garg',
      email: 'jatingarg850@gmail.com',
      password: hashedPassword,
      title: 'Full-Stack Developer & UI/UX Designer',
      bio: 'Passionate full-stack developer with 6+ years of experience building scalable web applications and beautiful user interfaces. I specialize in React, Next.js, and modern web technologies.',
      avatar: '/avatars/jatin.jpg',
      location: 'India',
      timezone: 'IST (UTC+5:30)',
      skills: [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB',
        'PostgreSQL', 'AWS', 'Docker', 'Figma', 'Tailwind CSS'
      ],
      experience: 6,
      role: 'admin',
      permissions: ['projects:read', 'projects:write', 'contacts:read', 'contacts:write', 'calls:read', 'calls:write'],
      availability: {
        status: 'available',
        responseTime: '<12h'
      },
      social: {
        github: 'https://github.com/jatingarg',
        linkedin: 'https://linkedin.com/in/jatingarg',
        twitter: 'https://twitter.com/jatingarg',
        website: 'https://skillverse.dev'
      },
      stats: {
        projectsCompleted: 50,
        clientSatisfaction: 100,
        avgPerformanceScore: 95,
        responseTime: '<12h'
      }
    });


  const savedUser = await user.save();
  console.log('Inserted user:', savedUser.email);

    // Create projects
    const projects = [
      {
        title: 'EcoCommerce Platform',
        slug: 'ecommerce-platform',
        tagline: 'Sustainable shopping with 40% faster checkout',
        category: 'Web',
        year: 2024,
        metrics: {
          lcp: '1.2s',
          conversion: '+40%',
          a11y: 98,
          performance: 95
        },
        stack: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Vercel'],
        gallery: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg'],
        links: {
          live: 'https://ecocommerce-demo.vercel.app',
          repo: 'https://github.com/username/ecommerce'
        },
        caseStudy: {
          overview: 'A sustainable e-commerce platform focused on eco-friendly products with optimized checkout flow.',
          problem: 'High cart abandonment rates and slow loading times were hurting conversions.',
          process: [
            'User research and checkout flow analysis',
            'Performance audit and optimization',
            'A/B testing new checkout design',
            'Implementation with real-time monitoring'
          ],
          outcome: 'Reduced checkout time by 60% and increased conversions by 40%.',
          timeline: [
            {
              date: '2024-01-15',
              title: 'Project Kickoff',
              description: 'Initial requirements gathering and user research',
              type: 'milestone'
            },
            {
              date: '2024-02-01',
              title: 'Design System',
              description: 'Created comprehensive design system and prototypes',
              type: 'decision'
            },
            {
              date: '2024-03-15',
              title: 'Beta Launch',
              description: 'Soft launch with select users for testing',
              type: 'launch'
            }
          ]
        },
        position: { x: 200, y: 150, orbit: 1 },
        featured: true,
        status: 'active'
      },
      
    ];


  const insertedProjects = await Project.insertMany(projects);
  console.log(`Inserted ${insertedProjects.length} projects.`);

    console.log('✅ Database seeded successfully!');
    console.log(`Created ${projects.length} projects and 1 user profile`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};

export default seedData;
import seedData from '../lib/seed';

seedData().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
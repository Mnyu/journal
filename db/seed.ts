import { db } from './client';
import { NewUser, users } from './schema/users';

const newUsers: NewUser[] = [
  { username: 'vineet', name: 'Vineet Sharma' },
  { username: 'abhimanyu', name: 'Abhimanyu Gupta' },
];

const seed = async () => {
  console.log('🌱 Seeding database...');

  await db.insert(users).values(newUsers).onConflictDoNothing();

  console.log('✅ Seed completed');
};

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Seed failed');
    console.error(error);
    process.exit(1);
  });

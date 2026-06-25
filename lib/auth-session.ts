import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

export const requireSession = async () => {
  const session = await getSession();
  if (!session?.user?.id) {
    unauthorized();
  }
  return session;
};

export const getSession = async () => {
  return auth.api.getSession({
    headers: await headers(),
  });
};

'use client';
import { authClient } from '@/lib/auth-client';
import { Button } from './ui/button';
import { redirect } from 'next/navigation';

const Logout = () => {
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/signin');
        },
      },
    });
  };
  return (
    <Button onClick={handleLogout} className='font-semibold'>
      Logout
    </Button>
  );
};
export default Logout;

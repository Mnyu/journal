import AppSidebar from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { getSession } from '@/lib/auth-session';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (!session?.user?.id) {
    redirect('/signin');
  }
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar user={session.user} />
      <main className='w-full h-full flex flex-col p-3'>{children}</main>
    </SidebarProvider>
  );
}

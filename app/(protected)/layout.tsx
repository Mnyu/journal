import AppSidebar from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { requireSession } from '@/lib/auth-session';

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await requireSession();
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar user={session.user} />
      <main className='w-full h-full flex flex-col p-3'>{children}</main>
    </SidebarProvider>
  );
}

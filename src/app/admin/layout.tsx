
'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2, LayoutDashboard, Book, Users, MessageSquareQuote, HelpCircle, LogOut, GraduationCap, SwatchBook, GitMerge, PanelLeft, Menu, Puzzle, Notebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/learning-paths', label: 'Learning Paths', icon: GitMerge },
  { href: '/admin/programs', label: 'Programs', icon: Book },
  { href: '/admin/courses', label: 'Courses', icon: SwatchBook },
  { href: '/admin/instructors', label: 'Instructors', icon: Users },
  { href: '/admin/students', label: 'Students', icon: GraduationCap },
  { href: '/admin/notebooks', label: 'Notebooks', icon: Notebook },
  { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { href: '/admin/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/integrations', label: 'Integrations', icon: Puzzle },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const NavContent = () => (
    <>
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => (
           <Button
            key={item.href}
            variant="ghost"
            className="justify-start gap-2"
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
         <div className="flex h-14 items-center border-b px-6">
          <Logo />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <NavContent />
        </div>
      </aside>
      <div className="flex flex-col sm:pl-60">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:justify-end sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs flex flex-col">
              <div className="flex h-14 items-center border-b px-6">
                <Logo />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
           <p className="text-sm text-muted-foreground">Welcome, Admin</p>
        </header>
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

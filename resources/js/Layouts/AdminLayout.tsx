import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function Authenticated({ children }: AdminLayoutProps) {
    const user = usePage().props.auth.user;

    return (
        <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
        // <main className="min-h-screen bg-gray-100">
        //     {children}
        // </main>
    );
}

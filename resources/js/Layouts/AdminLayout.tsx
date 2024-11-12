import { AppSidebar } from '@/Components/admin/Sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/Components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import { Separator } from '@radix-ui/react-separator';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import { ReactNode } from 'react';
import Header from '@/Components/admin/Header';
import Footer from '@/Components/admin/Footer';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function Authenticated({ children }: AdminLayoutProps) {
    const user = usePage().props.auth.user;

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SidebarTrigger className="-ml-1 absolute" />
                <main className="min-h-screen flex flex-col">
                    <Header />
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <Footer />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

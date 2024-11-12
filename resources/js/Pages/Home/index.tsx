import AdminLayout from '@/Layouts/AdminLayout';
import React from 'react'

import { Separator } from '@radix-ui/react-separator';
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import BarBreadCrumb from '@/Components/admin/BreadCrumb';
import { Gauge } from 'lucide-react';

const Home = () => {
    return (
        <AdminLayout>
            <div className='flex items-center justify-between px-6 py-4'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                    <Gauge size={26} />
                    <span className='text-xl font-semibold'>Dashboard</span>
                </div>
                <BarBreadCrumb>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                            Building Your Application
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                </BarBreadCrumb>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
        </AdminLayout>
    )
}

export default Home;

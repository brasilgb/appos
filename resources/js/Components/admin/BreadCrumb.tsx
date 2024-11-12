import { ReactNode } from 'react'
import { Breadcrumb, BreadcrumbList } from '../ui/breadcrumb'
import { Gauge } from 'lucide-react';

type BreadCrumbProps = {
    children: ReactNode
}

const BarBreadCrumb = ({ children }: BreadCrumbProps) => {
    return (
            <Breadcrumb>
                <BreadcrumbList>
                    {children}
                </BreadcrumbList>
            </Breadcrumb>
    )
}

export default BarBreadCrumb

'use client'

import HomeActionIcon from '@/app/components/navigation/homeActionIcon';
import CTAButton from './ctaButton';

export interface NavigationItem {
    name: string
    href: string
    description?: string
    target?: string
    children?: NavigationItem[]
}


export default function Navigation() {
    return (
        <>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 gap-x-6" aria-label="Global">
                <div className="flex">
                    <HomeActionIcon />
                </div>
                <div className="flex flex-1 sm:flex-none justify-end">
                    <CTAButton />
                </div>
            </nav>
        </>
    )
}

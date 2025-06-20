'use client'

import { useState } from 'react'
import BarsIcon from '@/icons/BarsIcon'
import Link from 'next/link'
import ContextMenu from './contextMenu'
import HomeActionIcon from './homeActionIcon'
import CTAButton from './ctaButton'
import MobileDrawerMenu from './mobileDrawerMenu'

export interface NavigationItem {
    name: string
    href: string
    description?: string
    target?: string
    children?: NavigationItem[]
    label?: boolean
}

const navigation: NavigationItem[] = [
    {
        name: 'Services', href: '#', children: [
            {
                name: "Building Applications",
                href: "",
                label: true,
            },
            {
                name: "AI Applications",
                href: "/building-ai-app",
                description: 'We build AI Native applications that enables you to do lot more!'
            },
            {
                name: "Courses",
                href: "",
                label: true,
            },
            {
                name: "Go Basic",
                href: "/learn/en/gobasic",
                description: 'Learn to develop applications and web services in Golang in a practical way'
            },
            {
                name: "Go Advanced",
                href: "/learn/en/goadvanced",
                description: 'Become a master of Generics and Concurrency in the Go programming language'
            },
            // {
            //     name: "Go Basic HUN",
            //     href: "/learn/hu/gobasic",
            //     description: 'Tanulj gyakorlatias úton alkalmazásokat és webszervízeket fejleszteni Golangben'
            // },
            // {
            //     name: "Go Advanced HUN",
            //     href: "/learn/hu/goadvanced",
            //     description: 'Legyél a Generics és a Concurrency mestere a Go programozási nyelvben'
            // },
        ]
    },
    // {
    //     name: 'Explore & Code', href: '#', children: [
    //         {
    //             name: "WIKI",
    //             href: "https://wiki.followthepattern.net/",
    //             description: 'Enhance your skills with Golang practices',
    //             target: "_blank"
    //         },
    //         {
    //             name: "Go Playground",
    //             href: "https://goplay.followthepattern.net/",
    //             description: 'Run and Share your Go code in the browser with built-in IntelliSense',
    //             target: "_blank"
    //         },
    //     ]
    // },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Blog', href: '/blog' },
]

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    let navbarItemClassName = "text-gray-900 hover:text-blue-500 pb-1 border-b border-b-white/0 hover:border-b-blue-500 font-semibold leading-6"

    return (
        <>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 gap-x-6" aria-label="Global">
                <div className="flex">
                    <HomeActionIcon />
                </div>
                <div className="hidden sm:flex gap-x-12">
                    {navigation.map((item) => {
                        if (item.children) {
                            return (
                                <ContextMenu className={navbarItemClassName} name={item.name} items={item.children} key={item.name} />
                            )
                        }
                        return (
                            <Link key={item.name} href={item.href} className={navbarItemClassName}>
                                {item.name}
                            </Link>
                        )
                    }
                    )}
                </div>
                <div className="flex flex-1 sm:flex-none justify-end">
                    <CTAButton className="hidden sm:block" />
                </div>

                <div className="flex sm:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <BarsIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            <MobileDrawerMenu className="lg:hidden" setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} navigation={navigation} />
        </>
    )
}

import type { Metadata } from "next";
import Link from "next/link";
import classNames from "classnames";
import PatternBackground from "../components/patternBackground";
import Credits from "../(public)/components/credits";
import FPIcon from "@/icons/FPIcon";
import RightArrowIcon from "@/icons/RightArrowIcon";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import MiniChat from "./components/MiniChat";

export const metadata: Metadata = {
    title: "Follow The Pattern — Links",
    description: "All of Follow The Pattern in one place — apps, podcast, courses and how to get in touch.",
};

interface LinkLeaf {
    label: string;
    description?: string;
    href: string;
    target?: string;
}

interface LinkItem extends Partial<LinkLeaf> {
    label: string;
    children?: LinkLeaf[];
}

const links: LinkItem[] = [
    {
        label: "Apps",
        description: "Products we build and ship",
        children: [
            { label: "Atlasz", description: "AI-powered Transport Management System that brings your fleet, routes, and freight into one intelligent workspace.", href: "https://www.atlasz.eu", target: "_blank" },
            { label: "STRV.AI", description: "AI-powered nutrition & training coach", href: "https://strv.ai", target: "_blank" },
        ],
    },
    { label: "Podcast", description: "Conversations on modern software", href: "/podcast" },
    {
        label: "Courses",
        description: "Learn to build with us",
        children: [
            { label: "Go Basic", description: "Start writing Go from the ground up", href: "/learn/en/gobasic" },
            { label: "Go Advanced", description: "Level up your Go skills", href: "/learn/en/goadvanced" },
        ],
    },
    { label: "Email Us", description: "csaba@followthepattern.net", href: "mailto:csaba@followthepattern.net" },
];

const itemClassName =
    "group flex items-center justify-between w-full rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-md transition ease-in-out duration-150 hover:bg-gray-50 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

function ItemLabel({ label, description }: { label: string; description?: string }) {
    return (
        <span className="flex flex-col text-left">
            <span className="text-lg font-medium text-gray-900">{label}</span>
            {description && <span className="text-sm font-light text-gray-500">{description}</span>}
        </span>
    );
}

function LeafLink({ item, nested }: { item: LinkLeaf; nested?: boolean }) {
    const content = (
        <>
            <ItemLabel label={item.label} description={item.description} />
            <RightArrowIcon className="ml-4 h-5 w-5 flex-none text-gray-400 transition-transform ease-in-out duration-150 group-hover:translate-x-1 group-hover:text-blue-600" />
        </>
    );

    const className = classNames(itemClassName, nested && "bg-gray-50/80");

    if (item.href.startsWith("mailto:") || item.target) {
        return (
            <a href={item.href} target={item.target} rel={item.target === "_blank" ? "noreferrer" : undefined} className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link href={item.href} className={className}>
            {content}
        </Link>
    );
}

function DropdownItem({ item }: { item: LinkItem }) {
    return (
        <details className="group w-full">
            <summary className={classNames(itemClassName, "cursor-pointer list-none [&::-webkit-details-marker]:hidden")}>
                <ItemLabel label={item.label} description={item.description} />
                <ChevronDownIcon className="ml-4 h-5 w-5 flex-none text-gray-400 transition-transform ease-in-out duration-150 group-open:rotate-180 group-hover:text-blue-600" />
            </summary>
            <div className="mt-3 flex flex-col space-y-3 pl-4">
                {item.children!.map((child) => (
                    <LeafLink key={child.href} item={child} nested />
                ))}
            </div>
        </details>
    );
}

export default function LinksPage() {
    return (
        <main className="min-h-screen">
            <PatternBackground className="flex min-h-screen flex-col items-center px-6 py-16 sm:py-24">
                <header className="flex flex-col items-center text-center">
                    <Link
                        href="/"
                        aria-label="Go to Follow The Pattern home"
                        className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-md transition ease-in-out duration-150 hover:scale-105 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                        <FPIcon className="h-12 w-12 text-blue-500" />
                    </Link>
                    <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Follow The Pattern
                    </h1>
                    <p className="mt-3 max-w-md text-lg font-light text-gray-600">
                        Building applications that enable companies to do more
                    </p>
                </header>
                <MiniChat className="mt-10 max-w-md" />
                <div className="mt-6 flex w-full max-w-md flex-col space-y-4">
                    {links.map((item) =>
                        item.children ? (
                            <DropdownItem key={item.label} item={item} />
                        ) : (
                            <LeafLink key={item.href} item={item as LinkLeaf} />
                        )
                    )}
                </div>
                <div className="w-full max-w-md">
                    <Credits />
                </div>
            </PatternBackground>
        </main>
    );
}

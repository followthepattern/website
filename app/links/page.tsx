import type { Metadata } from "next";
import Link from "next/link";
import classNames from "classnames";
import PatternBackground from "../components/patternBackground";
import Credits from "../(public)/components/credits";
import FPIcon from "@/icons/FPIcon";
import RightArrowIcon from "@/icons/RightArrowIcon";

export const metadata: Metadata = {
    title: "Follow The Pattern — Links",
    description: "All of Follow The Pattern in one place — services, blog, podcast, courses and how to get in touch.",
};

interface LinkItem {
    label: string;
    description?: string;
    href: string;
}

const links: LinkItem[] = [
    { label: "Services", description: "Build AI-powered apps with us", href: "/services" },
    { label: "Blog", description: "Lessons from building AI-powered apps", href: "/blog" },
    { label: "Podcast", description: "Conversations on modern software", href: "/podcast" },
    { label: "Go Basic Course", description: "Start writing Go from the ground up", href: "/learn/en/gobasic" },
    { label: "Go Advanced Course", description: "Level up your Go skills", href: "/learn/en/goadvanced" },
    { label: "Book a Call", description: "Schedule a meeting with us", href: "/book" },
    { label: "Contact", description: "Send us a message", href: "/contact" },
    { label: "Email Us", description: "csaba@followthepattern.net", href: "mailto:csaba@followthepattern.net" },
];

interface LinkButtonProperties {
    item: LinkItem;
}

function LinkButton({ item }: LinkButtonProperties) {
    const className = "group flex items-center justify-between w-full rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-md transition ease-in-out duration-150 hover:bg-gray-50 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

    const content = (
        <>
            <span className="flex flex-col text-left">
                <span className="text-lg font-medium text-gray-900">{item.label}</span>
                {item.description && (
                    <span className="text-sm font-light text-gray-500">{item.description}</span>
                )}
            </span>
            <RightArrowIcon className="ml-4 h-5 w-5 flex-none text-gray-400 transition-transform ease-in-out duration-150 group-hover:translate-x-1 group-hover:text-blue-600" />
        </>
    );

    if (item.href.startsWith("mailto:")) {
        return (
            <a href={item.href} className={className}>
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

export default function LinksPage() {
    return (
        <main className="min-h-screen">
            <PatternBackground className="flex min-h-screen flex-col items-center px-6 py-16 sm:py-24">
                <header className="flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-md">
                        <FPIcon className="h-12 w-12 text-blue-500" />
                    </div>
                    <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Follow The Pattern
                    </h1>
                    <p className="mt-3 max-w-md text-lg font-light text-gray-600">
                        Building applications that enable companies to do more
                    </p>
                </header>
                <div className="mt-12 flex w-full max-w-md flex-col space-y-4">
                    {links.map((item) => (
                        <LinkButton key={item.href} item={item} />
                    ))}
                </div>
                <div className="w-full max-w-md">
                    <Credits />
                </div>
            </PatternBackground>
        </main>
    );
}

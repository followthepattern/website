import { RectangleBackground } from "@/app/components/patternBackground";
import Section from "@/app/components/section";
import BookForm from "../book/bookForm";
import Footer from "@/app/components/footer";
import { articles } from "./articles";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="text-slate-900">
            <header className="mx-4 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <div className="space-y-8">
                    <h1 className="font-medium pt-10 text-6xl sm:text-6xl md:text-7xl">
                        Build With Purpose
                    </h1>
                    <p className="text-lg font-light">
                        Lessons, patterns, and ideas from building AI-powered apps.
                    </p>
                </div>
            </header>
            <div className="mx-auto max-w-7xl sm:px-6 pb-8 sm:pb-16 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <Section.Title>
                    Articles
                </Section.Title>
                <div className="mx-auto sm:max-w-md md:max-w-5xl divide-y sm:divide-y-0 grid grid-cols-1 sm:gap-y-8 md:gap-x-8 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(articles).map(([slug, article]) => {
                        return (
                            <Link
                                href={`/blog/${slug}`}
                                className="cursor-pointer"
                                key={slug}
                            >
                                <div className="flex rounded-xl sm:shadow-sm sm:bg-slate-50 hover:bg-slate-100 flex-col p-5">
                                    <div className="text-slate-500/70 text-sm pt-2">
                                        {article.publishDate}
                                    </div>
                                    <div className="text-xl mt-2 mb-4 font-medium line-clamp-2">
                                        {article.title}
                                    </div>
                                    <div className="font-light text-lg line-clamp-3">
                                        {article.description}
                                    </div>
                                    <div className="mt-5 text-sm">
                                        Read More
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <BookForm />
            <Section>
                <Footer />
            </Section>
        </div>
    )
}
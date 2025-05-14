import { RectangleBackground } from "@/app/components/patternBackground";
import Section from "@/app/components/section";
import BookForm from "../book/bookForm";
import Footer from "@/app/components/footer";

export default function Blog() {
    return <div className="mx-4">
        <header className="sm:mx-auto sm:max-w-3xl">
            <RectangleBackground className="lg:flex">
                <div className="space-y-8">
                    <h1 className="font-medium pt-10 text-6xl sm:text-6xl md:text-7xl md:mx-2">
                        Build With Purpose
                    </h1>
                    <p className="text-lg font-light">
                        Lessons, patterns, and ideas from building AI-powered apps.
                    </p>
                </div>
            </RectangleBackground>
        </header>
        <Section>
            <Section.Title>
                Articles
            </Section.Title>
        </Section>
        <BookForm />
        <Section>
            <Footer />
        </Section>
    </div>
}
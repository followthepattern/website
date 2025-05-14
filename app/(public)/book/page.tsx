import Section from "../../components/section";
import PatternBackground from "../../components/patternBackground";
import Footer from "../../components/footer";
import Link from "next/link";
import { FreeCallLink } from "@/lib/constants";

const Contact = () => {
    return (
        <>
            <header className="text-lg mx-auto max-w-7xl px-6 pb-8 sm:pb-16 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <PatternBackground hideRectangles={true}>
                    <h1 className="text-center pt-10 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-medium">Let's Connect!</h1>
                    <h2 className="mx-auto max-w-sm sm:max-w-none text-center pt-10 text-lg md:text-xl 2xl:text-xl">
                        Have questions or want to discuss your ideas? Book a free 30-minute call with us and let's chat!
                    </h2>
                </PatternBackground>
            </header>
            <Section>
                <div className="text-center">
                    <Link
                        href={FreeCallLink}
                        target="_blank"
                        className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white text-xl shadow-sm hover:bg-blue-700 active:bg-blue-800"
                    >
                        Book a Free Call
                    </Link>
                </div>
            </Section>
            <Footer />
        </>
    );
};

export default Contact;

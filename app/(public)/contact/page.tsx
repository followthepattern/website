import ContactForm from "./components/OldContact";
import Section from "../../components/section";
import PatternBackground from "../../components/patternBackground";
import Footer from "../../components/footer";

const Contact = () => {
    return (
        <>
            <header>
                <PatternBackground hideRectangles={true}>
                    <h1 className="text-center pt-10 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-medium">Get in touch</h1>
                    <h2 className="mx-auto max-w-sm sm:max-w-none text-center pt-10 text-md sm:text-lg md:text-xl 2xl:text-xl">Tell us your needs, and let us craft a tool to boost your productivity.</h2>
                </PatternBackground>
            </header>
            <Section>
                <ContactForm />
            </Section>
            <Footer />
        </>
    );
};

export default Contact;

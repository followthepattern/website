import Section from "../../components/section";
import Footer from "../../components/footer";
import { RectangleBackground } from "@/app/components/patternBackground";

const Contact = () => {
    return (
        <>
            <header className="mx-auto max-w-xl lg:max-w-6xl sm:flex text-slate-800">
                <RectangleBackground className="md:flex">
                    <div className="basis-1/2 space-y-8 mx-4">
                        <h1 className="font-medium text-left pt-10 text-6xl sm:text-6xl md:text-7xl 2xl:text-7xl">
                            <p>We build</p>
                            <p>AI Native</p>
                            <p>Applications</p>
                        </h1>
                        <h2 className="text-3xl">
                            To Enable You To Do Lot More!
                        </h2>
                    </div>
                    <div className="mx-2 basis-1/2 text-lg font-light hidden sm:block">
                        Hello
                    </div>
                </RectangleBackground>
            </header>
            <Section>
            </Section>
            <Footer />
        </>
    );
};

export default Contact;

import Section from "@/app/components/section";
import PricingBox from "../../components/PricingBox";
import Timeline from "../../components/Timeline";
import ContactForm from "@/app/(public)/contact/components/Contact";
import Link from "next/link";
import { RectangleBackground } from "@/app/components/patternBackground";
import Footer from "@/app/components/footer";

const GoAdvanced = () => {
    return (
        <>
            <header className="mx-auto max-w-5xl lg:max-w-6xl sm:flex">
                <RectangleBackground className="lg:flex">
                    <div className="space-y-8">
                        <h1 className="font-medium text-center pt-10 text-6xl sm:text-6xl md:text-7xl 2xl:text-8xl">
                            Master <span className="text-blue-500">Generics</span>{" "} <span className="whitespace-nowrap">and </span>{" "}
                            <span className="text-blue-500">Concurrency</span> in Golang
                        </h1>
                        <p className="mx-10 md:max-w-2xl md:mx-auto text-lg font-light">
                            Sign up for our five-week online course to master the advanced toolkit of the Go programming language through practical examples.
                            This course is designed to fit into your busy schedule.
                        </p>
                        <div className="flex justify-center">
                            <Link href="#pricing" className="rounded-lg w-32 text-center bg-blue-600 px-3 py-3 font-semibold text-white hover:bg-blue-700 focus:bg-blue-900">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </RectangleBackground>
            </header>
            <Section id="details" className="sm:px-20 px-4 mx-auto lg:max-w-5xl sm:max-w-4xl">
                <Section.Title className="title">Go Advanced kurzus</Section.Title>
                <p className="font-light pb-10">
                    By completing this course, <span className="font-medium text-blue-900">you will learn how generic programming</span>, also known as generics, works in the Go programming language.
                    Additionally, you will <span className="font-medium text-blue-900">master the implementation of concurrency</span>{" "} along with its associated language elementsand design patterns, which is one of the most crucial features of this popular programming language.
                </p>
                <p className="font-light pb-10">
                    Additionally, <span className="font-medium text-blue-900">the course will cover REST API development and authentication</span>, two of the most popular topics you are likely to encounter in most projects you will work on.
                    If you are not satisfied with the course, no worries <span className="font-medium text-blue-900">we offer a full refund guarantee until the course is completed.</span>
                </p>
                <Timeline>
                    <Timeline.Item
                        id={1}
                        title="Generics"
                        subtitle="Implementing Generics in Go"
                    >
                        <p>what is generic programming?</p>
                        <p>introduction to Go generics language features</p>
                        <p>generics vs <code className="text-blue-500">interface{"{}"}</code></p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={2}
                        title="Concurrency"
                        subtitle="Implementing Concurrency in Go"
                    >
                        <p>concurrency language features: {"("}goroutine, channel, select, etc...{")"}</p>
                        <p>sync library</p>
                        <p>go race detector</p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={3}
                        title="Concurrency design patterns"
                        subtitle="Introduction to popular concurrency design patterns"
                    >
                        <p>generator pattern</p>
                        <p>fan-in</p>
                        <p>fan-out</p>
                        <p>pipeline</p>
                        <p>restore sequence</p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={4}
                        title="REST API"
                        subtitle="Developing and testing REST APIs in Golang for a web service quickly and efficiently"
                    >
                        <p>implementation</p>
                        <p>introduction to related modules</p>
                        <p>testing</p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={5}
                        title="Authentication"
                        subtitle="Implementing Authentication in a Go web service"
                    >
                        <p>implementation</p>
                        <p>introduction to related modules</p>
                        <p>testing</p>
                    </Timeline.Item>
                </Timeline>
                <p className="font-light text-sm pb-10">
                    Enrollment prerequisites include knowledge of at least one programming language and experience in software development.
                    The course material assumes basic software development knowledge.
                </p>
                <p className="font-light text-sm pb-10">
                    During the course, there is a 2-hour online lecture via video call once a week.
                    This includes classwork and independent assignments, which must be implemented within the framework of a project task running throughout the entire module.
                    All lectures are recorded and available to students after the sessions.
                </p>
                <div className="flex justify-center pt-8 font-light">
                    <PricingBox
                        title="Go Advanced"
                        subtitle="Sajátítsd el a Go nyelvet gyorsan és hatékonyan!"
                        className="border-blue-500"
                        headerClassname="bg-blue-500"
                        id="pricing"
                    >
                        <div className="px-2 py-12 bg-blue-500 rounded-t-md">
                            <PricingBox.Title>Go Advanced</PricingBox.Title>
                            <PricingBox.Subtitle>Sajátítsd el a Go programozási nyelvet gyorsan és hatékonyan</PricingBox.Subtitle>
                        </div>
                        <PricingBox.Content className="pl-6 pr-4 py-8">
                            <PricingBox.Feature>
                                Go Basic Course learning material
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Access to the online coding platform
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Two-hour online lectures over five weeks
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Lecture materials available later as recordings
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Mentorship during the course
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Money-back guarantee
                            </PricingBox.Feature>
                        </PricingBox.Content>
                        <PricingBox.Content className="border-t border-blue-500 py-6 text-center font-medium text-blue-900">
                            Br 490 USD
                        </PricingBox.Content>
                    </PricingBox>
                </div>
            </Section>
            <Section id="contact" className="pb-8">
                <Section.Title className="title">Sign up for the next Golang course!</Section.Title>
                <ContactForm
                    defaultMessage={`Dear Follow The Pattern,

I would like to sign up for the upcoming Go Advanced course!`}
                />
            </Section>
            <Footer />
        </>
    );
};

export default GoAdvanced;

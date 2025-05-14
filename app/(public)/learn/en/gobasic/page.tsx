
import ContactForm from "@/app/(public)/contact/components/OldContact";
import PricingBox from "../../components/PricingBox";
import Timeline from "../../components/Timeline";
import Link from "next/link";
import Section from "@/app/components/section";
import { RectangleBackground } from "@/app/components/patternBackground";
import Footer from "@/app/components/footer";

export default function GoBasic() {
  return (
    <>
      <header className="mx-auto max-w-5xl lg:max-w-6xl sm:flex">
        <RectangleBackground className="lg:flex">
          <div className="space-y-8">
            <h1 className="font-medium text-center pt-10 text-6xl sm:text-6xl md:text-7xl md:mx-2 2xl:text-8xl">
              Learn <span className="text-blue-500 break-normal">how to</span> build web services in{" "}
              <span className="text-blue-500">Golang</span>
            </h1>
            <p className="mx-10 md:max-w-2xl md:mx-auto text-lg font-light">
              Sign up for our five-week online course and master the Go programming language through practical examples.
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
        <Section.Title className="title">Go Basic Course</Section.Title>
        <p className="font-light mb-10">
          By completing this course, you will gain a comprehensive understanding of the <span className="font-medium text-blue-900">Go programming language and learn how to develop applications and web services in Golang with clear and testable structures</span>.
        </p>
        <p className="font-light mb-10">
          You will discover how to test your code and which libraries to use. We provide mentorship throughout the entire course.{" "}
          <span className="font-medium text-blue-900">
            If you are not satisfied with the course, no worries—we offer a full refund guarantee until the course is completed.
          </span>
        </p>
        <Timeline>
          <Timeline.Item
            id={1}
            title="Intro"
            subtitle="Getting acquainted with the tools used during the course"
          >
            <p>introducing the online learning platform</p>
            <p>simple go program structure</p>
            <p>go tools commands for development</p>
          </Timeline.Item>
          <Timeline.Item
            id={2}
            title="Language Basics I."
            subtitle="Basic language features"
          >
            <p>primitive types</p>
            <p>functions</p>
            <p>conditions</p>
            <p>loops</p>
          </Timeline.Item>
          <Timeline.Item
            id={3}
            title="Language Basics II."
            subtitle="Basic language features"
          >
            <p>composite types</p>
            <p>embedding instead of inheritance</p>
          </Timeline.Item>
          <Timeline.Item
            id={4}
            title="Useful modules"
            subtitle="Introduction to the most important and popular modules"
          >
            <p>standard libraries</p>
            <p>third party libraries</p>
          </Timeline.Item>
          <Timeline.Item
            id={5}
            title="Testing"
            subtitle="Essential tools for testing"
          >
            <p>Writing tests in the Go programming language</p>
            <p className="mt-1">Using Go tools commands for testing</p>
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
            title="Go Basic"
            subtitle="Master the Go language quickly and efficiently!"
            className="border-blue-500"
            id="pricing"
          >
            <div className="px-2 py-12 bg-blue-500 rounded-t-md">
              <PricingBox.Title>Go Basic</PricingBox.Title>
              <PricingBox.Subtitle>Master the Go language quickly and efficiently</PricingBox.Subtitle>
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
          </PricingBox>
        </div>
      </Section>
      <Section id="contact" className="pb-8">
        <Section.Title className="">Sign up for the next Golang course!</Section.Title>
        <ContactForm
          defaultMessage={`Dear Follow The Pattern,

I would like to sign up for the upcoming Go Basic course!`}
        />
      </Section>
      <Footer />
    </>
  );
};
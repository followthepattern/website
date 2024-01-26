'use client'

import { useEffect, useState } from "react";
import PatternBackground from "../components/patternBackground";
import CTAButton from "../components/navigation/ctaButton";
import Section from "../components/section";
import Card from "./components/card";
import Socials from "./components/socials";
import Footer from "../components/footer";
import Profile from "./components/profile";
import MainTitle from "./components/mainTitle";
import MotionForm from "./components/motionForm";
import Link from "next/link";
import classNames from "classnames";

interface SecondaryButtonProperties {
  children?: any
  className?: string
}

function SecondurayButton(props: SecondaryButtonProperties) {
  return (
    <Link
      href="#features"
      className={classNames(props.className, "rounded-lg bg-white px-3 py-3 border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700")}
    >
      {props.children}
    </Link>
  )
}

export default function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCounter => prevCounter + 1);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="sm:flex">
        <PatternBackground>
          <div className="mx-auto max-w-5xl lg:max-w-6xl lg:flex xl:space-x-10">
            <div className="mx-3 space-y-10 justify-center flex flex-col">
              <MainTitle count={count} className="text-center pt-10 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl" />
              <p className="mx-auto max-w-xl my-2 lg:mx-2 xl:mx-auto text-gray-900">Our focus on user-centric design ensures that every web application we deliver enhances functionality, drives efficiency, and supports the growth and evolution of your business.</p>
              <div className="flex justify-center space-x-3">
                <CTAButton className="">
                  Get Started
                </CTAButton>
                <SecondurayButton>
                  Learn More
                </SecondurayButton>
              </div>
            </div>
            <div className="mx-1 h-[560px] flex justify-center items-center">
              <MotionForm count={count} className="mt-10 w-[480px] rounded-lg" />
            </div>
          </div>
        </PatternBackground>
      </header>
      <Section>
        <Section.Title>
          The Concept Behind<span className="py-1 px-1.5 mx-2 text-blue-950 bg-blue-50 border border-gray-900/20 rounded-lg inline-block">Follow The Pattern</span>
        </Section.Title>
        <p className="font-light sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-center">
          With nearly a decade of experience in IT, we have encountered a wide range of obstacles and challenges.
          Many of these are not entirely unique, allowing their solutions to be organized into thematic patterns.
          We have witnessed many scenarios and developed numerous patterns.
          Work with us, and we will share our wealth of knowledge and solutions with you.
        </p>
      </Section>
      <Section id="features">
        <Section.Title className="mb-4 sm:mb-6">
          Stay At the Top of the Industry
        </Section.Title>
        <Section.Subtitle className="mb-10">
          Utilizing the Best Tools and Mastering the Latest Technologies is Key to Achieving This.
        </Section.Subtitle>
        <div className="mt-12 space-y-4 sm:space-y-8 max-w-lg lg:max-w-none mx-auto lg:space-x-8 lg:space-y-0 lg:flex justify-center">
          <Card>
            <Card.Title>
              Crafting Modern Applications
            </Card.Title>
            <Card.Body>
              Creating Practical Products for Sale and Tools for Efficient Work
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/contact">
                Build with Us
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Title>
              Master New Coding Skills
            </Card.Title>
            <Card.Body>
              Teaching Developers New Skills for Better Problem Solving
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/learn/hu/gobasic">
                Online Courses
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Title>
              Explore Our Podcasts and Articles
            </Card.Title>
            <Card.Body>
              Dive into a Range of Articles and Podcasts on IT, Tech, Business, and Science
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/podcast">
                Explore
              </Card.Link>
            </Card.Footer>
          </Card>
        </div>
      </Section>
      <div className=" bg-gradient-to-br from-blue-600 to-cyan-500">
        <Section>
          <Section.Title className="text-white">
            Schedule a meeting with Us
          </Section.Title>
          <Section.Subtitle className="text-white pb-10">
            Tell us your needs, and let us craft a tool to boost your productivity.
          </Section.Subtitle>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white rounded-3xl text-blue-900 font-semibold px-4 py-2 text-md">
              Get in Touch
            </Link>
          </div>
        </Section>
      </div>
      <Section className="space-y-8">
        <Section.Title>
          Meet with the founder
        </Section.Title>
        <div className="flex justify-center">
          <Profile />
        </div>
        <p className="text-center text-lg">Csaba Zsolt Huszka</p>
        <p className="text-center max-w-lg lg:max-w-xl mx-auto font-light">
          I am dedicated to building solutions that not only meet current needs but are also adaptable, sustainable for the long term, and built upon the latest technological advancements.
        </p>
        <Socials className="justify-center" />
      </Section>
      <Footer />
    </>
  )
}

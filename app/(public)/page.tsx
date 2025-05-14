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
import { FreeCallLink } from "@/lib/constants";

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
            <div className="mx-12 space-y-10 justify-center flex flex-col">
              <MainTitle count={count} className="mx-auto max-w-lg sm:max-w-3xl pt-10 sm:pl-0 md:text-center lg:text-left text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl" />
              <p className="mx-auto max-w-xl my-2 lg:mx-2 xl:mx-auto text-gray-900 text-lg font-light">
                We build AI-powered applications that
                enable companies to do more through software — enhancing functionality, improving efficiency,
                and supporting long-term growth.
              </p>
              <div className="flex justify-center space-x-3">
                <CTAButton className="">
                  Get Started
                </CTAButton>
                <SecondurayButton>
                  Learn More
                </SecondurayButton>
              </div>
            </div>
            <div className="mx-1 lg:mr-6 h-[560px] flex justify-center items-center">
              <MotionForm count={count} className="mt-10 w-[480px] rounded-lg" />
            </div>
          </div>
        </PatternBackground>
      </header>
      <Section>
        <Section.Title>
          The Concept Behind<span className="py-1 px-1.5 mx-2 text-blue-950 bg-blue-50 border border-gray-900/20 rounded-lg inline-block">Follow The Pattern</span>
        </Section.Title>
        <p className="font-light sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-lg">
          With over a decade of experience in software engineering, we’ve encountered a wide range of challenges—many of which follow common patterns.

          Not every problem is unique. Over time, we’ve identified recurring themes and built reliable, reusable solutions around them.
        </p>
      </Section>
      <Section id="features">
        <Section.Title className="mb-4 sm:mb-6">
          Stay At the Top of the Industry
        </Section.Title>
        <Section.Subtitle className="mb-10">
          Utilize the Best Tools and Master the Latest Technologies
        </Section.Subtitle>
        <div className="mt-12 space-y-4 sm:space-y-8 max-w-lg lg:max-w-none mx-auto lg:space-x-8 lg:space-y-0 lg:flex justify-center">
          <Card>
            <Card.Title>
              Build AI powered Apps With Us
            </Card.Title>
            <Card.Body>
              We help you go from prototype to deployable AI-powered app.
            </Card.Body>
            <Card.Footer>
              <Card.Link href={FreeCallLink} target="_blank">
                Book a Free Call
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
            Let{"'"} Connect
          </Section.Title>
          <Section.Subtitle className="text-white pb-10">
            Have questions or want to discuss your ideas? Book a free 30-minute call with us and Let{"'"} chat!
          </Section.Subtitle>
          <div className="flex justify-center">
            <Link href={FreeCallLink} target="_blank" className="bg-white hover:bg-neutral-100 active:bg-neutral-200 rounded-3xl font-semibold px-4 py-2 text-lg shadow-md">
              Book a Free Call
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
        <p className="text-center text-lg">Csaba Huszka</p>
        <p className="max-w-lg lg:max-w-xl mx-auto font-light text-lg">
          I’m the founder of FollowThePattern and a software engineer focused on building applications that leverage modern
          technologies—including AI—to streamline processes and enable faster execution.
          With over a decade of software development experience across domains like test automation,
          scalable microservices, and event-driven systems, I focus on delivering solutions for companies that want to move fast.
        </p>
        <Socials className="justify-center" />
      </Section>
      <Footer />
    </>
  )
}

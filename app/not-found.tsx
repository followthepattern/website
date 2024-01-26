import Link from 'next/link'
import Navigation from './components/navigation/navigation'
import PatternBackground from './components/patternBackground'
import Footer from './components/footer'
import Section from './components/section'

export default function NotFound() {
  return (
    <main>
      <Navigation />
      <header className="">
        <PatternBackground hideRectangles={true}>
          <h1 className="text-center pt-10 text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-medium">Page <span className='text-red-500' >Not</span>  Found</h1>
          <h2 className="mx-auto max-w-sm sm:max-w-none text-center pt-10 text-md sm:text-lg md:text-xl 2xl:text-xl">Could not find requested resource</h2>
        </PatternBackground>
      </header>
      <Section>
        <div className="flex justify-center">
          <Link href="/" className="bg-blue-500 text-white hover:bg-blue-700 focus:bg-blue-900 px-4 py-3 rounded-lg font-medium text-lg">Return Home</Link>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
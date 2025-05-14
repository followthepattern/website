'use client'

import Waveform from './components/Waveform'
import Link from "next/link"
import { AudioPlayer } from './components/player/AudioPlayer'
import { AudioProvider } from './components/AudioProvider'

import Spotify from '@/icons/Spotify'
import Youtube from '@/icons/Youtube'
import TinyWaveFormIcon from '@/icons/TinyWave'
import Discord from '@/icons/Discord'
import { useState } from 'react'
import classNames from 'classnames'
import FPIcon from '@/icons/FPIcon'
import { PodcastYoutubeLink } from '@/lib/constants'

interface PersonIconProperties {
    className: string
}

function PersonIcon(props: PersonIconProperties) {
    return (
        <svg aria-hidden="true" viewBox="0 0 11 12" {...props}>
            <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
        </svg>
    )
}

function JoinDiscord() {
    return (
        <>
            <h2 className="items-center hidden text-sm leading-7 lg:flex text-slate-900">
                <TinyWaveFormIcon
                    colors={['fill-indigo-300', 'fill-blue-300']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Community</span>
            </h2>
            <div className="flex justify-center lg:justify-normal">
                <a
                    href="https://discord.com/invite/kDuKyG4EET"
                    className="flex items-center mt-5 group"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Discord className="animate-bounce w-8 h-8 fill-[#5865F2]" />
                    <span className="ml-3 font-medium text-slate-900">Join FP Discord</span>
                </a>
            </div>
        </>
    )
}

function ListenSidebar() {
    return (
        <>
            <h2 className="items-center hidden mt-12 text-sm leading-7 lg:flex text-slate-900">
                <TinyWaveFormIcon
                    colors={['fill-indigo-300', 'fill-blue-300']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Listen</span>
            </h2>
            <ul
                className="justify-center hidden gap-10 mt-4 text-base font-medium leading-7 lg:flex text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
                <li key="apple" className="flex">
                    <a
                        href={PodcastYoutubeLink}
                        className="flex items-center group"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Youtube className="w-8 h-8 fill-slate-400 group-hover:fill-[#f00] transition ease-in-out group-hover:scale-110 delay-75 duration-150" />
                        <span className="hidden sm:ml-3 sm:block">Youtube</span>
                    </a>
                </li>
                <li key="spotify" className="flex">
                    <a
                        href="https://open.spotify.com/show/7areDxRSKyedYDlfGSUN5T?si=173a84cbcebb4cf2"
                        className="flex items-center group"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Spotify className="w-8 h-8 fill-slate-400 group-hover:fill-[#1cd760] transition ease-in-out group-hover:scale-110 delay-75 duration-150" />
                        <span className="hidden sm:ml-3 sm:block">Spotify</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

function LearnMoreSidebar() {
    return (
        <>
            <h2 className="items-center hidden mt-12 text-sm leading-7 lg:flex text-slate-900">
                <TinyWaveFormIcon
                    colors={['fill-indigo-300', 'fill-blue-300']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Learn more</span>
            </h2>
            <ul
                className="justify-center hidden gap-10 mt-4 text-base font-medium leading-7 lg:flex text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
                <li key="apple" className="flex">
                    <a
                        href="/"
                        className="flex items-center group"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="">Services</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

function ListenFooter() {
    return (
        <>
            <h2 className="flex items-center mt-8 ml-3 text-sm leading-7 text-slate-900">
                <TinyWaveFormIcon
                    colors={['fill-indigo-300', 'fill-blue-300']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Listen</span>
            </h2>
            <div className="flex justify-center">
                <ul
                    className="flex flex-col justify-center gap-8 mt-8 text-base font-medium xs:flex-row text-slate-700"
                >
                    <li key="apple" className="flex">
                        <a
                            href="https://www.youtube.com/@FollowThePattern"
                            className="flex items-center group"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Youtube className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-400 group-hover:fill-[#f00]" />
                            <span className="ml-3">Youtube</span>
                        </a>
                    </li>
                    <li key="spotify" className="flex">
                        <a
                            href="https://open.spotify.com/show/7areDxRSKyedYDlfGSUN5T?si=173a84cbcebb4cf2"
                            className="flex items-center group"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Spotify className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-400 group-hover:fill-[#1cd760]" />
                            <span className="ml-3">Spotify</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

function AboutSection(props: any) {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <section {...props}>
                <h2 className="flex items-center text-sm leading-7 text-slate-900">
                    <TinyWaveFormIcon
                        colors={['fill-blue-500', 'fill-blue-300']}
                        className="h-2.5 w-2.5"
                    />
                    <span className="ml-2.5">About</span>
                </h2>
                <p
                    className={classNames("mt-2 font-light leading-7 text-slate-700", { "line-clamp-4": !isExpanded })}
                >
                    Welcome to the <span className="font-normal text-blue-900/80">#FPPodcast</span>! I am Csaba Huszka, Senior Software Engineer and the visionary behind <Link href="/" className="font-medium hover:text-blue-700 hover:font-medium active:text-blue-900">Follow The Pattern</Link>.
                    With each episode, I will be your host on an insightful journey.
                    Alongside me, I will bring expert guests who have made their mark in various domains.
                    Together, we will explore their careers, tap into their wealth of experience, and exchange knowledge that enriches both us and our listeners.
                </p>
                {!isExpanded && (
                    <button
                        type="button"
                        className="text-sm font-bold leading-6 text-slate-700 hover:text-slate-800 active:text-slate-900"
                        onClick={() => setIsExpanded(true)}
                    >
                        Show more
                    </button>
                )}
            </section>
        </>
    )
}

interface PodcastLayoutProperties {
    children: React.ReactNode
}

export default function PodcastLayout({ children }: PodcastLayoutProperties) {
    return (
        <AudioProvider>
            <header className="bg-blue-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
                <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                    <span className=" text-slate-500">Hosted by</span>
                    <span className="flex gap-6 mt-6 font-bold text-slate-900">
                        Csaba Huszka
                    </span>
                </div>
                <div className="relative z-10 px-4 pt-10 pb-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
                    <Link
                        href="/podcast"
                        className="relative block w-48 mx-auto overflow-hidden rounded-lg shadow-xl shadow-blue-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
                        aria-label="Homepage"
                    >
                        <FPIcon
                            className="w-full h-full p-4 text-blue-500"
                        />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-blue-500/10 sm:rounded-xl lg:rounded-2xl" />
                    </Link>
                    <div className="mt-10 text-center lg:mt-12 lg:text-left">
                        <p className="text-xl font-bold text-slate-900">
                            <Link href="/podcast">FP Podcast</Link>
                        </p>
                        <p className="mt-3 text-lg font-light leading-8 text-slate-700">
                            The ultimate destination for IT, science and business enthusiasts.
                        </p>
                    </div>
                    <AboutSection className="hidden mt-12 lg:block" />
                    <section className="lg:mt-12">
                        <div className="h-px mt-12 bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
                        <ListenSidebar />
                        <LearnMoreSidebar />
                    </section>
                    <Link href="/">
                        <div className="mt-5 text-sm font-medium text-gray-900/70 text-center lg:hidden hover:text-blue-700 active:text-blue-900">Back To Home</div>
                    </Link>
                </div>
            </header>
            <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
                <Waveform className="absolute top-0 left-0 w-full h-20" />
                <div className="relative">{children}</div>
            </main>
            <footer className="py-10 pb-40 border-t border-slate-200 bg-blue-50 sm:py-16 sm:pb-32 lg:hidden">
                <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4">
                    <AboutSection />
                    <ListenFooter />
                    <h2 className="flex items-center mt-8 ml-3 text-sm font-medium leading-7 text-slate-900">
                        <PersonIcon className="w-auto h-3 fill-blue-300" />
                        <span className="ml-2.5">Hosted by</span>
                    </h2>
                    <div className="flex gap-6 mt-2 ml-5 text-sm font-bold leading-7 text-slate-900">
                        Csaba Huszka
                    </div>
                </div>
            </footer>
            <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
                <AudioPlayer />
            </div>
        </AudioProvider>
    )
}

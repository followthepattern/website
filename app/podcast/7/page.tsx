'use client'

import Triangle from "@/icons/Triangle";
import EpisodeBody from "../components/EpisodeBody";
import FPDiscordLink, { PodcastLink } from "../components/PodcastLink";
import { episodes } from "../episodes";

export default function SeventhEpisode() {
    const episode = episodes[6]

    return (
        <EpisodeBody episode={episode}>
            <h2 className="flex items-center text-sm leading-7 text-slate-900">
                <Triangle className="w-3 h-3 fill-blue-300" />
                <span className="ml-2">Description</span>
            </h2>
            <p className="mt-2 font-light leading-7 text-slate-700">{episode.description}</p>
            {episode.guest && (<>
                <h2 className="flex items-center mt-8 text-sm leading-7 text-slate-900">
                    <Triangle className="w-3 h-3 fill-blue-300" />
                    <span className="ml-2">Guest</span>
                </h2>
                <p className="mt-1 font-light leading-7 text-slate-700">{episode.guest}</p></>)}
            {episode.guest && (<>
                <h2 className="flex items-center mt-8 text-sm leading-7 text-slate-900">
                    <Triangle className="w-3 h-3 fill-blue-300" />
                    <span className="ml-2">Language</span>
                </h2>
                <p className="mt-1 font-light leading-7 text-slate-700">{episode.lang}</p></>)}
            <h2 className="flex items-center mt-8 text-sm leading-7 text-slate-900">
                <Triangle className="w-3 h-3 fill-blue-300" />
                <span className="ml-2">Links</span>
            </h2>
            <div className="mt-3 font-light leading-7 text-slate-700">
                <ul className="list-none list-inside list-dec">
                    <li>László Fogas <PodcastLink href="https://www.linkedin.com/in/laszlofogas/">LinkedIn</PodcastLink></li>
                    <li>Cloud Native Szeged <PodcastLink href="https://www.meetup.com/cloud-native-szeged/">Meetup</PodcastLink></li>
                    <li>K8s Budapest <PodcastLink href="https://www.meetup.com/k8s-bud/">Meetup</PodcastLink></li>
                    <li>László Fogas <PodcastLink href="https://twitter.com/laszlocph">Twitter</PodcastLink></li>
                    <li>Cloud Native Hungary <PodcastLink href="https://discord.gg/tMD8NFhchh">Discord</PodcastLink></li>
                    <FPDiscordLink />
                </ul>
            </div>
        </EpisodeBody>
    )
}
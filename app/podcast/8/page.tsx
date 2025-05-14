'use client'

import Triangle from "@/icons/Triangle";
import EpisodeBody from "../components/EpisodeBody";
import { PodcastLink } from "../components/PodcastLink";
import { episodes } from "../episodes";

export default function Episode() {
    const episode = episodes[7]

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
                    <li><PodcastLink href="https://en.wikipedia.org/wiki/Dirac_large_numbers_hypothesis">Dirac large numbers hypothesis</PodcastLink></li>
                    <li><PodcastLink href="http://www.agt.bme.hu/volgyesi/gravity/cair_g_t.pdf">Some possible physical reason of time variation of Earth’s gravity field</PodcastLink></li>
                </ul>
            </div>
        </EpisodeBody>
    )
}
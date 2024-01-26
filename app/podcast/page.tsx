'use client'

import Link from "next/link";
import { Container } from "./components/Container";
import { useMemo, useState } from "react";
import { useAudioPlayer } from "./components/AudioProvider";
import { EpisodeProperty, episodes } from "./episodes";
import classNames from "classnames";

interface PlayPauseIconProperties {
    playing: boolean
    className: string
}

function PlayPauseIcon({ playing, ...props }: PlayPauseIconProperties) {
    return (
        <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" {...props}>
            {playing ? (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
                />
            ) : (
                <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
            )}
        </svg>
    )
}

function getFormattedEpisodeTitle(episode: EpisodeProperty): string {
    let title = [episode.title, episode.guest, episode.lang];

    return title.join(" | ")
}

function EpisodeEntry(episode: EpisodeProperty) {
    const [isExpanded, setIsExpanded] = useState(false)

    const date = new Date(episode.published);
    const episodeTitle = getFormattedEpisodeTitle(episode)

    let audioPlayerData = useMemo(
        () => ({
            title: episode.title,
            audio: {
                src: episode.audio.src,
                type: episode.audio.type,
            },
            link: `/${episode.id}`,
        }),
        [episode]
    )
    let player = useAudioPlayer(audioPlayerData)

    return (
        <article
            aria-labelledby={`episode-${episode.id}-title`}
            className="py-10 sm:py-12"
        >
            <Container>
                <div className="flex flex-col items-start">
                    <span className="text-sm leading-7 text-slate-500">{episode.published}</span>
                    <h2
                        id={`episode-${episode.id}-title`}
                        className={classNames("mt-2 text-lg font-bold", {"text-blue-500": player.playing})}
                    >
                        <Link href={`/podcast/${episode.id}`}>{episodeTitle}</Link>
                    </h2>
                    <p className={classNames("mt-1 text-base leading-7 text-slate-700", {
                        "line-clamp-3": !isExpanded
                    })}>
                        {episode.description}
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
                    <div className="flex items-center gap-4 mt-4">
                        <button
                            type="button"
                            onClick={() => player.toggle()}
                            className="flex items-center text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900"
                            aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${episodeTitle}`}
                        >
                            <PlayPauseIcon
                                playing={player.playing}
                                className="h-2.5 w-2.5 fill-current"
                            />
                            <span className="ml-3" aria-hidden="true">
                                Listen
                            </span>
                        </button>
                        <span
                            aria-hidden="true"
                            className="text-sm font-bold text-slate-400"
                        >
                            /
                        </span>
                        <Link
                            href={`/podcast/${episode.id}`}
                            className="flex items-center text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900"
                            aria-label={`Show notes for episode ${episodeTitle}`}
                        >
                            Show notes
                        </Link>
                    </div>
                </div>
            </Container>
        </article>
    )
}

export default function Podcast() {

    const reversedEpisodes = [...episodes].reverse();
    return (
        <>
            <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
                <Container>
                    <h1 className="text-2xl font-bold leading-7 text-slate-900">
                        Episodes
                    </h1>
                </Container>
                <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
                    {reversedEpisodes.map((episode) => {
                        return (<EpisodeEntry key={episode.id} {...episode} />)
                    })}
                </div>
            </div>
        </>
    )
}
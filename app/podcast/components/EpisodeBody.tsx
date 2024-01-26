import { useAudioPlayer } from "./AudioProvider";
import { Container } from "./Container";
import { FormattedDate } from "./FormattedDate";
import { PlayButton } from "./player/PlayButton";
import { EpisodeProperty } from "../episodes";

interface EpisodeBodyProperties {
    children: any
    episode: EpisodeProperty
}

export default function EpisodeBody({ children, episode }: EpisodeBodyProperties) {
    let date = new Date(episode.published)

    let audioPlayerData = {
        title: episode.title,
        audio: {
            src: episode.audio.src,
            type: episode.audio.type,
        },
        link: `/${episode.id}`,
    }

    let player = useAudioPlayer(audioPlayerData);

    return (
        <>
            <article className="py-16 lg:py-36">
                <Container>
                    <header className="flex flex-col">
                        <div className="flex items-center gap-6">
                            <PlayButton player={player} size="large" />
                            <div className="flex flex-col">
                                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                                    {episode.title}
                                </h1>
                                <FormattedDate
                                    date={date}
                                    className="order-first font-mono text-sm leading-7 text-slate-500"
                                />
                            </div>
                        </div>
                    </header>
                    <hr className="my-12 border-gray-200" />
                    {children}
                </Container>
            </article>
        </>
    )
}
import { DiscordLink } from "@/lib/constants"

interface PodcastLinkProperties {
    children: any
    href: string
}

export function PodcastLink(props: PodcastLinkProperties) {
    return (
        <a target="_blank" rel="noreferrer" className="font-medium text-blue-500 hover:text-blue-700 active:text-blue-900" {...props}>{props.children}</a>
    )
}

export function FPDiscordLinkHUN() {
    return (
        <li className="pt-5">Csatlakozz az <a href={DiscordLink} target="_blank" rel="noreferrer" className="font-medium text-blue-500 hover:text-blue-700 active:text-blue-900">FP Discord</a> szerverhez, ahol tudsz a podcasttel kapcsolatban kérdéseket feltenni, vagy kérdéseket beküldeni a következő epizódhoz, amelyekre tudunk válaszolni vendégemmel a felvétel során!</li>
    )
}

export function FPDiscordLink() {
    return (
        <li className="pt-5">
            Join the <a href={DiscordLink} target="_blank" rel="noreferrer" className="font-medium text-blue-500 hover:text-blue-700 active:text-blue-900">FP Discord</a>  server, where you can ask questions about the podcast or submit questions for the next episode that we can answer with my guest during the recording!
        </li>
    )
}
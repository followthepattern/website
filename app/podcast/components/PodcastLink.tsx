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

export default function FPDiscordLink() {
    return (
        <li className="pt-5">Csatlakozz az <a href={DiscordLink} target="_blank" rel="noreferrer" className="font-medium text-blue-500 hover:text-blue-700 active:text-blue-900">FP Discord</a> szerverhez, ahol tudsz a podcasttel kapcsolatban kérdéseket feltenni, vagy kérdéseket beküldeni a következő epizódhoz, amelyekre tudunk válaszolni vendégemmel a felvétel során!</li>
    )
}
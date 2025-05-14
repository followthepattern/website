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
import { Metadata } from "next"
import Navigation from "../components/navigation/navigation"

export const metadata: Metadata = {
    description: 'Solutions in software development 2',
    openGraph: {
        title: "test og title"
    }
}


export default function PodcastAdsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className="">
            {/* Include shared UI here e.g. a header or sidebar */}
            <Navigation />
            {children}
        </ main>
    )
}
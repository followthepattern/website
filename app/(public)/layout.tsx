import Navigation from "../components/navigation/navigation"

export default function PublicLayout({
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
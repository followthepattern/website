import type { Metadata } from 'next'
import Contact from "../components/contact"
 
export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="md font-light mx-auto max-w-3xl px-5 pt-5 text-slate-950"
            >
                {/* Include shared UI here e.g. a header or sidebar */}
                {children}
            </ div>
            <Contact />
        </>
    )
}
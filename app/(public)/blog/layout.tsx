export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{
            fontFamily: "\"Source Code Pro\", monospace",
        }}
            className="font-light bg-slate-900 text-white"
        >
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </ div>
    )
}
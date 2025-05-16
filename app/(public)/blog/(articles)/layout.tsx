import type { Metadata } from 'next'
import BookForm from '../../book/bookForm'
import Section from '@/app/components/section'
import Footer from '@/app/components/footer'
 
export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-slate-50">
            <div
                className="md font-light mx-auto max-w-3xl px-5 pt-5 text-slate-900"
            >
                {/* Include shared UI here e.g. a header or sidebar */}
                {children}
            </ div>
            <BookForm />
            <Section>
                <Footer />
            </Section>
        </div>
    )
}
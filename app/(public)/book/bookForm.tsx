import Section from '@/app/components/section';
import { FreeCallLink } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

const BookForm = () => {
    return (
        <Section>
            <Section.Title>
                Let{"'"} Connect!
            </Section.Title>
            <Section.Subtitle className="mb-16 sm:mb-20">
                Have questions or want to discuss your ideas? Book a free 30-minute call with us and let{"'"}s chat!
            </Section.Subtitle>
            <div className="text-center">
                <Link
                    href={FreeCallLink}
                    className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800"
                >
                    Book a Free Call
                </Link>
            </div>
        </Section>
    );
};

export default BookForm;

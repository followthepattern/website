import Section from '@/app/components/section';
import Link from 'next/link';
import React from 'react';

const BookForm = () => {
    return (
        <Section>
            <Section.Title>
                Let{"'"}s Talk AI!
            </Section.Title>
            <div className="mb-16 sm:mb-20 text-lg font-light sm:max-w-lg sm:mx-auto">
                <p className="pb-2">Got questions about AI or how it could work for your business?</p>

                <p className="pb-2">In this free 30-minute call, we’ll talk through your current challenges, explore potential AI solutions, and see if there’s a way I can help.</p>

                <p>Whether you’re just starting or already experimenting with AI, this session is a great first step.</p>
            </div>
            <div className="text-center">
                <Link
                    href={"/book"}
                    className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800"
                >
                    Book a Free Call
                </Link>
            </div>
        </Section>
    );
};

export default BookForm;

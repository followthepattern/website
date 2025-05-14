import { FreeCallLink } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

const ContactForm = () => {
    return (
        <div className="text-center p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let{"'"}s Connect!</h2>
            <p className="text-gray-600 mb-6">
                Have questions or want to discuss your ideas? Book a free 30-minute call with us and let{"'"}s chat!
            </p>
            <Link
                href={FreeCallLink}
                className="rounded-lg bg-blue-600 px-3 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800"
            >
                Book a Free Call
            </Link>
        </div>
    );
};

export default ContactForm;

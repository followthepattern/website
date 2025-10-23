'use client'

import PatternBackground from '@/app/components/patternBackground';
import React from 'react';

export default function ServicesPage() {
    return (
        <header className="sm:flex">
            <PatternBackground>
                <div className="mx-auto max-w-5xl lg:max-w-6xl lg:flex xl:space-x-10">
                    <div className="mx-12 space-y-10 justify-center flex flex-col">
                        We build AI native applications that
                        enable companies to do more through software — enhancing functionality, improving efficiency,
                        and supporting long-term growth.
                    </div>
                    <div className="mx-1 lg:mr-6 h-[560px] flex justify-center items-center">
                        hello
                    </div>
                </div>
            </PatternBackground>
        </header>
    );
}
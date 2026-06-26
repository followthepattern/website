"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import CheckIcon from "@/icons/CheckIcon";
import FPIcon from "@/icons/FPIcon";
import Spin from "@/icons/Spin";

type Phase = "upload" | "scan" | "extract" | "done";

const order: Phase[] = ["upload", "scan", "extract", "done"];

const durations: Record<Phase, number> = {
    upload: 2200,
    scan: 2200,
    extract: 2800,
    done: 1800,
};

const extracted = [
    { label: "Carrier", value: "Atlasz Logistics" },
    { label: "Route", value: "Budapest → Vienna" },
    { label: "Gross weight", value: "12,400 kg" },
    { label: "ETA", value: "6h 20m" },
];

const status: Record<Phase, { text: string; className: string }> = {
    upload: { text: "Uploading", className: "bg-blue-50 text-blue-600" },
    scan: { text: "Scanning", className: "bg-indigo-50 text-indigo-600" },
    extract: { text: "Extracting", className: "bg-violet-50 text-violet-600" },
    done: { text: "Verified", className: "bg-green-50 text-green-600" },
};

function FileGlyph({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M6 2.75h7L19.25 9v11.25A1.75 1.75 0 0 1 17.5 22h-11A1.75 1.75 0 0 1 4.75 20.25V4.5A1.75 1.75 0 0 1 6 2.75Z"
                className="fill-red-50 stroke-red-400"
                strokeWidth="1.4"
            />
            <path d="M13 2.75V8.5a.75.75 0 0 0 .75.75h5" className="stroke-red-400" strokeWidth="1.4" fill="none" />
            <path d="M8 13.5h8M8 16.5h5" className="stroke-red-300" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    );
}

function UploadPanel() {
    return (
        <div className="flex h-full flex-col justify-center">
            <div className="rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/40 p-5">
                <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white shadow-sm">
                        <FileGlyph className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">freight-invoice.pdf</p>
                        <p className="text-xs text-gray-500">Uploading document…</p>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                            <motion.div
                                className="h-full rounded-full bg-blue-600"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.9, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
                Drop your documents — our AI reads them instantly
            </p>
        </div>
    );
}

function ScanPanel() {
    return (
        <div className="flex h-full flex-col">
            <div className="relative mx-auto w-full max-w-[260px] flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="space-y-2.5">
                    <div className="h-3 w-1/2 rounded bg-gray-200" />
                    <div className="h-2 w-3/4 rounded bg-gray-100" />
                    <div className="h-2 w-2/3 rounded bg-gray-100" />
                    <div className="h-2 w-4/5 rounded bg-gray-100" />
                    <div className="mt-4 h-2 w-1/3 rounded bg-gray-200" />
                    <div className="h-2 w-3/5 rounded bg-gray-100" />
                    <div className="h-2 w-1/2 rounded bg-gray-100" />
                </div>
                <motion.div
                    className="absolute inset-x-0 h-16 bg-gradient-to-b from-indigo-400/0 via-indigo-400/25 to-indigo-400/0"
                    initial={{ top: "-25%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-x-0 h-px bg-indigo-500 shadow-[0_0_12px_2px_rgba(99,102,241,0.7)]"
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <div className="mt-3 flex items-center justify-center space-x-2 text-sm text-indigo-600">
                <Spin className="h-4 w-4 animate-spin text-indigo-100 fill-indigo-600" />
                <span>Scanning with AI…</span>
            </div>
        </div>
    );
}

function ExtractPanel() {
    return (
        <div className="flex h-full flex-col">
            <p className="mb-3 text-sm font-semibold text-gray-900">Extracted data</p>
            <div className="space-y-2.5">
                {extracted.map((field, i) => (
                    <motion.div
                        key={field.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.35, type: "spring", stiffness: 400, damping: 26 }}
                        className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2"
                    >
                        <span className="flex items-center space-x-2">
                            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green-100">
                                <CheckIcon className="h-3 w-3 text-green-600" />
                            </span>
                            <span className="text-xs text-gray-500">{field.label}</span>
                        </span>
                        <span className="text-sm font-medium text-gray-900">{field.value}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function DonePanel() {
    return (
        <div className="flex h-full flex-col items-center justify-center text-center">
            <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
            >
                <CheckIcon className="h-8 w-8 text-green-600" />
            </motion.div>
            <p className="mt-4 text-base font-semibold text-gray-900">Document processed</p>
            <p className="mt-1 text-sm text-gray-500">4 fields extracted &amp; verified</p>
        </div>
    );
}

function renderPhase(phase: Phase) {
    switch (phase) {
        case "upload":
            return <UploadPanel />;
        case "scan":
            return <ScanPanel />;
        case "extract":
            return <ExtractPanel />;
        case "done":
            return <DonePanel />;
    }
}

interface AIScanUploadProperties {
    className?: string;
}

export default function AIScanUpload({ className }: AIScanUploadProperties) {
    const [phase, setPhase] = useState<Phase>("upload");

    useEffect(() => {
        let cancelled = false;
        let timer: ReturnType<typeof setTimeout>;
        let i = 0;

        const tick = () => {
            timer = setTimeout(() => {
                if (cancelled) return;
                i = (i + 1) % order.length;
                setPhase(order[i]);
                tick();
            }, durations[order[i]]);
        };

        tick();
        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, []);

    const pill = status[phase];

    const spring = {
        stiffness: 700,
        damping: 30,
    };

    return (
        <div className={classNames(className, "")}>
            <p className="pl-2 sm:pl-2.5 pb-1 italic text-lg sm:text-xl sm:pb-2 text-neutral-800">
                We build everything...
            </p>
            <div className="border-4 border-dashed p-[1px] sm:p-2 rounded-lg border-gray-400">
                <motion.div
                    layout
                    transition={spring}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                >
                    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
                        <div className="flex items-center space-x-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                <FPIcon className="h-4 w-4 text-blue-500" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900">AI Document Scanner</span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={pill.text}
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 4 }}
                                transition={{ duration: 0.2 }}
                                className={classNames(
                                    "rounded-full px-2.5 py-1 text-xs font-medium",
                                    pill.className
                                )}
                            >
                                {pill.text}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <div className="relative h-[320px] p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={phase}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                {renderPhase(phase)}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import FPIcon from "@/icons/FPIcon";

interface Message {
    role: "bot" | "user";
    text: string;
}

const script: Message[] = [
    { role: "bot", text: "Hi! 👋 Welcome to Follow The Pattern." },
    { role: "user", text: "Can you build an AI-powered app for us?" },
    { role: "bot", text: "Absolutely — from prototype to production. 🚀" },
    { role: "user", text: "Love it. How do we get started?" },
    { role: "bot", text: 'Just tap "Email Us" below and say hi!' },
];

const TYPING_MS = 1100;
const READ_MS = 850;
const RESTART_MS = 3000;

function TypingDots() {
    return (
        <div className="flex items-center space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="h-2 w-2 rounded-full bg-gray-400"
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                />
            ))}
        </div>
    );
}

function Bubble({ message }: { message: Message }) {
    const isBot = message.role === "bot";
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={classNames("flex w-full", isBot ? "justify-start" : "justify-end")}
        >
            <span
                className={classNames(
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                    isBot
                        ? "rounded-bl-sm bg-gray-100 text-gray-900"
                        : "rounded-br-sm bg-blue-600 text-white"
                )}
            >
                {message.text}
            </span>
        </motion.div>
    );
}

export default function MiniChat({ className }: { className?: string }) {
    const [count, setCount] = useState(0);
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const timers: ReturnType<typeof setTimeout>[] = [];
        const at = (delay: number, fn: () => void) =>
            timers.push(setTimeout(() => !cancelled && fn(), delay));

        const run = () => {
            setCount(0);
            setTyping(false);
            let t = 600;
            script.forEach((msg, i) => {
                if (msg.role === "bot") {
                    at(t, () => setTyping(true));
                    t += TYPING_MS;
                    at(t, () => {
                        setTyping(false);
                        setCount(i + 1);
                    });
                    t += READ_MS;
                } else {
                    at(t, () => setCount(i + 1));
                    t += READ_MS;
                }
            });
            at(t + RESTART_MS, run);
        };

        run();
        return () => {
            cancelled = true;
            timers.forEach(clearTimeout);
        };
    }, []);

    return (
        <div
            className={classNames(
                className,
                "w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
            )}
        >
            <div className="flex items-center space-x-3 border-b border-gray-100 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                    <FPIcon className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">Follow The Pattern</span>
                    <span className="flex items-center text-xs font-light text-gray-500">
                        <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500" />
                        Online
                    </span>
                </div>
            </div>
            <div className="flex h-64 flex-col justify-end space-y-3 p-4">
                <AnimatePresence initial={false}>
                    {script.slice(0, count).map((message, i) => (
                        <Bubble key={i} message={message} />
                    ))}
                    {typing && (
                        <motion.div
                            key="typing"
                            layout
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-start"
                        >
                            <span className="rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3">
                                <TypingDots />
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

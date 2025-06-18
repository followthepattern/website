type Article = {
    title: string,
    description: string,
    publishDate: string,
}

export const articles: {[key: string]: Article} = {
    "why-go-is-a-great-fit-for-LLM-calls": {
        title: "Why Go might be better for calling LLMs?",
        description: "Go implements a concurrency with flexible language features, which can support cleaner design for chain of API calls",
        publishDate: "16 May 2025",
    },
    "automate-tasks-from-your-telegram": {
        title: "AI that listens: automate tasks from your chat app",
        description: "Learn how to connect a Telegram bot to your own AI system to automate tasks, protect user data, and build private, efficient workflows using Go, PostgreSQL, and Ollama",
        publishDate: "18 Jun 2025",
    },
}
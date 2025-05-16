type Article = {
    title: string,
    description: string,
    publishDate: string,
}

export const articles: {[key: string]: Article} = {
    "why-go-is-better-for-calling-llm": {
        title: "Why Go might be better for calling LLMs?",
        description: "Go implements a concurrency with flexible language features, which can support cleaner design for chain of API calls",
        publishDate: "16 May 2025",
    },
}
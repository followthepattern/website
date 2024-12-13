import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="hover:bg-neutral-300 text-5xl p-5 rounded-xl">{children}</h1>
        ),
        ...components,
    }
}
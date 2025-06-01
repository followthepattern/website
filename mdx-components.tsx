import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl pt-8 pb-4 md:pt-10 md:pb-5 lg:pt-12 lg:pb-6 font-normal text-center sm:font-bold sm:text-6xl">{children}</h1>
        ),
        h2: ({ children }) => (
            <h1 className="text-3xl pt-6 pb-3 md:pt-8 md:pb-4 lg:pt-10 lg:pb-5 font-normal sm:text-5xl">{children}</h1>
        ),
        h3: ({ children }) => (
            <h1 className="text-2xl pt-6 pb-3 md:pt-8 md:pb-4 lg:pt-10 lg:pb-5 font-normal sm:text-4xl">{children}</h1>
        ),
        h4: ({ children }) => (
            <h1 className="text-xl pt-4 pb-2 md:pt-5 md:pb-2 lg:pt-6 lg:pb-3 xm sm:text-3xl">{children}</h1>
        ),
        h5: ({ children }) => (
            <h1 className="text-lg pb-6 sm:text-2xl sm:pb-12">{children}</h1>
        ),
        h6: ({ children }) => (
            <h1 className="text-lg pb-5 sm:text-xl sm:pb-6">{children}</h1>
        ),
        p: ({ children }) => (
            <p className="pt-2 pb-4 md:pt-3 md:pb-5 lg:pt-2 lg:pb-4 text-lg">{children}</p>
        ),
        strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
        ),
        hr: ({ children }) => (
            <div className='py-6 sm:py-12'>
                <hr />
            </div>
        ),
        em: ({ children }) => (
            <em className="italic">
                {children}
            </em>
        ),
        ul: ({ children }) => (
            <ul className="list-inside list-disc text-lg pt-2 pb-4 md:pt-3 md:pb-5 lg:pt-2 lg:pb-4">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside text-lg pt-2 pb-4 md:pt-3 md:pb-5 lg:pt-2 lg:pb-4">
                {children}
            </ol>
        ),
        li: (obj) => {
            const child = Array.isArray(obj.children) ? obj.children[0] : obj.children;
            const isParagraph = child?.type === 'p';

            return (
                <li>
                    {isParagraph ? child.props.children : obj.children}
                </li>
            )
        },
        a: ({ children, ...props }) => (
            <a
                {...props}
                target="_blank"
                className="text-lg font-medium text-slate-700 underline decoration-blue-500 hover:decoration-2 underline-offset-2 active:bg-blue-50"
            >{children}</a>
        ),
        img: ({ ...props }) => (
            <img
                {...props}
                className="justify-self-center py-6 sm:py-6"
            />
        ),
        ...components,
    }
}
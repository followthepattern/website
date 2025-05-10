import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl py-6 font-normal text-center sm:font-bold sm:text-6xl sm:py-12">{children}</h1>
        ),
        h2: ({ children }) => (
            <h1 className="text-3xl pt-6 pb-2 font-normal sm:text-5xl sm:pt-10">{children}</h1>
        ),
        h3: ({ children }) => (
            <h1 className="text-2xl pt-4 pb-2 font-normal sm:text-4xl sm:pt-8">{children}</h1>
        ),
        h4: ({ children }) => (
            <h1 className="text-xl py-2 xm sm:text-3xl sm:pt-4">{children}</h1>
        ),
        h5: ({ children }) => (
            <h1 className="text-lg py-2 sm:text-2xl sm:py-4">{children}</h1>
        ),
        h6: ({ children }) => (
            <h1 className="text-lg py-2 sm:text-xl sm:py-4">{children}</h1>
        ),
        p: ({ children }) => (
            <p className="py text-lg sm:py-2">{children}</p>
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
            <ul className="list-inside list-disc">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside">
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
                className="font-medium text-slate-700 underline decoration-blue-500 hover:decoration-2 underline-offset-2 active:bg-blue-50"
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
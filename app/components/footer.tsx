import FPIcon from "@/icons/FPIcon"
import classNames from "classnames"
import Credits from "../(public)/components/credits"
import Link from "next/link"

const navigation = {
    company: [
        { name: 'Book a Free Call', href: '/book' },
        { name: 'Blog', href: '/blog' },
        { name: 'Podcast', href: '/podcast' },
        { name: 'Contact', href: '/contact' },
    ],
    courses: [
        { name: 'Go Basic', href: '/learn/en/gobasic' },
        { name: 'Go Advanced', href: '/learn/en/goadvanced' },
    ],
}

interface FooterProperties {
    className?: string
}

export default function Footer(props: FooterProperties) {
    return (
        <footer className={classNames(props.className, "bg-white")} >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                    <div className="space-y-8">
                        <FPIcon className="h-10 w-10 text-blue-500" />
                        <p className="text-sm leading-6 text-gray-600 font-light">
                            Building applications that enable companies to do more
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-10">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Links</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Courses</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.courses.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Credits />
            </div>
        </footer>
    )
}

import classNames from "classnames";
import Link from "next/link";

export default function CTAButton(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            href="/contact"
            className={classNames(props.className, "rounded-lg bg-blue-600 px-3 py-3 font-semibold text-white shadow-sm hover:bg-blue-700")}
        >
            {props.children ?? "Build with Us!" }
        </Link>
    )
}
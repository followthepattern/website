import FPIcon from "@/icons/FPIcon";
import Link from "next/link";

export default function HomeActionIcon(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link href="/" className=" p-1.5">
            <span className="sr-only">Follow The Pattern</span>
            <FPIcon className="w-10 h-10 text-blue-500" />
        </Link>
    )
}
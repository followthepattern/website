import RightArrowIcon from "@/icons/RightArrowIcon";
import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, HTMLAttributes } from "react";

interface CardLinkProperties {
    className?: string,
    children?: any,
    href: string,
    target?: HTMLAttributeAnchorTarget,
}

function CardLink(props: CardLinkProperties) {
    return (
        <Link className={classNames(props.className, "text-sm inline-block font-semibold")} href={props.href} target={props.target}>
            <span className="flex rounded-lg p-3 bg-neutral-100 group-hover:bg-gray-200">
                {props.children}
                <RightArrowIcon className="ml-2 w-5 h-5" />
            </span>
        </Link>
    )
}

function Footer(props: HTMLAttributes<HTMLElement>) {
    return (
        <div className={classNames(props.className, "flex-none pt-4 border-t border-gray-100")} {...props}>
            {props.children}
        </div>
    )
}

function Body(props: HTMLAttributes<HTMLElement>) {
    return (
        <div className={classNames(props.className, "grow font-light flex items-center")} {...props}>
            {props.children}
        </div>
    )
}

function Title(props: HTMLAttributes<HTMLElement>) {
    return (
        <p className={classNames(props.className, "text-xl flex-none")} {...props}>
            {props.children}
        </p>
    )
}

export default function Card(props: HTMLAttributes<HTMLElement>) {
    return (
        <div className={classNames(props.className, "group hover:bg-gray-50 flex flex-col shadow-md space-y-6 md:space-y-12 rounded-lg border border-gray-200 p-4 lg:w-96")} {...props}>
            {props.children}
        </div>
    )
}

Card.Footer = Footer;
Card.Body = Body;
Card.Link = CardLink;
Card.Title = Title;
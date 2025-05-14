import classNames from "classnames";
import { HTMLAttributes } from "react";

function Title(props: HTMLAttributes<HTMLElement>) {
    return (
        <h2 className={classNames(props.className, "text-center text-3xl sm:text-4xl mb-10 sm:mb-12 xl:text-5xl")}>
            {props.children}
        </h2>
    )
}

function Subtitle(props: HTMLAttributes<HTMLElement>) {
    return (
        <h2 className={classNames(props.className, "mb-6 font-light text-lg sm:max-w-lg sm:mx-auto")}>
            {props.children}
        </h2>
    )
}

export default function Section(props: HTMLAttributes<HTMLElement>) {
    return (
        <section className={classNames("text-lg mx-auto max-w-7xl px-6 pb-8 sm:pb-16 pt-16 sm:pt-24 lg:px-8 lg:pt-32", props.className)}
            id={props.id}
        >
            {props.children}
        </section>
    )
}

Section.Title = Title
Section.Subtitle = Subtitle
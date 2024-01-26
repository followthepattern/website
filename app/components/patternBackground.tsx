import classNames from "classnames"

function TopPolygon() {
    return (
        <div
            className="-z-10 absolute inset-x-0 -top-40 transform-gpu overflow-hidden sm:-top-80 blur-2xl"
            aria-hidden="true"
        >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-200 to-indigo-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>
    )
}

function BottomPolygon() {
    return (
        <div
            className="-z-10 absolute inset-x-0 top-[calc(100%-20rem)] transform-gpu overflow-hidden sm:top-[calc(100%-40rem)] blur-2xl"
            aria-hidden="true"
        >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-200 to-indigo-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>
    )
}

interface RectangleProperties {
    patternWidth: number
    patternHeight: number
    className?: string
}

function Rectangles(props: RectangleProperties) {
    return (
        <svg
            className={classNames(props.className, "-z-10 absolute h-full w-full")}
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                    width={props.patternWidth}
                    height={props.patternHeight}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
    )
}

interface PatternBackgroundProperties {
    children?: any
    className?: string
    hideRectangles?: boolean
}

export default function PatternBackground(props: PatternBackgroundProperties) {
    return (
        <div className="inline-block relative h-full w-full">
            <TopPolygon />
            {!props.hideRectangles && <Rectangles patternHeight={95} patternWidth={95} className="-top-44 lg:-top-0 -left-4 stroke-gray-300 md:[mask-image:radial-gradient(80%_50%_at_left,white,transparent)] lg:[mask-image:radial-gradient(40%_60%_at_center,white,transparent)] [mask-image:radial-gradient(80%_80%_at_top_left,white,transparent)]" />}
            <BottomPolygon />
            <div className={classNames(props.className, "")}>
                {props.children}
            </div>
        </div>
    )
}

interface RectangleBackgroundProperties {
    children?: any
    className?: string
}

export function RectangleBackground(props: RectangleBackgroundProperties) {
    return (
        <div className="inline-block relative h-full w-full">
            <Rectangles patternHeight={150} patternWidth={150} className="-top-44 -left-4 stroke-gray-300 [mask-image:radial-gradient(100%_80%_at_center,white,transparent)]"/>
            <div className={classNames(props.className, "")}>
                {props.children}
            </div>
        </div>
    )
}
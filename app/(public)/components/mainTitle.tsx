import classNames from "classnames";
import { motion } from "framer-motion"

interface MainTitleProperties {
    count: number
    className?: string
}

const values = ["modern", "reliable", "robust"];
const clsNames = ["text-blue-500", "text-red-500", "text-yellow-500"];

function getCurrent<T>(array: T[], count: number): T {
    return array[count % 3]
}

export default function MainTitle(props: MainTitleProperties) {
    const value = getCurrent(values, props.count);
    const className = getCurrent(clsNames, props.count);

    return (
        <h1 className={classNames(props.className, "")}>
            <span className="block mr-3">We engineer</span>
            <motion.span
                key={props.count}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={classNames("block mr-3", className)}
            >
                {value}
            </motion.span>
            <span className="block">applications</span>
        </h1>
    )
}
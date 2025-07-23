import classNames from "classnames";
import nc from "../../../img/nc.png"
import Image from "next/image";

interface NCProperites {
    className?: string
}

const NC = (props: NCProperites) => {
    return (
        <Image
            alt="Picture of NC"
            className={classNames("rounded-3xl h-40 w-40 lg:h-36 lg:w-36 xl:h-44 xl:w-44 object-cover", props.className)}
            src={nc}
        ></Image>
    )
}

export default NC;
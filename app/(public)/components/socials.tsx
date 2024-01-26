import Discord from "@/icons/Discord";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import classNames from "classnames";

interface SocialsProperties {
    className?: string
}

export default function Socials(props: SocialsProperties) {
    return (
        <div className={classNames(props.className, "flex space-x-8")}>
            <a href="https://github.com/huszkacs">
                <Github className="w-8 h-8 text-gray-500 hover:text-black transition ease-in-out hover:scale-110 delay-75 duration-150" />
            </a>
            <a href="https://www.linkedin.com/in/hcsaba-godev/">
                <LinkedIn className="w-8 h-8 text-gray-500 hover:text-[#0a66c2] transition ease-in-out hover:scale-110 delay-75 duration-150" />
            </a>
            <a href="https://discord.com/invite/kDuKyG4EET">
                <Discord className="w-8 h-8 text-gray-500 hover:text-[#5865F2] transition ease-in-out hover:scale-110 delay-75 duration-150" />
            </a>
        </div>
    )
}
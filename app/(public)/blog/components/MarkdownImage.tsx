import Image from "next/image";

interface MarkdownImageProps {
    alt: string
    src: string
}

export default function MarkdownImage({ alt = "", src}: MarkdownImageProps) {
    return (<Image
        alt={alt}
        src={src}
        className="justify-self-center py-6 sm:py-6"
    />)
}
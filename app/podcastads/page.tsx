import { HTMLAttributes } from "react";
import classNames from "classnames";
import ContactForm from "../components/Contact";

const Title = (props: HTMLAttributes<HTMLElement>) => {
    return (<h1
        {...props}
        className="text-3xl sm:text-5xl sm:text-left sm:mb-12 xl:text-5xl"
    >
        {props.children}
    </h1>)
}

const Section = (props: HTMLAttributes<HTMLElement>) => {
    return (
        <section className={classNames("mx-auto max-w-5xl px-6 pt-12 sm:pt-24 lg:px-8 lg:pt-32", props.className)}
            id={props.id}
        >
            {props.children}
        </section>
    )
}

const PodcastAdsPage = () => {
    return (
        <div className="text-neutral-800">
            <header className="flex flex-row mx-auto max-w-5xl px-6 pt-2 sm:pt-8 lg:px-8 xl:pt-16"
            >
                <div className="md:basis-1/2">
                    <h1 className="text-left text-5xl font-medium sm:text-6xl xl:text-7xl">
                        <span className="">Podcast</span> hirdetések az <span className="text-blue-600">1,2 milliárd</span> dolláros siker mögött
                    </h1>
                    <p className="pt-6 text-lg">
                        Az <span className="font-medium">Athletic Greens</span> növekedési stratégiájában a podcast hirdetések kiemelkedő szerepet játszottak, hiteles tartalommal és célzott eléréssel megszólítva a vásárlókat.
                    </p>
                    <p className="pt-4 text-lg">
                        Hasonló példák száma folyamatosan növekszik, mivel a hagyományos televíziózás egyre inkább háttérbe szorul a <span className="font-medium text-youtube">Youtube</span> mellett.
                    </p>

                </div>
                <div className="hidden md:block md:basis-1/2">

                </div>
            </header>
            <Section>
                <Title>
                    Hirdess <span className="">Szórakoztató</span> és <span className="">Informatív</span> Tartalommal!
                </Title>
                <p className="pt-4 text-xl">Lineáris TV nézés ideje lejárt!</p>
                <p className="pt-4 font-light">Ez ugyanúgy igaz a rádiózásra is. Az emberek igénye a szórakoztató és informatív tartalmak fogyasztására továbbra is megmaradt, de ezt egyre inkább internetes műsorokon keresztül elégítik ki.</p>
                <p className="pt-2">Az első számú platform erre a <span className="">YouTube</span>.</p>
                <p className="pt-4 text-xl">A <span className="text-youtube font-medium">YouTube</span> hosszú távon a <span className="">Prémium</span> előfizetőket helyezi előtérbe.</p>
                <p className="pt-4 font-light">Prémium előfizetők száma évente 1,2 millióval növekszik, ezzel a hagyományos YouTube hirdetések egyre inkább háttérbe szorulnak.</p>
                <p className="pt-2">Ők nem fognak reklámokat nézni!</p>
                <p className="pt-4 text-xl">Erre kínál megoldást a Follow The Pattern Podcast</p>
                <p className="pt-2 font-light">Tudományos és ismeretterjesztő internetes műsor, amely hatékonyan elérheti ezt a hirdetésekre immunis közönséget.</p>
                <ul className="pt-6">
                    <li>
                        <p className="font-medium">Különböző témákban hívunk, meg szakértőket</p>
                        <p className="">Ezért az elérésünk széleskörű az országban</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Több, mint 18 epizódot töltöttünk fel</p>
                        <p>Hosszú távra tervezünk</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Több platformon is elérhetőek vagyunk</p>
                        <p>Youtube, Spotify, Facebook, Instagram, TikTok ezzel szintén több embercsoportot tudunk elérni</p>
                    </li>
                </ul>
            </Section>
            <Section>
                <Title>
                    Hirdetési lehetőségek
                </Title>
                <ul className="pt-6">
                    <li>
                        <p className="font-medium">Külön álló egy perces videó Youtube és TikTok csatornán</p>
                        <p>Leírás</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Külön álló 10 - 15 perces videó Youtube csatornán</p>
                        <p>Leírás</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Podast epizódba integrálás</p>
                        <p>Leírás</p>
                    </li>
                </ul>
            </Section>
            <Section>
                <Title>
                    Miért a Follow The Pattern Podcast?
                </Title>
                <ul className="pt-6">
                    <li>
                        <p className="font-medium">Egyik leggyorsabban feljődő Magyar tudományos műsor!</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">2024-ben, több mint 600.000 ezer embert értünk el, csak Youtube-on</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Nézőink, több mint 95%-a 25 életkor feletti, azaz felnőttkori saját megélhetéssel rendelkezik</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Több platformon is elérhetőek vagyunk</p>
                    </li>
                    <li className="pt-4">
                        <p className="font-medium">Segítünk analitika integrációjában</p>
                    </li>
                </ul>
            </Section>
            <Section>
                <Title>
                    Follow The Pattern Podcast ajánlások
                </Title>
                <p>Kovács Martin Coach: minden egyes új epizóddal szignifikánsan növekszik az előfizetőim száma.</p>
            </Section>
            <Section id="contact">
                <ContactForm hun={true} defaultMessage={
                    `Kedves Follow The Pattern!

Szeretnék ajánlatot kérni a podcast-ben való hirdetéshez!`
                } />
            </Section>
        </div>
    );
};

export default PodcastAdsPage;

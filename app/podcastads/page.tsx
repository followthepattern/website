import classNames from "classnames";
import ContactForm from "../components/Contact";
import Section from "../components/section";

const PodcastAdsPage = () => {
    return (
        <>
            <header className={classNames("mx-auto max-w-7xl px-6 pb-8 sm:pt-8 xl:pt-16")}
            >
                <h1 className="text-left text-neutral-800 text-5xl font-medium pb-4 sm:text-6xl sm:text-center sm:mb-12 xl:text-7xl">
                    Érd el a vásárlóidat hatékonyan!
                </h1>
                <h2 className="text-2xl">
                    A Youtube Prémium előfizetők száma évente 1.2 M felhasználóval növekszik!
                    Ők nem néznek youtube reklámokat!
                </h2>
            </header>
            <Section>
                <Section.Title>
                    Hirdess Szórakoztató és Informatív tartalommal
                </Section.Title>
                <p>Youtube hosszú távon a prémium előfizetőket támogatja, ezzel a hagyományos hirdetések háttérbe fognak szorulni.</p>
                <p>Lineáris TV nézés ideje lejárt, viszont az embereknek ugyanúgy van igénye szórkoztató és informatiív tartalom nézésére.</p>
            </Section>
            <Section>
                <Section.Title>
                    Hirdetési lehetőségek
                </Section.Title>
                <p>Külön álló short videó Youtube és TikTok csatornán</p>
                <p>Külön álló rövid videó Youtube csatornán</p>
                <p>Podast epizódba integrálás</p>
            </Section>
            <Section>
                <Section.Title>
                    Miért a Follow The Pattern Podcast?
                </Section.Title>
                <p>Egyik leggyorsabban feljődő Magyar tudományos műsor!</p>
                <p>2024-ben, több mint 600.000 ezer embert értünk el, csak Youtube-on.</p>
                <p>Nézőink, több mint 95%-a 25 életkor feletti, azaz felnőttkori saját megélhetéssel rendelkezik.</p>
                <p>Több platformon is elérhető.</p>
            </Section>
            <Section id="contact">
                <ContactForm hun={true} defaultMessage={
                    `Kedves Follow The Pattern!

Szeretnék ajánlatot kérni a podcast-ben való hirdetéshez!`
                } />
            </Section>
        </>
    );
};

export default PodcastAdsPage;

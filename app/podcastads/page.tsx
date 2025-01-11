import classNames from "classnames";
import ContactForm from "../components/Contact";
import Section from "../components/section";

const PodcastAdsPage = () => {
    return (
        <>
            <header className={classNames("mx-auto max-w-7xl px-6 pb-8 sm:pt-8 xl:pt-16")}
            >
                <h1 className="text-left text-5xl font-medium pb-4 sm:text-6xl sm:text-center sm:mb-12 xl:text-7xl">
                    Érd el a vásárlóidat hatékonyan!
                </h1>
                <h2 className="text-2xl">
                    A Youtube Prémium előfizetők száma évente 1.2 M felhasználóval növekszik!
                    Ők nem néznek youtube reklámokat!
                </h2>
            </header>
            <Section>
                <Section.Title>
                    Hirdess a Follow The Pattern Podcasten keresztül
                </Section.Title>
                - Youtube hosszú távon a prémium előfizetőket támogatja, ezzel a hagyományos fizetett
            </Section>
            <Section id="contact">
                <ContactForm hun={true} defaultMessage={
                    `Kedves Follow The Pattern!

Szeretnék ajánlatot kérni a hirdetéshez!`
                } />
            </Section>
        </>
    );
};

export default PodcastAdsPage;

import Section from "@/app/components/section";
import PricingBox from "../../components/PricingBox";
import Timeline from "../../components/Timeline";
import ContactForm from "@/app/(public)/contact/components/Contact";
import Link from "next/link";
import { RectangleBackground } from "@/app/components/patternBackground";
import Footer from "@/app/components/footer";

const GoAdvanced = () => {
    return (
        <>
            <header className="mx-auto max-w-5xl lg:max-w-6xl sm:flex">
                <RectangleBackground className="lg:flex">
                    <div className="space-y-8">
                        <h1 className="font-medium text-center pt-10 text-6xl sm:text-6xl md:text-7xl 2xl:text-8xl">
                            Legyél a <span className="text-blue-500">Generics</span>{" "} <span className="whitespace-nowrap">és a</span>{" "}
                            <span className="text-blue-500">Concurrency</span> mestere
                        </h1>
                        <p className="mx-10 md:max-w-2xl md:mx-auto text-lg font-light">
                            Jelentkezz az öt hetes online kurzusra, ahol elsajátíthatod a Go programozási nyelv haladó eszköztárát gyakorlatias példákon keresztül.
                            A képzés munka mellett is végezhető.
                        </p>
                        <div className="flex justify-center">
                            <Link href="#pricing" className="rounded-lg w-32 text-center bg-blue-600 px-3 py-3 font-semibold text-white hover:bg-blue-700 focus:bg-blue-900">
                                Érdekel
                            </Link>
                        </div>
                    </div>
                </RectangleBackground>
            </header>
            <Section id="details" className="sm:px-20 px-4 mx-auto lg:max-w-5xl sm:max-w-4xl">
                <Section.Title className="title">Go Advanced kurzus</Section.Title>
                <p className="font-light pb-10">
                    A képzés elvégzése során megismered, hogy hogyan működik a generikus programozás más néven <span className="font-medium text-blue-900">generics a Go programozási nyelvben.</span>
                    Emellett elsajátíthatod a <span className="font-medium text-blue-900">concurrency megvalósítását</span> az ahhoz tartozó nyelvi elemekkel és tervezési mintákkal együtt, ami az egyik,
                    vagy talán a legfontosabb tulajdonsága a népszerű programnyelvnek.
                </p>
                <p className="font-light pb-10">
                    Emellett szó lesz <span className="font-medium text-blue-900">REST API fejlesztésről és autentikációról</span> a két legnépszerűbb témáról,
                    amelyekkel biztosan találkozni fogsz a legtöbb projekten, amin dolgozni fogsz!
                    Amennyiben nem vagy elégedett a kurzussal, semmi gond a kurzus elvégzéséig <span className="font-medium text-blue-900"> teljes ár visszatérítési garanciát vállalunk.</span>
                </p>
                <Timeline>
                    <Timeline.Item
                        id={1}
                        title="Generics"
                        subtitle="Generics implementációja Go-ban"
                    >
                        <p>mi az a generikus programozás?</p>
                        <p>go generics nyelvi elemeinek bemutatása</p>
                        <p>generics vs <code className="text-blue-500">interface{"{}"}</code></p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={2}
                        title="Concurrency"
                        subtitle="Concurrency megvalósítása Go-ban"
                    >
                        <p>concurrency nyelvi elemek: {"("}goroutine, channel, select és társai{")"}</p>
                        <p>sync könyvtár</p>
                        <p>go race detector</p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={3}
                        title="Concurrency design patterns"
                        subtitle="Népszerű concurrency tervezési minták bemutatása"
                    >
                        <p>generator pattern</p>
                        <p>fan-in</p>
                        <p>fan-out</p>
                        <p>pipeline</p>
                        <p>restore sequence</p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={4}
                        title="REST API"
                        subtitle="REST API fejlesztése és tesztelése Golangben egy webszervíznek gyorsan és hatékonyan"
                    >
                        <p>kapcsolódó modulok bemutatása</p>
                        <p>vázlat készítés közösen</p>
                        <p>tesztelés</p>
                    </Timeline.Item>
                    <Timeline.Item
                        id={5}
                        title="Authentikáció"
                        subtitle="Authentikációhoz megvalósítása egy Go webszervízben"
                    >
                        <p>kapcsolódó modulok bemutatása</p>
                        <p>vázlat készítés közösen</p>
                        <p>tesztelés</p>
                    </Timeline.Item>
                </Timeline>
                <p className="font-light text-sm pb-10">
                    Képzésre való jelentkezés előfeltétele a Go Basic kurzus elvégzése, vagy Golangben egy alapszintű jártasság.
                    Tananyag feltételez egy alap Go programozásinyelv ismeretet.
                </p>
                <p className="font-light text-sm pb-10">
                    Kurzus során heti 1 alkalommal van 2 órás online előadás videóhíváson keresztül.
                    Ehhez tartozik órai munka és önállóan elvégzendő feladatok is,
                    amelyeket az egész modulon keresztül futó projektfeladat keretein belül kell implementálni.
                    Valamennyi előadás felvételre kerül, amely elérhető a diákoknak az órák után.
                </p>
                <div className="flex justify-center pt-8 font-light">
                    <PricingBox
                        title="Go Advanced"
                        subtitle="Sajátítsd el a Go nyelvet gyorsan és hatékonyan!"
                        className="border-blue-500"
                        headerClassname="bg-blue-500"
                        id="pricing"
                    >
                        <div className="px-2 py-12 bg-blue-500 rounded-t-md">
                            <PricingBox.Title>Go Advanced</PricingBox.Title>
                            <PricingBox.Subtitle>Sajátítsd el a Go programozási nyelvet gyorsan és hatékonyan</PricingBox.Subtitle>
                        </div>
                        <PricingBox.Content className="pl-6 pr-4 py-8">
                            <PricingBox.Feature>
                                Go Advanced kurzus tananyag
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Hozzáférés az online learning platformhoz
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Öt héten keresztül két órás online előadás
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Előadás anyagai később felvételről elérhető
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Mentorálás a képzés alatt
                            </PricingBox.Feature>
                            <PricingBox.Feature>
                                Ár visszatérítési garancia
                            </PricingBox.Feature>
                        </PricingBox.Content>
                    </PricingBox>
                </div>
            </Section>
            <Section id="contact" className="pb-8">
                <Section.Title className="title">Jelentkezz a következő Golang képzésre!</Section.Title>
                <ContactForm
                    defaultMessage={`Kedves Follow The Pattern!
        
Szeretnék jelentkezni a hamarosan induló Go Advanced képzésre!`}
                />
            </Section>
            <Footer />
        </>
    );
};

export default GoAdvanced;

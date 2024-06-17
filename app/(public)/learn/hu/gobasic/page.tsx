
import ContactForm from "@/app/(public)/contact/components/Contact";
import PricingBox from "../../components/PricingBox";
import Timeline from "../../components/Timeline";
import Link from "next/link";
import Section from "@/app/components/section";
import { RectangleBackground } from "@/app/components/patternBackground";
import Footer from "@/app/components/footer";

export default function GoBasic() {
  return (
    <>
      <header className="mx-auto max-w-5xl lg:max-w-6xl sm:flex">
        <RectangleBackground className="lg:flex">
          <div className="space-y-8">
            <h1 className="font-medium text-center pt-10 text-6xl sm:text-6xl md:text-7xl md:mx-2 2xl:text-8xl">
              Tanulj meg <span className="text-blue-500">Golang</span>ben{" "}
              <span className="text-blue-500 break-normal">webszervízt</span> fejleszteni
            </h1>
            <p className="mx-10 md:max-w-2xl md:mx-auto text-lg font-light">
              Jelentkezz az öt hetes online kurzusra, ahol elsajátíthatod a Go programozási nyelvet gyakorlatias példákon keresztül.
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
        <Section.Title className="title">Go Basic kurzus</Section.Title>
        <p className="font-light mb-10">
          A képzés elvégzése során megismered a Go programozási nyelvet és
          <span className="font-medium text-blue-900"> képes leszel Golangben alkalmazásokat és webszervízeket fejleszteni átlátható, tesztelhető struktúrával</span>.
        </p>
        <p className="font-light mb-10">
          Megtanulod, hogy hogyan kell a kódodat tesztelni és
          ahhoz milyen könyvtárakat érdemes használnod! Teljes kurzus alatt <span className="font-medium text-blue-900">mentorálást biztosítunk. </span>
          Amennyiben nem vagy elégedett a kurzussal, semmi gond a kurzus elvégzéséig <span className="font-medium text-blue-900"> teljes ár visszatérítési garanciát vállalunk.</span>
        </p>
        <Timeline>
          <Timeline.Item
            id={1}
            title="Intro"
            subtitle="Ismerkedés a képzés során használt eszközökkel"
          >
            <p>online learning platform bemutatása</p>
            <p>egyszerű go program felépítése</p>
            <p>go tools parancsok fejlesztéshez</p>
          </Timeline.Item>
          <Timeline.Item
            id={2}
            title="Nyelvi alapok I."
            subtitle="Alapvető nyelvi elemek"
          >
            <p>alap típusok</p>
            <p>függvények</p>
            <p>conditionals</p>
            <p>loops</p>
          </Timeline.Item>
          <Timeline.Item
            id={3}
            title="Nyelvi alapok II."
            subtitle="Alapvető nyelvi elemek"
          >
            <p>összetett típusok</p>
            <p>öröklés helyett embedding</p>
          </Timeline.Item>
          <Timeline.Item
            id={4}
            title="Hasznos modulok"
            subtitle="Egyik legfontosabb és legnépszerűbb modulok bemutatása"
          >
            <p>standard libraries</p>
            <p>third party libraries</p>
          </Timeline.Item>
          <Timeline.Item
            id={5}
            title="Tesztelés"
            subtitle="Legfontosabb eszközök a teszteléshez"
          >
            <p>tesztek írása Go programozási nyelvben</p>
            <p className="mt-1">teszteléshez szükséges go tools parancsok használata</p>
          </Timeline.Item>
        </Timeline>
        <p className="font-light text-sm pb-10">
          Képzésre való jelentkezés előfeltétele legalább egy programozási nyelv ismerete és
          szoftverfejlesztésben szerzett tapasztalat. Tananyag feltételez alap szoftverfejlesztési ismereteket.
        </p>
        <p className="font-light text-sm pb-10">
          Kurzus során heti 1 alkalommal van 2 órás online előadás videóhíváson keresztül.
          Ehhez tartozik órai munka és önállóan elvégzendő feladatok is,
          amelyeket az egész modulon keresztül futó projektfeladat keretein belül kell implementálni.
          Valamennyi előadás felvételre kerül, amely elérhető a diákoknak az órák után.
        </p>
        <div className="flex justify-center pt-8 font-light">
          <PricingBox
            title="Go Basic"
            subtitle="Sajátítsd el a Go nyelvet gyorsan és hatékonyan!"
            className="border-blue-500"
            id="pricing"
          >
            <div className="px-2 py-12 bg-blue-500 rounded-t-md">
              <PricingBox.Title>Go Basic</PricingBox.Title>
              <PricingBox.Subtitle>Sajátítsd el a Go programozási nyelvet gyorsan és hatékonyan</PricingBox.Subtitle>
            </div>
            <PricingBox.Content className="pl-6 pr-4 py-8">
              <PricingBox.Feature>
                Go Basic kurzus tananyag
              </PricingBox.Feature>
              <PricingBox.Feature>
                Hozzáférés az online kód platformhoz
              </PricingBox.Feature>
              <PricingBox.Feature>
                Öt héten keresztül két órás online élő előadás
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
            <PricingBox.Content className="border-t border-blue-500 py-6 text-center font-medium text-blue-900">
              <p>Br 150 000 Ft</p>
            </PricingBox.Content>
          </PricingBox>
        </div>
      </Section>
      <Section id="contact" className="pb-8">
        <Section.Title className="">Jelentkezz a következő Golang képzésre!</Section.Title>
        <ContactForm
          defaultMessage={`Kedves Follow The Pattern!
        
Szeretnék jelentkezni a hamarosan induló Go Basic képzésre!`}
        />
      </Section>
      <Footer />
    </>
  );
};
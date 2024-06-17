interface InteractivePlatformProperties {
  className?: string;
}

const InteractivePlatform = (props: InteractivePlatformProperties) => {
  return (
    <div className={props.className}>
      <p className="font-medium pb-4 underline decoration-blue-600 decoration-2 underline-offset-2">
        Mi az az interaktív oktatás?
      </p>
      <p className="pb-text-long">
        Interaktív oktatás, mint kifejezés arra utal, hogy a kommunikáció nem
        egyirányú. Legyen szó előadásról vagy egyéni konzultációról. Folyamatos
        figyelem fenntartása miatt is fontos, hogy ne csak az oktató beszéljen, hanem a
        diákok is hozzá tudjanak adni az órákhoz saját ötleteikkel.
      </p>
      <p className="font-medium pb-4 underline decoration-blue-600 decoration-2 underline-offset-2">
        Mi az az online learning platform?
      </p>
      <p className="pb-text-long">
        Oktatás hatékonysága, minőségének növelése és a tanulási élmény javítása
        érdekében biztosítunk a kurzushoz egy felhőben futó fejlesztői környezetet.
        Lényegében ez egy{" "}
        <span className="italic px-1">
          böngészőben futó Visual Studio Code
        </span>{" "}
        példány. Továbbá <a className="fp-link" href="https://wiki.followthepattern.net" rel="noreferrer" target="_blank">Online Tudásanyagot</a>,
        leírásokkal és rengeteg példával. Ide tartoznak még az előkészített gyakorlásra használt szervizek is <span className="italic">(online adatbázis, REST API, stb…)</span>.
      </p>
      <p className="font-medium pb-4 underline decoration-blue-600 decoration-2 underline-offset-2">
        Miért jobb ez a megközelítés?
      </p>
      <p className="pb-text-long">
        Online kurzushoz nem elég csak egy videohívás és képernyőmegosztás,
        szükség van kiegészítő eszközökre. Nem kell új számítógépet venned, nem
        kell semmit sem telepítened, csak egy böngésző kell hozzá. Környezethez
        kapcsolódó operatív feladatokat elvégezzük mi. Laptopról, tabletről, de
        akár telefonról is használhatod az előre konfigurált felület. Megnyitod
        és már tudsz is kódolni.
      </p>
    </div>
  );
};

export default InteractivePlatform;

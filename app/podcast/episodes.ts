export interface EpisodeProperty {
    id: string
    guest?: string
    lang?: string
    title: string
    playing: boolean
    description: string
    published: string
    audio: {
        src: string
        type: string
    }
}

export const episodes: EpisodeProperty[] = [{
    id: "1",
    title: "Pipettától a billentyűzetig",
    guest: "Barna Gábor",
    lang: "HUN",
    playing: false,
    description: "Barna Gáborral, Scrum master és DevOps mérnökkel beszélgetek több mint egy évtizedes informatikai pályafutásáról, az első pozíciójától egészen jelenlegiig. Megbeszéljük, milyen képességeket és tulajdonságokat keres interjúk során junior fejlesztőkben, nők helyzetéről az IT területeken, a chatGPT IT-iparra gyakorolt hatásáról és még sok másról.",
    published: "May 1, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast1.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "2",
    title: "Nyelvtudás nélkül kezdte pályáját Londonban",
    guest: "Fábián Ferenc",
    lang: "HUN",
    playing: false,
    description: "Fábián Ferenccel beszélgetek, Senior szoftver fejlesztővel és az Infinite Loop társalapítójával, aki hihetetlen izgalmas életúttal és karrierrel rendelkezik. Megtudhatjuk, hogyan kezdte a pályáját, és milyen izgalmas tapasztalatokat szerzett a Golang szoftverfejlesztés terén, valamint hogy hogyan szoktak általában interjúztatni és milyen készségeket, tapasztalatokat keresnek az interjúztatók.",
    published: "June 5, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast2.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "3",
    title: "Open Source Tech Lead és CNCF Nagykövet",
    guest: "Sági-Kazár Márk",
    lang: "HUN",
    playing: false,
    description: "Vendégem Sági-Kazár Márk lesz, aki Open Source Tech Lead pozíciót tölt be a Cisco-nál, valamint CNCF Nagykövet is. Beszélgetni fogunk arról, hogy ezek a pozíciók pontosan mit jelentenek, és milyen felelősségekkel járnak. Továbbá Márk megosztja velünk karrierjének főbb állomásait, tapasztalatait és szó lesz aktuális IT trendekről is.",
    published: "August 10, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast3.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "4",
    title: "Cégalapítás nyílt forráskódú termékkel",
    guest: "Orbán Levente",
    lang: "HUN",
    playing: false,
    description: "Ebben a részben vendégem Orbán Levente, dyrector.io társalapítója. Dyrector.io egy nyílt forráskódú termék, ami azt jelenti, hogy szabadon használható, másolható és terjeszthető. Beszélgetés során kiderül, hogy hogyan lehet egy ingyenes termékkel egy egész céget felépíteni és ez milyen kihívásokkal jár.",
    published: "September 14, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast4.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "5",
    title: "Diploma nálunk nem egy működési engedély",
    guest: "Tok Dániel",
    lang: "HUN",
    playing: false,
    description: "Ebben a részben vendégem Tok Dániel blockchain fejlesztő. Epizód során szó lesz blockchain technológiáról, annak előnyeiről és felhasználási lehetőségeiről. Beszélni fogunk karrierjéről, saját tapasztalatairól és érinteni fogjuk az iparágban elérhető fizetéseket is. Ne hagyd ki ezt a remek epizódot!",
    published: "October 6, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast5.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "6",
    title: "Emberiség története = háborúk története",
    guest: "Tóth Dominik",
    lang: "HUN",
    playing: false,
    description: "Ebben az epizódban Dr. Tóth Dominik Hadtörténeti Intézet munkatársával beszélgetünk háborúzás emberiség történetében betöltött szerepéről, történetéről és annak fejlődéséről. Szó lesz arról is, hogy hogyan változtatja meg a közösségi média a háborút körbevevő kommunikációt.",
    published: "November 24, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast6.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "7",
    title: "Build Robust without Cloud Providers ",
    guest: "László Fogas",
    lang: "ENG",
    playing: false,
    description: "In this episode, I have invited Laszlo Fogas to discuss the trend of moving away from cloud-based solutions. We dive into his exceptional experiences and career. Laszlo shares his incredible journey, transitioning from employment to freelancing and then to building his own product and company. He shares the story behind creating gimlet.io, an extremely useful product that helps companies integrate Kubernetes. It's another great episode for the Follow The Pattern podcast.",
    published: "December 27, 2023",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast7.mp3",
        type: "audio/mpeg"
    }
},{
    id: "8",
    title: "A Föld keletkezésének magyarázata elemi részecskékkel",
    guest: "Dr. Völgyesi Lajos",
    lang: "HUN",
    playing: false,
    description: `A Föld egy lehetséges keletkezésének elméletéről beszélgettem Dr. Völgyesi Lajos geofizikussal, aki egyben az ELTE Természettudományi doktora, a BME habilitált doktora és a Magyar Tudományos Akadémia levelező tagja.

    Egy olyan megközelítést oszt meg velünk a vendégem, amit szerintem nagyon kevesen ismernek még.
    
    Ez egy inkább tudományos témájú epizód, viszont vendégemmel törekedtünk arra, hogy minél szélesebb körben érthető legyen.
    `,
    published: "Februray 23, 2024",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast8.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "9",
    title: "I was really intrigued to TRY something on my OWN",
    guest: "Vilté Székely",
    lang: "HUN",
    playing: false,
    description: `Vilté Székely is an HR technology expert and the Co-founder of Nordconn Sweden. She shares her incredible journey of moving from Hungary to Sweden and the challenges and successes of starting and building a new company, extending her successful career of over a decade.`,
    published: "March 20, 2024",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast9.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "10",
    title: "“Lots of our customers AI focused companies”",
    guest: "Márk Sági-Kazár",
    lang: "ENG",
    playing: false,
    description: `Márk Sági-Kazár is a CNCF Ambassador and works as the Head of OSS at OpenMeter. We'll discuss what OpenMeter is and how it provides solution for AI startups to meter their usage and turn it into billing!`,
    published: "April 26, 2024",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast10.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "11",
    title: "They keep Reshaping the IT Industry",
    guest: "Sam Alba",
    lang: "ENG",
    playing: false,
    description: `I talk with Sam Alba, who co-founded Docker and is now a co-founder of Dagger. Dagger is a new CI/CD engine that changes complicated pipelines, often made of shell scripts and YAML files, into simple, easy-to-use code.

Listen in to discover how Dagger aims to set new standards in the industry and learn about the team’s amazing journey in changing cloud computing.
`,
    published: "Jun 1, 2024",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast11.mp3",
        type: "audio/mpeg"
    }
}, {
    id: "12",
    title: "Csak egy egészséges testből lehet kihozni a legtöbbet",
    guest: "Kovács Martin",
    lang: "HUN",
    playing: false,
    description: `Kovács Martin hazánkban az egyik legeredményesebb felkészítő edző. Több magas szintű testépítő versenyfelkészülését is ő koordinálja. Egyik IFBB Pro versenyzője, Nagy Richárd, kvalifikált a Mr Olympiára. Ebben az epizódban megismerjük Kovács Martint és az ő megközelítését a testépítéshez. Nagy Richárd felkészüléséről is beszélünk, és arról, miért volt ilyen sikeres. Továbbá teljesítmény fokozók használatáról is fogunk beszélni, mind versenysportban, mind azon kívül is.`,
    published: "Jun 20, 2024",
    audio: {
        src: "https://followthepattern.s3.us-east-2.amazonaws.com/episodes/podcast12.mp3",
        type: "audio/mpeg"
    }
}]
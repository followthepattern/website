import classNames from "classnames";
import { CsabaDevYoutubeLink, PodcastYoutubeLink } from "@/lib/constants";
import Youtube from "@/icons/Youtube";
import Profile from "../(public)/components/profile";
import Link from "next/link";
import Github from "@/icons/Github";

const sectionHeader = "mt-10 mb-8 text-2xl font-bold text-gray-900 sm:text-4xl"

const CV = () => {
    const techStack = ["Go", "React", "TypeScript", "JavaScript", "AWS", "Azure", "Docker", "PostgresSQL", "Kafka", "Redis", "Linux", "LLM", "Ollama", "OpenAI", "Claude"]
    const learningStack = ["Rust", "Embedded Linux", "Robotics fundamentals", "Real-time systems"]

    return (
        <div className="max-w-4xl px-4 mx-auto text-gray-900 sm:px-6 lg:px-8 ">
            <header className="flex mt-10 flex-col space-y-10 sm:space-y-14">
                <h1 className="text-4xl font-bold text-center sm:text-6xl">
                    Csaba Zsolt Huszka
                </h1>
                <div className="flex justify-center">
                    <Profile className="w-40 h-40 rounded-full sm:rounded-[8px]" />
                </div>
                <div className="mx-auto font-light text-lg max-w-2xl space-y-2">
                    <p>
                        Senior software engineer with 10+ years building distributed, concurrent, Linux-based
                        backend systems — now actively pivoting toward robotics and hardware-close engineering.
                    </p>
                    <p>
                        Currently learning Rust as a path into embedded and robotics systems, building on a
                        Geoinformatics background (spatial data, geometry, sensor-derived signals) and a career
                        spent on real-time data pipelines, concurrency and Linux.
                    </p>
                    <p>
                        Founder of FollowThePattern, collaborating with CTOs and engineering teams to ship
                        products that have to be reliable, fast and grounded in reality.
                    </p>
                </div>
                <div className="mx-auto font-light max-w-2xl cursor-default">
                    <p className="font-bold text-sm text-gray-900/80 mb-2">current tech stack</p>
                    <div>
                        {techStack.map(t => (
                            <span key={t} className="inline-block bg-blue-100 px-2 py-0.5 m-1 border border-neutral-900 rounded-xl text-md font-bold text-neutral-900/80">
                                {t}
                            </span>
                        ))}
                    </div>
                    <p className="font-bold text-sm text-gray-900/80 mb-2 mt-4">currently learning — toward robotics & hardware</p>
                    <div>
                        {learningStack.map(t => (
                            <span key={t} className="inline-block bg-amber-100 px-2 py-0.5 m-1 border border-neutral-900 border-dashed rounded-xl text-md font-bold text-neutral-900/80">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </header>
            <DirectionSection />
            <BuiltCourses />
            <KnowledgeSharingSection />
            <ExperienceSection />
            <EducationSection />
            <section>
                <h1 className={sectionHeader}>Languages</h1>
                <div>English - Professional working proficiency</div>
                <div>Spanish - Basic proficiency</div>
                <div>Hungarian - Native speaker</div>
            </section>
            <section className="mb-10">
                <h1 className={sectionHeader}>Hobbies</h1>
                <div>Crossfit: When the body thrives, the mind follows</div>
                <div>Brazilian jiu-jitsu: The Game of Human Chess</div>
            </section>
        </div>
    )
}

const DirectionSection = () => {
    const listStyle = "list-disc list-inside font-light";

    return (
        <section>
            <h1 className={sectionHeader}>Direction — Robotics & Hardware-Close Systems</h1>
            <div className="mx-auto max-w-2xl space-y-4 font-light">
                <p>
                    I am openly transitioning toward robotics, embedded and hardware-close engineering.
                    I do not have production hardware experience yet — I have a strong systems-software
                    foundation and I am committed to closing the gap.
                </p>
                <div>
                    <p className="font-medium text-gray-900">What transfers from my background</p>
                    <ul className={listStyle}>
                        <li>Geoinformatics BSc (BME): coordinate systems, geometry, spatial data and sensor-derived datasets — the same primitives that underpin perception, SLAM and mapping</li>
                        <li>10+ years of Linux and concurrency-heavy backend work, including Go-based Kafka messaging tuned for low latency and high throughput</li>
                        <li>End-to-end test automation experience that maps naturally to hardware-in-the-loop and simulation testing</li>
                        <li>DevOps and CI/CD experience relevant to robotics fleet tooling, OTA updates and reproducible builds</li>
                    </ul>
                </div>
                <div>
                    <p className="font-medium text-gray-900">What I am actively learning</p>
                    <ul className={listStyle}>
                        <li>Rust — chosen as my primary path into embedded and robotics systems</li>
                        <li>Embedded Linux fundamentals and resource-constrained programming</li>
                        <li>Real-time systems thinking: scheduling, deterministic latency, sensor fusion</li>
                        <li>Robotics fundamentals: kinematics, control loops, and the surrounding software stack</li>
                    </ul>
                </div>
                <p>
                    I am looking for teams that value strong software engineering fundamentals and are
                    willing to grow an engineer into the hardware side. I learn fast, I share what I
                    learn publicly, and I am excited to do that in this domain.
                </p>
            </div>
        </section>
    )
}

const BuiltCourses = () => {
    const description = "col-span-12 sm:col-span-9 sm:col-start-4";
    const companyName = "uppercase text-xl sm:text-2xl col-span-12 font-medium border-b-2 pt-4";

    return (
        <section>
            <h1 className={sectionHeader}>Built Online Courses</h1>
            <div className="mx-auto max-w-2xl">
                <div className={companyName}>L-A-B-A</div>
                <div className={description}>
                    Partnered with L-A-B-A, a leading online education platform, which
                    onboarded my FP Go Online Course—a recognition of the course’s quality and
                    relevance for senior developers.
                </div>
                <div className={companyName}>FP Go Online Course</div>
                <div className={description}>
                    Designed and built a comprehensive Go course that enables
                    senior developers to gain production-level skills and advance
                    their careers through practical, hands-on learning.
                </div>
            </div>
        </section>
    )
}

const KnowledgeSharingSection = () => {
    return (
        <section>
            <h1 className={sectionHeader}>
                Knowledge Sharing
            </h1>
            <div className="mx-auto flex flex-col space-y-4 max-w-2xl">
                <div className="">
                    <Link className="flex space-x-4" href={CsabaDevYoutubeLink} target="_blank" rel="noreferrer">
                        <Youtube className="w-10 h-10 fill-[#f00]" />
                        <div className="my-auto font-medium">@CsabaDev</div>
                    </Link>
                    <div className="font-light">
                        I recently launched a new channel focused on building AI-native applications
                    </div>
                </div>
                <div className="">
                    <Link className="flex space-x-4" href={PodcastYoutubeLink} target="_blank" rel="noreferrer">
                        <Youtube className="w-10 h-10 fill-[#f00]" />
                        <div className="my-auto font-medium">@FollowThePattern Podcast</div>
                    </Link>
                    <div className="font-light">
                        A show exploring IT, business, and science topics, with over 600K+ views across platforms
                    </div>
                </div>
                <div className="">
                    <Link className="flex space-x-4" href={"https://github.com/huszkacs"} target="_blank" rel="noreferrer">
                        <Github className="w-10 h-10 fill-black" />
                        <div className="my-auto font-medium">@HuszkaCs</div>
                    </Link>
                    <div className="font-light">
                        Actively contribute to open-source by publishing code on GitHub and sharing practical solutions
                    </div>
                </div>
            </div>
        </section>
    )
}

const ExperienceSection = () => {
    const dateColumn = "hidden sm:block sm:col-span-3 lg:col-span-3 text-sm text-gray-700";
    const dateColumnMobile = "sm:hidden col-span-12 text-sm text-gray-700";
    const secondColumn = "col-span-12 sm:col-span-9 sm:col-start-4";
    const titleColumn = "col-span-8 sm:col-span-9 lg:col-span-8 font-medium text-gray-800 text-lg sm:text-xl";
    const companyName = "uppercase text-xl sm:text-2xl col-span-12 font-medium border-b-2";

    const experienceTable = "grid grid-cols-12 gap-4 mt-10";

    const subSectionTitle = classNames(secondColumn, "font-medium");

    const technologies = classNames(secondColumn, "text-gray-700 italic");

    const listStyle = "list-disc list-inside font-light"

    return (
        <section>
            <h1 className={sectionHeader}>Experience</h1>
            <div className={experienceTable}>
                <div className={companyName}>Follow The Pattern</div>
                <div className={dateColumn}>May 2022 – Present</div>
                <div className={titleColumn}>Founder</div>
                <div className={dateColumnMobile}>May 2022 – Present</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Consulted companies of various sizes in designing and implementing products and workflows to enhance their outcomes</li>
                        <li>Built an online course that enabled senior developers to learn Go and advance their careers through practical, production-level training</li>
                        <li>Reached over 600,000 views on YouTube through coding tutorials and podcast episodes focused on software engineering, business and AI</li>
                        <li>Built strv.ai, an AI-native fitness platform using Go and React TypeScript, serving mobile application clients</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Collaborate with companies to design and implement features and workflows that enhance business outcomes</li>
                        <li>Design and develop AI-native applications that empower organizations to significantly increase productivity</li>
                        <li>Design and develop strv.ai, a full-stack AI-native fitness platform with Go backend and React TypeScript frontend, including mobile application clients</li>
                        <li>Create and manage online coding courses, primarily focused on Go programming</li>
                        <li>Educate and share technical knowledge through a podcast and YouTube channel, reaching a combined audience of over 600,000 views</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>GoLang, TypeScript, React, Ollama, LLM, OpenAI</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>Nu Education</div>
                <div className={dateColumn}>Present</div>
                <div className={titleColumn}>Senior Go Software Engineer</div>
                <div className={dateColumnMobile}>Present</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Building an AI-native education platform from scratch using Go</li>
                        <li>Tech leading the development team and driving architectural decisions</li>
                        <li>Teaching non-Go engineers to write Go code efficiently</li>
                        <li>Building and managing deployment infrastructure for the education platform</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>GoLang, LLM, Postgres, Cerbos, Keycloak, Scaleway</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>BlackRock</div>
                <div className={dateColumn}>May 2022 – Present</div>
                <div className={titleColumn}>Senior GoLang developer</div>
                <div className={dateColumnMobile}>May 2022 – Present</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Led the design and implementation of end-to-end test automation, enabling the team to achieve 20× faster testing cycles</li>
                        <li>Optimized cross-service communication by tuning Go-based Kafka messaging for lower latency and higher throughput across a concurrent, distributed pipeline</li>
                        <li>Extended the product’s query language with new features, significantly accelerating output calculations through deep business and technical insight</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Implement new features for Go web services, applying clean architecture and concurrency design principles</li>
                        <li>Design and maintain end-to-end automated test cases to ensure consistent product quality and enable faster delivery</li>
                        <li>Lead by example in design meetings, pair programming sessions, and documentation efforts to guide and mentor team members</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>GoLang, Gitlab, Azure, K8s, ArgoCD, Microservices, Kafka, Testcontainers</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>SPORTRADAR</div>
                <div className={dateColumn}>Jun 2021 – Apr 2022</div>
                <div className={titleColumn}>Senior GoLang back-end developer</div>
                <div className={dateColumnMobile}>Jun 2021 – Apr 2022</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Delivered a fully functional MVP, aligning the application design closely with business requirements</li>
                        <li>Contributed to DevOps pipeline setup, streamlining deployment and integration to reduce iteration time and operational costs</li>
                        <li>Established efficient team workflows to accelerate delivery and improve overall development efficiency</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Designed and implemented backend web services from scratch using Go, and developed new frontend features with JavaScript and React</li>
                        <li>Tested applications and created automated test cases to ensure stability and performance</li>
                        <li>Contributed to code reviews and documentation to uphold quality standards and support team knowledge sharing</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Linux, GoLang, React, GraphQL, JavaScript, HTML, Gitlab, Microservice, MySQL, Docker, AWS</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>DECIDIO</div>
                <div className={dateColumn}>Jul 2020 – May 2021</div>
                <div className={titleColumn}>GoLang back-end developer</div>
                <div className={dateColumnMobile}>Jul 2020 – May 2021</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Built a backend application from scratch in Go, fully meeting customer requirements and ensuring reliable performance</li>
                        <li>Developed a TypeScript-based website scanner for Truendo, significantly enhancing feature automation and product capability</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Designed and developed backend applications from scratch in Go, contributing to microservices within the Truendo product and meeting customer-specific requirements</li>
                        <li>Implemented, maintained, and tested product features, including TypeScript scripts and Go-based services, ensuring performance and reliability across deployments</li>
                        <li>Actively participated in code reviews and feedback sessions to uphold code quality and support continuous improvement across the team</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Linux, GoLang, Typescript, JavaScript, HTML, Jenkins, K8s, Microservice, PostgreSQL, Docker, AWS</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>TRICENTIS</div>
                <div className={dateColumn}>Sep 2019 – Jun 2020</div>
                <div className={titleColumn}>.NET C# developer</div>
                <div className={dateColumnMobile}>Sep 2019 – Jun 2020</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>
                            Played a pivotal role in the successful delivery of numerous features and
                            updates for Tricentis Tosca{"'"}s automation platform,
                            consistently achieving sprint objectives.
                        </li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>
                            Contributed to Tricentis Tosca’s automation platform by defining stories,
                            delivering and testing features, supporting users, and
                            resolving complex issues under tight deadlines.
                        </li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Windows, .NET, C#, Visual Studio, Java 8, Java 11, CI/CD pipelines</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>QUALYSOFT</div>
                <div className={dateColumn}>Sep 2018 – Apr 2019</div>
                <div className={titleColumn}>DevOps engineer at Qualysoft outsourced to Ericsson</div>
                <div className={dateColumnMobile}>Sep 2018 – Apr 2019</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>
                            Improved release stability and deployment speed by optimizing CI and
                            driving cross-team collaboration and code quality efforts.
                        </li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>
                            Maintained and improved the CI system, promoted code quality through reviews, and
                            streamlined deployments via cross-team collaboration.
                        </li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Jenkins, Linux, Python, Perl, Bash, Groovy, Java, JavaScript, HTML</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>DIGICART</div>
                <div className={dateColumn}>Jan 2016 – Sep 2018</div>
                <div className={titleColumn}>.NET C# developer</div>
                <div className={dateColumnMobile}>Jan 2016 – Sep 2018</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>
                            I tailored key features for premium clients,
                            ensuring our product met their high expectations and delivered a smoother,
                            more efficient experience.
                        </li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>
                            Actively collaborated with users to shape a desktop application—from gathering requirements to continuous feedback—ensuring
                            the product evolved to meet real-world needs.
                        </li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Windows, Visual Studio, .NET, C#, PowerShell</div>
            </div>
        </section>
    )
}

const EducationSection = () => {
    const firstColumn = "col-span-4 sm:col-span-3 lg:col-span-3";
    const secondColumn = "col-span-8 sm:col-span-9 lg:col-span-8";

    return (
        <section>
            <h1 className={sectionHeader}>Education</h1>
            <div className="grid grid-cols-12 gap-4">
                <div className={firstColumn}>2013 - 2019</div>
                <div className={secondColumn}>
                    BSc in Geoinformatics, Faculty of Civil Engineering, Budapest University of Technology and Economics (BME), Budapest
                    <div className="font-light text-gray-700 mt-1">
                        Coursework in coordinate systems, geometry, spatial data and sensor-derived
                        datasets — the same foundations used in robotics perception, SLAM and mapping.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CV;
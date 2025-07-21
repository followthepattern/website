import classNames from "classnames";
import { CsabaDevYoutubeLink, PodcastYoutubeLink } from "@/lib/constants";
import Youtube from "@/icons/Youtube";
import Profile from "../(public)/components/profile";
import Link from "next/link";

const sectionHeader = "mt-10 mb-8 text-2xl font-bold text-gray-900 sm:text-4xl"

const CV = () => {
    const techStack = ["Go", "React", "TypeScript", "JavaScript", "AWS", "Azure", "Docker", "PostgresSQL", "Kafka", "Redis", "Linux", "LLM", "Ollama", "OpenAI"]

    return (
        <div className="max-w-4xl px-4 mx-auto text-gray-900 sm:px-6 lg:px-8 ">
            <header className="flex mt-10 flex-col space-y-10 sm:space-y-14">
                <h1 className="text-4xl font-bold text-center sm:text-6xl">
                    Csaba Zsolt Huszka
                </h1>
                <div className="flex justify-center">
                    <Profile className="w-40 h-40 rounded-full sm:rounded-[8px]" />
                </div>
                <div className="mx-auto font-light text-lg max-w-2xl">
                    <p>I’m the founder of FollowThePattern and a software engineer focused on building AI native applications that
                        enables companies to do lot more.
                    </p>
                    <p className="mt-2">
                        With over a decade of software development experience across domains like test automation, scalable microservices,
                        and event-driven systems, I focus on consulting with companies that want to move fast.
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
                </div>
            </header>
            <KnowledgeSharingSection />
            <ExperienceSection />
            <EducationSection />
            <section>
                <h1 className={sectionHeader}>Languages</h1>
                <div>English - Professional working proficiency</div>
                <div>Hungarian - Native</div>
            </section>
            <section className="mb-10">
                <h1 className={sectionHeader}>Hobbies</h1>
                <div>Crossfit: When the body thrives, the mind follows</div>
                <div>Brazilian jiu-jitsu: The Game of Human Chess</div>
            </section>
        </div>
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
                        <li>Assisted companies of various sizes in designing and implementing products and workflows to enhance their outcomes</li>
                        <li>Taught senior developers Go through my course, helping them advance their careers with practical, production-level skills</li>
                        <li>Reached over 600,000 views on YouTube through coding tutorials and podcast episodes focused on software engineering, business and AI</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Collaborate with companies to design and implement features and workflows that enhance business outcomes</li>
                        <li>Design and develop AI-native applications that empower organizations to significantly increase productivity</li>
                        <li>Create and manage online coding courses, primarily focused on Go programming</li>
                        <li>Educate and share technical knowledge through a podcast and YouTube channel, reaching a combined audience of over 600,000 views</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>GoLang, TypeScript, React, Ollama, LLM, OpenAI</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>BlackRock</div>
                <div className={dateColumn}>May 2022 – Present</div>
                <div className={titleColumn}>Senior GoLang developer</div>
                <div className={dateColumnMobile}>May 2022 – Present</div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Led the design and implementation of end-to-end test automation, enabling the team to achieve 20× faster testing cycles.</li>
                        <li>Optimized cross-service communication by enhancing Go-based Kafka messaging for greater efficiency.</li>
                        <li>Extended the product’s query language with new features, significantly accelerating output calculations through deep business and technical insight.</li>
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
                </div>
            </div>
        </section>
    )
}

export default CV;
import classNames from "classnames";
import Discord from "@/icons/Discord";
import { CsabaDevYoutubeLink, DiscordLink, PodcastYoutubeLink } from "@/lib/constants";
import Youtube from "@/icons/Youtube";
import Profile from "../(public)/components/profile";
import Link from "next/link";
import FPIcon from "@/icons/FPIcon";

const sectionHeader = "mt-10 mb-8 text-2xl font-bold text-gray-900 sm:text-4xl"

const EducationSection = () => {
    const firstColumn = "col-span-4 sm:col-span-3 lg:col-span-3";
    const secondColumn = "col-span-8 sm:col-span-9 lg:col-span-8";

    return (
        <section>
            <h1 className={sectionHeader}>Education</h1>
            <div className="grid grid-cols-12 gap-4">
                <div className={firstColumn}>2013 - 2019</div>
                <div className={secondColumn}>BUDAPEST UNIVERSITY OF TECHNOLOGY AND ECONOMICS
                    Faculty of Civil Engineering (Geoinformatics), Budapest</div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className={firstColumn}>2009 - 2013</div>
                <div className={secondColumn}>ÁFEOSZ Secondary School of Economics, Kecskemét</div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className={firstColumn}>2001 - 2009</div>
                <div className={secondColumn}>Primary school, Kecskemét</div>
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
                <div className={companyName}>BlackRock</div>
                <div className={dateColumn}>May 2022 – Present</div>
                <div className={titleColumn}>Golang developer</div>
                <div className={dateColumnMobile}>May 2022 – Present</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Participating in the implementation of new features for Golang back-end web services, adhering to concurrency design principles.</li>
                        <li>Adding automated test cases to consistently improve product quality.</li>
                        <li>Writing documentation for newly implemented components.</li>
                        <li>Collaborating closely with team members through knowledge sharing, pair programming, and code reviews.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Enhanced the efficiency of the Kafka connection by implementing in Golang an updated version of the Kafka API client.</li>
                        <li>Introduced a new language feature to our internal query language written in Golang, significantly enhancing the speed of query execution.</li>
                        <li>Developed new CLI tools in Golang to streamline workflows and simplify tasks for developers and users.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Golang, Gitlab, K8s, Microservices, Kafka</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>SPORTRADAR</div>
                <div className={dateColumn}>Jun 2021 – Apr 2022</div>
                <div className={titleColumn}>Senior Golang back-end developer</div>
                <div className={dateColumnMobile}>Jun 2021 – Apr 2022</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Participating in the design and implementation of back-end web services from scratch using Golang.</li>
                        <li>Implementing new features in the front-end using JavaScript and React.</li>
                        <li>Testing the application and crafting automated test cases.</li>
                        <li>Engaging in code reviews to maintain code quality and collaborative learning.</li>
                        <li>Writing comprehensive documentation for various components and features.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Successfully implemented an MVP (Minimum Viable Product).</li>
                        <li>Contributed to the construction of DevOps pipelines, enhancing deployment and integration processes.</li>
                        <li>Assisted in establishing efficient team workflows, promoting collaboration and productivity.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Linux, Golang, React, GraphQL, JavaScript, HTML, Gitlab, Microservice, MySQL, Docker, AWS</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>DECIDIO</div>
                <div className={dateColumn}>Jul 2020 – May 2021</div>
                <div className={titleColumn}>Golang back-end developer</div>
                <div className={dateColumnMobile}>Jul 2020 – May 2021</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Constructing back-end applications from scratch for our customers predominantly using the Golang programming language.</li>
                        <li>Implementing and maintaining features in our Truendo product, which follows a microservices architecture, typically with the Golang programming language.</li>
                        <li>Writing and upkeeping TypeScript scripts that form an integral part of the Truendo product.</li>
                        <li>Testing recent modifications in the product to ensure optimal performance.</li>
                        <li>Deploying updates across all environments to guarantee smooth transitions and functionality.</li>
                        <li>Actively participating in code reviews to maintain the highest standards of code quality.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Successfully built a back-end application from scratch using Golang, fully meeting customer requirements.</li>
                        <li>Developed critical TypeScript scripts for Truendo, significantly enhancing its functionality and user experience.</li>
                        <li>Maintained a high success rate in testing and validating new product changes, ensuring top-notch reliability with minimal disruptions.</li>
                        <li>Played a pivotal role in improving code quality through active participation in code reviews and collaborative feedback sessions.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Linux, Golang, Typescript, JavaScript, HTML, Jenkins, K8s, Microservice, PostgreSQL, Docker, AWS</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>TRICENTIS</div>
                <div className={dateColumn}>Sep 2019 – Jun 2020</div>
                <div className={titleColumn}>.NET C# developer</div>
                <div className={dateColumnMobile}>Sep 2019 – Jun 2020</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Developed Tricentis Tosca{"'"}s automation platform, where I actively participated in defining stories, fixing bugs, and implementing features during two-week sprints.</li>
                        <li>Tested new implementations and bug fixes. During tight schedules, I also stepped in to test changes made by teammates, complementing the code review process.</li>
                        <li>Assisted product support by addressing unique customer issues. When required, I collaborated in detailed investigations and provided custom implementations to resolve specific challenges.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Played a pivotal role in the successful delivery of numerous features and updates for Tricentis Tosca{"'"}s automation platform, consistently achieving sprint objectives.</li>
                        <li>Maintained a strong success rate in preliminary tests of new implementations, minimizing post-deployment challenges and enhancing product reliability.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Windows 7, Windows 10, .NET, C#, Visual Studio 2019, Java 8, Java 11</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>QUALYSOFT</div>
                <div className={dateColumn}>Sep 2018 – Apr 2019</div>
                <div className={titleColumn}>DevOps engineer at Qualysoft outsourced to Ericsson</div>
                <div className={dateColumnMobile}>Sep 2018 – Apr 2019</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Enhanced and maintained the Continuous Integration (CI) system for an Ericsson product.</li>
                        <li>Significantly contributed to elevating code quality through active involvement in code reviews and collaborative feedback sessions.</li>
                        <li>Collaborated cross-functionally to streamline deployment processes, ensuring consistent and efficient releases across environments.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Successfully optimized the CI system for the Ericsson product.</li>
                        <li>Played a key role in reducing code defects through code reviews and feedback sessions, leading to more stable releases.</li>
                        <li>Improved deployment efficiency by collaborating with multiple teams and introducing automated deployment scripts, ensuring quicker and more reliable product updates.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Linux, Python, Perl, Bash, Groovy, Java, JavaScript, HTML</div>
            </div>
            <div className={experienceTable}>
                <div className={companyName}>DIGICART</div>
                <div className={dateColumn}>Jan 2016 – Sep 2018</div>
                <div className={titleColumn}>.NET C# developer</div>
                <div className={dateColumnMobile}>Jan 2016 – Sep 2018</div>
                <div className={subSectionTitle}>Responsibilities</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Developed a desktop application product that enabled users to create vector diagrams from scanned point clouds.</li>
                        <li>Collected user requirements directly from customers to ensure product relevance and functionality.</li>
                        <li>Maintained regular communication with daily product users, ensuring timely feedback and continuous improvement.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Achievements</div>
                <div className={secondColumn}>
                    <ul className={listStyle}>
                        <li>Streamlined the product development process by effectively gathering and implementing customer feedback, leading to a marked increase in user satisfaction.</li>
                        <li>Proactively addressed user requirements and incorporated their feedback, resulting in a reduction of customer support tickets.</li>
                        <li>Enhanced product functionality based on user insights, significantly improving the overall customer experience.</li>
                    </ul>
                </div>
                <div className={subSectionTitle}>Technologies</div>
                <div className={technologies}>Windows 7, Windows 10, .NET, C#, Visual Studio 2015</div>
            </div>
        </section>
    )
}

const CV = () => {
    const techStack = ["Go", "React", "TypeScript", "Databases", "Kafka", "Redis", "Docker", "Linux", "LLM", "Ollama", "OpenAI"]

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
                    <p>I’m the founder of FollowThePattern and a software engineer focused on building applications that
                        leverage modern technologies—including AI—to streamline processes and enable faster execution.
                    </p>
                    <p className="mt-2">
                        With over a decade of software development experience across domains like test automation, scalable microservices,
                        and event-driven systems, I focus on delivering solutions for companies that want to move fast.
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
                <div className="mx-auto space-x-8 flex">
                    <Link className="flex space-x-4" href="/" target="_blank" rel="noreferrer">
                        <FPIcon className="w-10 h-10 fill-blue-500" />
                        <div className="my-auto font-medium">Follow The Pattern</div>
                    </Link>
                    <Link className="flex space-x-4" href={CsabaDevYoutubeLink} target="_blank" rel="noreferrer">
                        <Youtube className="w-10 h-10 fill-[#f00]" />
                        <div className="my-auto font-medium">@CsabaDev</div>
                    </Link>
                </div>
            </header>
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

export default CV;
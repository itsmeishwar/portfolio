import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { FaLaptopCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";

const experiences = [
    {
        title: "Senior UI/UX Designer",
        company_name: "Creative Studio",
        icon: <FaPencilRuler size={24} />,
        iconBg: "#4F46E5",
        date: "Jan 2025 – Present",
        points: [
            "Leading user research and usability testing to inform design decisions and improve product usability.",
            "Creating high-fidelity wireframes, prototypes, and UI designs using Figma and Adobe XD.",
            "Collaborating with developers to ensure accurate implementation of designs and design systems.",
            "Mentoring junior designers and establishing design best practices across the organization.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Tech Solutions Inc.",
        icon: <FaLaptopCode size={24} />,
        iconBg: "#0EA5E9",
        date: "Jan 2024 – Dec 2024",
        points: [
            "Developed responsive and interactive web applications using React.js and Next.js.",
            "Optimized application performance, reducing load times by 40% through code splitting and lazy loading.",
            "Integrated RESTful APIs and GraphQL for seamless data fetching and state management.",
            "Implemented modern UI frameworks like Tailwind CSS to create visually appealing interfaces.",
        ],
    },
    {
        title: "Mobile App Developer",
        company_name: "AppInnovate",
        icon: <FaMobileAlt size={24} />,
        iconBg: "#10B981",
        date: "Jan 2023 – Dec 2023",
        points: [
            "Built cross-platform mobile applications using React Native for both iOS and Android.",
            "Implemented native modules and integrated third-party SDKs for maps, payments, and push notifications.",
            "Collaborated with backend teams to design efficient API schemas for mobile data consumption.",
            "Published apps to the Apple App Store and Google Play Store, managing the entire release process.",
        ],
    },
    {
        title: "iOS App Developer",
        company_name: "AppInnovate",
        icon: <FaMobileAlt size={24} />,
        iconBg: "#F59E0B",
        date: "Jun 2022 – Dec 2022",
        points: [
            "Developed responsive and interactive mobile applications using React Native for iOS and Android.",
            "Optimized application performance, reducing load times by 40% through code splitting and lazy loading.",
            "Collaborated with backend teams to design efficient API schemas for mobile data consumption.",
        ],
    },
];

const ExperienceCard = ({ experience }) => {
    const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "var(--exp-card-bg)",
                color: "var(--exp-card-text)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                border: "1px solid var(--exp-card-border)",
                borderRadius: "12px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid var(--exp-card-bg)",
            }}
            date={experience.date}
            iconStyle={{
                background: experience.iconBg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: `0 0 0 4px ${experience.iconBg}55, 0 4px 16px rgba(0,0,0,0.25)`,
            }}
            icon={
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        color: "#ffffff",
                    }}
                >
                    {experience.icon}
                </div>
            }
        >
            <div>
                <h3
                    style={{
                        color: "var(--exp-heading)",
                        fontSize: "20px",
                        fontWeight: 700,
                        marginBottom: "4px",
                    }}
                >
                    {experience.title}
                </h3>
                <p
                    style={{
                        color: experience.iconBg,
                        fontSize: "15px",
                        fontWeight: 600,
                        margin: 0,
                    }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        style={{
                            color: "var(--exp-point)",
                            fontSize: "14px",
                            paddingLeft: "4px",
                            lineHeight: 1.7,
                        }}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor="var(--exp-line)">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");

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
import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaFileWord } from "react-icons/fa";

const experiences = [
    {
        title: "UI/UX Designer",
        company_name: "Samasta Groups Pvt. Ltd",
        icon: <FaPencilRuler size={24} />,
        iconBg: "#4F46E5",
        date: "May 2026 – Present",
        points: [
            "Design and maintain UI/UX workflows, wireframes, and high-fidelity prototypes for company products using Figma.",
            "Collaborate with Other teams' member to deliver responsive, user-friendly UI design.",
        ],
    },
    {
        title: "UI/UX Designer",
        company_name: "Frontbase INC, Kathmandu",
        icon: <FaLaptopCode size={24} />,
        iconBg: "#0EA5E9",
        date: "November 2025 – February 2026",
        points: [
            "Designed user-centered interfaces and interactive prototypes for web and mobile applications using Figma.",
            "Apply React JS knowledge to support front-end development and smooth design-to-code handoff.",
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

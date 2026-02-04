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
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        title: "ui/ux Designer",
        company_name: "Frontbase Inc",
        icon: <FaBriefcase />,
        iconBg: "#383E56",
        date: "December 2025-Present",
        points: [
        "Conducted user research to translate business needs into effective design solutions.",
        "Created wireframes UI designs using tools like Figma.",
        "Improved user experience through iterative design, user feedback, and data-driven design decisions.",
        "Designed responsive layouts optimized for desktop, tablet, and mobile devices.",
        "Worked on accessibility-friendly designs by following UX best practices ."
        ],
    },

   
    {
        title: "Web Developer",
        company_name: "personal projects",
        icon: <FaBriefcase />,
        iconBg: "#383E56",
        date: "Jan 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: "var(--tertiary)", color: "var(--white-100)" }}
        contentArrowStyle={{ borderRight: "7px solid var(--tertiary)" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={experience.icon}
    >
        <div>
            <h3 className='text-gray-900 dark:text-white text-[24px] font-bold'>{experience.title}</h3>
            <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
            >
                {experience.company_name}
            </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "work");

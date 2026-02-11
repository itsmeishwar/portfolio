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
import { FaBriefcase, FaLaptopCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";

const experiences = [
    {
        title: "Senior UI/UX Designer",
        company_name: "Creative Studio",
        icon: <FaPencilRuler />,
        iconBg: "#383E56",
        date: "Jan 2025 - Present",
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
        icon: <FaLaptopCode />,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Dec 2024",
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
        icon: <FaMobileAlt />,
        iconBg: "#383E56",
        date: "Jan 2023 - Dec 2023",
        points: [
            "Built cross-platform mobile applications using React Native for both iOS and Android.",
            "Implemented native modules and integrated third-party SDKs for maps, payments, and push notifications.",
            "Collaborated with backend teams to design efficient API schemas for mobile data consumption.",
            "Published apps to the Apple App Store and Google Play Store, managing the entire release process.",
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

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { FaGithub, FaExternalLinkAlt, FaHotel, FaBookOpen, FaUniversity, FaCalculator } from "react-icons/fa";

const projects = [
    {
        name: "Hotel Management System",
        description:
            "A comprehensive cloud-based Hotel Management System featuring guest CRM, real-time room booking, housekeeping coordination, billing & finance, AI-powered demand forecasting, and multi-property support.",
        tags: [
            { name: "Node.js", color: "from-green-500 to-emerald-600" },
            { name: "Express", color: "from-gray-500 to-gray-700" },
            { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
            { name: "Socket.IO", color: "from-yellow-500 to-orange-500" },
        ],
        gradient: "from-blue-700 via-indigo-700 to-blue-900",
        icon: FaHotel,
        source_code_link: "https://github.com/itsmeishwar/hotel-management-system",
    },
    {
        name: "StudyMate",
        description:
            "A cross-platform Flutter mobile app that helps students study through interactive MCQ quizzes, organized subject notes, an OCR-powered question solver, and detailed progress analytics.",
        tags: [
            { name: "Flutter", color: "from-sky-500 to-cyan-600" },
            { name: "Dart", color: "from-blue-400 to-blue-600" },
            { name: "Firebase", color: "from-orange-500 to-amber-600" },
            { name: "ML Kit", color: "from-purple-500 to-violet-600" },
        ],
        gradient: "from-sky-600 via-cyan-600 to-teal-700",
        icon: FaBookOpen,
        source_code_link: "https://github.com/itsmeishwar/StudyMate",
    },
    {
        name: "CampusPay",
        description:
            "A digital payment and financial management system for college campuses — enabling students, vendors, and admins to perform secure, cashless QR-based transactions within the campus ecosystem.",
        tags: [
            { name: "React.js", color: "from-blue-500 to-blue-600" },
            { name: "Node.js", color: "from-green-500 to-emerald-600" },
            { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
            { name: "JWT", color: "from-pink-500 to-rose-600" },
        ],
        gradient: "from-violet-700 via-purple-700 to-fuchsia-800",
        icon: FaUniversity,
        source_code_link: "https://github.com/itsmeishwar/CampusPay",
    },
    {
        name: "Smart Calculator",
        description:
            "A feature-rich cross-platform Flutter calculator with currency exchange, unit conversions, date calculations, and live gold & silver rates — available on Android and Windows.",
        tags: [
            { name: "Flutter", color: "from-sky-500 to-cyan-600" },
            { name: "Dart", color: "from-blue-400 to-blue-600" },
            { name: "Android", color: "from-green-500 to-emerald-600" },
            { name: "Windows", color: "from-indigo-500 to-violet-600" },
        ],
        gradient: "from-emerald-600 via-teal-600 to-cyan-700",
        icon: FaCalculator,
        source_code_link: "https://github.com/itsmeishwar/Smart-calculator-flutter",
    },
];

const ProjectCard = ({ index, name, description, tags, gradient, icon: Icon, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="sm:w-[360px] w-full flex">
            <Tilt
                options={{ max: 20, scale: 1.02, speed: 400 }}
                className="bg-white dark:bg-tertiary p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
                {/* Banner */}
                <div className="relative w-full h-[180px] flex-shrink-0 group overflow-hidden rounded-xl">
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105`}>
                        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                        <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" />
                        <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <Icon size={36} className="text-white drop-shadow" />
                        </div>
                        <p className="relative z-10 text-white font-bold text-lg text-center px-4 drop-shadow-lg leading-tight">
                            {name}
                        </p>
                    </div>
                </div>

                {/* Content — flex-1 pushes buttons to bottom */}
                <div className="mt-5 flex flex-col flex-1">
                    <h3 className="text-gray-900 dark:text-white font-bold text-[20px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[13px] leading-relaxed flex-1">{description}</p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className={`text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${tag.color} text-white shadow-sm`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    {/* Bottom Buttons */}
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700 flex gap-3">
                        <button
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-900 dark:bg-gray-800 hover:bg-black dark:hover:bg-gray-700 text-white text-[13px] font-semibold transition-all duration-200 shadow hover:shadow-md"
                        >
                            <FaGithub size={15} />
                            Source Code
                        </button>
                        <button
                            disabled
                            title="Coming Soon"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-[13px] font-semibold cursor-not-allowed opacity-60"
                        >
                            <FaExternalLinkAlt size={13} />
                            Live Demo
                        </button>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};


const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcase my skills and experience through real-world examples of my work.
                    Each project is briefly described with links to the code repositories. It reflects my ability
                    to solve complex problems, work with different technologies, and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 items-stretch'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");


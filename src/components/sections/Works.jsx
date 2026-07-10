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

const ProjectCard = ({ index, name, description, tags, gradient, icon: Icon, source_code_link, live_demo_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{ max: 20, scale: 1.02, speed: 400 }}
                className='bg-white dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
                {/* Banner */}
                <div className='relative w-full h-[200px] group overflow-hidden rounded-xl'>
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105`}>
                        {/* Decorative circles */}
                        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                        <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" />
                        {/* Icon */}
                        <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <Icon size={36} className="text-white drop-shadow" />
                        </div>
                        {/* Name */}
                        <p className="relative z-10 text-white font-bold text-lg text-center px-4 drop-shadow-lg leading-tight">
                            {name}
                        </p>
                    </div>

                    {/* Hover action buttons */}
                    <div className='absolute inset-0 flex justify-end items-start m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-black/70 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black transition-colors shadow-lg'
                            title="View Source Code"
                        >
                            <FaGithub className='w-5 h-5 text-white' />
                        </div>
                        {live_demo_link && live_demo_link !== "#" && (
                            <div
                                onClick={() => window.open(live_demo_link, "_blank")}
                                className='bg-violet-600/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-violet-600 transition-colors shadow-lg'
                                title="Live Demo"
                            >
                                <FaExternalLinkAlt className='w-4 h-4 text-white' />
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className='mt-5'>
                    <h3 className='text-gray-900 dark:text-white font-bold text-[20px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[13px] leading-relaxed'>{description}</p>
                </div>

                {/* Tags */}
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className={`text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${tag.color} text-white shadow-sm`}
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>

                {/* GitHub link button */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group/btn"
                    >
                        <FaGithub size={16} />
                        <span className="group-hover/btn:underline">View on GitHub</span>
                        <FaExternalLinkAlt size={11} className="ml-1 opacity-60" />
                    </button>
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

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");


import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaPaintBrush, FaCube } from "react-icons/fa";

import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const services = [
    {
        title: "UI/UX Designer",
        icon: FaPaintBrush,
    },
    {
        title: "Frontend Developer",
        icon: FaCode,
    },
    {
        title: "Mobile App Developer",
        icon: FaCube,
    },
    {
        title: "React / Next.js Expert",
        icon: FaReact,
    },
];

const ServiceCard = ({ index, title, icon: Icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-white dark:bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 hover:scale-105 group'
            >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className='text-gray-900 dark:text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                UI/UX Designer and Front-End Developer with hands-on experience in Figma, HTML, CSS, JavaScript, and React JS. Skilled in wireframing, prototyping, and responsive design, with strong problem-solving ability and a passion for building clean, user-centered digital products. Seeking a challenging assignment to put these skills to the best use, contribute as a strong team player, and make a distinguished contribution in the field of digital product design.
            </motion.p>

            {/* Stats Counter */}
            <motion.div
                variants={fadeIn("", "", 0.2, 1)}
                className="mt-10 flex gap-10 flex-wrap"
            >
                <div className="group">
                    <h3 className="text-gray-900 dark:text-white text-[30px] font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">2+</h3>
                    <p className="text-secondary">Years Experience</p>
                </div>
                <div className="group">
                    <h3 className="text-gray-900 dark:text-white text-[30px] font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">10+</h3>
                    <p className="text-secondary">Projects Completed</p>
                </div>
                <div className="group">
                    <h3 className="text-gray-900 dark:text-white text-[30px] font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">4+</h3>
                    <p className="text-secondary">Happy Clients</p>
                </div>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");

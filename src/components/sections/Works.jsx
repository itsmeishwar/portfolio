import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-white dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
                <div className='relative w-full h-[230px] group'>
                    <div className="w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-xl relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600">
                        {/* Enhanced gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/90 via-purple-600/90 to-indigo-600/90 group-hover:opacity-70 transition-opacity duration-300" />
                        <span className="relative z-10 text-2xl font-black">{name}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className='absolute inset-0 flex justify-end items-start m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-black/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black transition-colors'
                        >
                            <FaGithub className='w-5 h-5 text-white' />
                        </div>
                        {live_demo_link && (
                            <div
                                onClick={() => window.open(live_demo_link, "_blank")}
                                className='bg-violet-600/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-violet-600 transition-colors'
                            >
                                <FaExternalLinkAlt className='w-4 h-4 text-white' />
                            </div>
                        )}
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-gray-900 dark:text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className={`text-[12px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${tag.color} text-white`}
                        >
                            #{tag.name}
                        </span>
                    ))}
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
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {/* Project Cards */}
                <ProjectCard
                    index={0}
                    name="SmartRep AI"
                    description="A web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
                    tags={[{ name: 'react', color: 'text-blue-500' }, { name: 'mongodb', color: 'text-green-500' }, { name: 'tailwind', color: 'text-pink-500' }]}
                    source_code_link="#"
                />
                <ProjectCard
                    index={1}
                    name="Notable"
                    description="Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location."
                    tags={[{ name: 'react', color: 'text-blue-500' }, { name: 'restapi', color: 'text-green-500' }, { name: 'scss', color: 'text-pink-500' }]}
                    source_code_link="#"
                />
                <ProjectCard
                    index={2}
                    name="ZapFlow"
                    description="A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations."
                    tags={[{ name: 'nextjs', color: 'text-blue-500' }, { name: 'supabase', color: 'text-green-500' }, { name: 'css', color: 'text-pink-500' }]}
                    source_code_link="#"
                />
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");

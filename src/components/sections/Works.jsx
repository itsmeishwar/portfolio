import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <div className="w-full h-full bg-indigo-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl relative overflow-hidden group">
                        {/* Placeholder for image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-900 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">{name} Image</span>
                    </div>
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <FaGithub className='w-1/2 h-1/2 object-contain' />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-gray-900 dark:text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
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

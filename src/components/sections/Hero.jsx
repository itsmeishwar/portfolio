import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import SocialLinks from '../ui/SocialLinks';

const Hero = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Full Stack Developer", "Creative Problem Solver", "UI/UX Enthusiast", "Tech Innovator"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
            if (isDeleting) {
                setDelta(100);
            }
        }
    };

    return (
        <section className="relative w-full min-h-screen mx-auto overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>

            <div className={`${styles.paddingX} relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 lg:pt-0 gap-10 lg:gap-20`}>
                {/* Left Column - Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 z-10 text-center lg:text-left"
                >
                    {/* Eyebrow Text */}
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-700 dark:text-gray-200 uppercase tracking-wider text-sm md:text-base font-semibold mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
                    >
                        <span>Ishwar</span>
                        <br />
                        <span>Awasthi</span>
                    </motion.h1>

                    {/* Animated Typing Tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white font-medium mb-8 min-h-[40px]"
                    >
                        <span className="text-gray-900 dark:text-white font-bold">{text}</span>
                        <span className="animate-pulse text-gray-900 dark:text-white">|</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-gray-700 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-8"
                    >
                        Crafting exceptional digital experiences with modern web technologies.
                        Passionate about clean code, innovative solutions, and user-centric design.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <span className="relative z-10">View My Work</span>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 dark:hover:bg-white/10 hover:shadow-lg"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <SocialLinks />
                    </motion.div>
                </motion.div>

                {/* Right Column - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1 relative z-10 flex items-center justify-center lg:justify-end"
                >
                    <div className="relative">
                        {/* Glowing Border */}
                        <div className="absolute -inset-1 rounded-full bg-gray-900 dark:bg-white/20 p-1">
                            <div className="w-full h-full rounded-full bg-white dark:bg-primary overflow-hidden">
                                <img
                                    src="/image.png"
                                    alt="Ishwar Awasthi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-600 dark:border-secondary flex justify-center items-start p-2 hover:border-violet-500 transition-colors">
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-gray-600 dark:bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;

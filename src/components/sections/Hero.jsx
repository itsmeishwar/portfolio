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
                <motion.div
                    className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/30 dark:bg-indigo-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/3 w-80 h-80 bg-violet-500/30 dark:bg-violet-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
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
                        className="text-secondary uppercase tracking-wider text-sm md:text-base font-semibold mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name with Gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4"
                    >
                        <span className="text-gray-900 dark:text-white">Ishwar</span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Awasthi
                        </span>
                    </motion.h1>

                    {/* Animated Typing Tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-8 min-h-[40px]"
                    >
                        <span className="text-[#915eff] font-bold">{text}</span>
                        <span className="animate-pulse text-[#915eff]">|</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
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
                            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 dark:hover:bg-white/10 hover:shadow-xl"
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
                        {/* Decorative Elements */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-full opacity-20 blur-2xl"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -inset-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full opacity-30 blur-3xl"
                        />

                        {/* Profile Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                        >
                            {/* Glowing Border */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-1">
                                <div className="w-full h-full rounded-full bg-white dark:bg-primary overflow-hidden">
                                    <img
                                        src="/image.png"
                                        alt="Ishwar Awasthi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Decorative Rings */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -inset-6 border-2 border-violet-500/30 rounded-full"
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -inset-10 border-2 border-indigo-500/20 rounded-full"
                            />
                        </motion.div>

                        {/* Floating Dots */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full opacity-60 blur-xl"
                        />
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full opacity-60 blur-xl"
                        />
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

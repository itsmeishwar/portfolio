import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-1 bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-white hover:text-tertiary transition-all'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='flex-1 bg-black-100 p-8 rounded-2xl h-full'
            >
                <div className="h-full flex flex-col justify-center gap-8">
                    <h3 className="text-white text-[24px] font-bold">Connect with me</h3>
                    <p className="text-secondary text-[16px] leading-[30px]">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex items-center gap-4 group">
                            <div className="w-14 h-14 bg-tertiary rounded-full flex justify-center items-center group-hover:bg-white transition-colors duration-300">
                                <MdEmail className="w-6 h-6 text-white group-hover:text-tertiary" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-[18px]">Email</p>
                                <p className="text-secondary text-[14px]">ishwarawasthi@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-14 h-14 bg-tertiary rounded-full flex justify-center items-center group-hover:bg-white transition-colors duration-300">
                                <MdLocationOn className="w-6 h-6 text-white group-hover:text-tertiary" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-[18px]">Location</p>
                                <p className="text-secondary text-[14px]">Remote / Worldwide</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="#" className="w-12 h-12 bg-tertiary rounded-full flex justify-center items-center hover:bg-white hover:text-tertiary transition-all duration-300">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-tertiary rounded-full flex justify-center items-center hover:bg-white hover:text-tertiary transition-all duration-300">
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");

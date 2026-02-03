import React from "react";
import { FaHeart, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Works", href: "#works" },
        { name: "Blog", href: "/blog" },
    ];

    const services = [
        { name: "Web Development", icon: "💻" },
        { name: "UI/UX Design", icon: "🎨" },
        { name: "Full Stack", icon: "⚙️" },
        { name: "Consulting", icon: "📋" },
    ];

    return (
        <footer className="w-full bg-gradient-to-b from-black-200 to-black-300 py-12 border-t border-t-[#232631]">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Section 1: Brand & About */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-2">Ishwar Awasthi</h3>
                            <p className="text-secondary text-[14px] leading-relaxed">
                                Full Stack Developer & Creative Problem Solver. Building beautiful, functional digital experiences with modern web technologies.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-secondary text-[13px]">
                            <div className="flex items-center gap-2 hover:text-white transition">
                                <FaPhone className="w-4 h-4" />
                                <a href="tel:+91-XXXXXXXXXX">+91 XXXXXXXXXX</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-secondary text-[13px] hover:text-white transition">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>Kathmandu, Nepal</span>
                        </div>
                    </div>

                    {/* Section 2: Quick Links & Services */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
                            <ul className="flex flex-col gap-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-secondary text-[14px] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-white transition"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-sm font-semibold mt-4 mb-2">Services</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {services.map((service) => (
                                    <div
                                        key={service.name}
                                        className="text-secondary text-[12px] bg-white/5 hover:bg-white/10 px-2 py-1.5 rounded transition-colors duration-300 flex items-center gap-1.5"
                                    >
                                        <span>{service.icon}</span>
                                        <span>{service.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Social Links & CTA */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-3">Connect With Me</h3>
                            <p className="text-secondary text-[14px] mb-4">
                                Let's collaborate and create something amazing together.
                            </p>
                            <SocialLinks className="justify-start" />
                        </div>
                        <div>
                            <a
                                href="mailto:ishwarawasthi3@gmail.com"
                                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 mt-2"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-t-[#232631] my-6"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-secondary text-[13px] text-center md:text-left">
                        &copy; {currentYear} <span className="text-white font-semibold">Ishwar Awasthi</span>. All rights reserved.
                    </div>

                    <div className="flex items-center gap-2 text-secondary text-[13px]">
                        Made by Ishwar Awasthi
                    </div>

                    <div className="text-secondary text-[12px] text-center md:text-right">
                        Design & Built with React & Tailwind CSS
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

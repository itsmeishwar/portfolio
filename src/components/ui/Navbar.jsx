import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Ishwar&nbsp;
                        <span className='sm:block hidden'> | Awasthi</span>
                    </p>
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex flex-row gap-10 items-center'>
                    <ul className='list-none flex flex-row gap-10'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? "text-white" : "text-secondary"
                                    } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4">
                        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all text-[16px]">
                            Hire Me
                        </button>
                        <button className="border border-white/20 text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all text-[16px]">
                            CV
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className='lg:hidden flex flex-1 justify-end items-center'>
                    <div
                        className="text-white text-[24px] cursor-pointer z-30"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <FaTimes /> : <FaBars />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                            <li className="w-full h-[1px] bg-white/10 my-1"></li>
                            <li>
                                <button className="text-white w-full text-left text-[16px] font-medium text-secondary hover:text-white">Hire Me</button>
                            </li>
                            <li>
                                <button className="text-white w-full text-left text-[16px] font-medium text-secondary hover:text-white">Download CV</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

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
        id: "certificates",
        title: "Certificates",
    },
    {
        id: "blog",
        title: "Blog",
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
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

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

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Function to handle navigation for blog
    const handleBlogClick = () => {
        setActive("Blog");
        // If you're using a separate blog page, use:
        // window.open("https://ishwarawasthi.com.np/blog", "_self");
        // If you're using a blog section in the same page:
        // document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
    };

    // Function to handle CV download
    const handleDownloadCV = () => {
        // Replace with your actual CV URL
        const cvUrl = "/path-to-your-cv.pdf";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Ishwar_Awasthi_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Function to handle hire me click
    const handleHireMe = () => {
        setActive("");
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
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
                    <p className='text-white-100 text-[18px] font-bold cursor-pointer flex'>
                        Ishwar&nbsp;
                        <span className='sm:block hidden'>Awasthi</span>
                    </p>
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex flex-row gap-8 items-center'>
                    <ul className='list-none flex flex-row gap-8'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? "text-gray-900 dark:text-white" : "text-secondary"
                                    } hover:text-gray-900 dark:hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                                onClick={() => {
                                    if (nav.id === "blog") {
                                        handleBlogClick();
                                    } else {
                                        setActive(nav.title);
                                        if (nav.id !== "blog") {
                                            document.getElementById(nav.id)?.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }
                                }}
                            >
                                {nav.id === "blog" ? (
                                    <Link
                                        to="/blog"
                                        className="flex items-center gap-1"
                                    >
                                        {nav.title}
                                    </Link>
                                ) : (
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4 items-center">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-amber-500 dark:text-yellow-400 transition-all text-xl hover:scale-110"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <FaSun /> : <FaMoon />}
                        </button>

                        <button
                            onClick={handleHireMe}
                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all text-[16px]"
                        >
                            Hire Me
                        </button>
                        <button
                            onClick={handleDownloadCV}
                            className="border border-gray-900 dark:border-white/20 text-gray-900 dark:text-white px-5 py-2 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all text-[16px]"
                        >
                            CV
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className='lg:hidden flex flex-1 justify-end items-center gap-4'>
                    <button
                        onClick={toggleTheme}
                        className="text-amber-500 dark:text-yellow-400 text-[20px] cursor-pointer hover:scale-110 transition-transform"
                    >
                        {theme === "dark" ? <FaSun /> : <FaMoon />}
                    </button>

                    <div
                        className="text-gray-900 dark:text-white text-[24px] cursor-pointer z-30"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <FaTimes /> : <FaBars />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-white dark:bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar shadow-xl border border-gray-200 dark:border-gray-800`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-gray-900 dark:text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        if (nav.id === "blog") {
                                            handleBlogClick();
                                        } else {
                                            setActive(nav.title);
                                            if (nav.id !== "blog") {
                                                document.getElementById(nav.id)?.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }
                                    }}
                                >
                                    {nav.id === "blog" ? (
                                        <Link
                                            to="/blog"
                                            className="flex items-center gap-1"
                                        >
                                            {nav.title}
                                        </Link>
                                    ) : (
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    )}
                                </li>
                            ))}
                            <li className="w-full h-[1px] bg-gray-300 dark:bg-white/10 my-1"></li>
                            <li>
                                <button
                                    onClick={handleHireMe}
                                    className="w-full text-left text-[16px] font-medium text-secondary hover:text-gray-900 dark:hover:text-white"
                                >
                                    Hire Me
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleDownloadCV}
                                    className="w-full text-left text-[16px] font-medium text-secondary hover:text-gray-900 dark:hover:text-white"
                                >
                                    Download CV
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
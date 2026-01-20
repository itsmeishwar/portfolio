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
                        <span className='sm:block hidden'>Awasthi</span>
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
                                    <a 
                                        href="https://ishwarawasthi.com.np/blog" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1"
                                    >
                                        {nav.title}
                                        <span className="text-xs bg-gradient-to-r from-violet-600 to-indigo-600 px-2 py-0.5 rounded-full ml-1">
                                            New
                                        </span>
                                    </a>
                                ) : (
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4">
                        <button 
                            onClick={handleHireMe}
                            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all text-[16px]"
                        >
                            Hire Me
                        </button>
                        <button 
                            onClick={handleDownloadCV}
                            className="border border-white/20 text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all text-[16px]"
                        >
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
                                        <a 
                                            href="https://ishwarawasthi.com.np/blog" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            {nav.title}
                                            <span className="text-xs bg-gradient-to-r from-violet-600 to-indigo-600 px-2 py-0.5 rounded-full ml-1">
                                                New
                                            </span>
                                        </a>
                                    ) : (
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    )}
                                </li>
                            ))}
                            <li className="w-full h-[1px] bg-white/10 my-1"></li>
                            <li>
                                <button 
                                    onClick={handleHireMe}
                                    className="text-white w-full text-left text-[16px] font-medium text-secondary hover:text-white"
                                >
                                    Hire Me
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={handleDownloadCV}
                                    className="text-white w-full text-left text-[16px] font-medium text-secondary hover:text-white"
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
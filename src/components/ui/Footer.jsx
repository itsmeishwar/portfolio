import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-black-200 py-6 border-t border-t-[#232631]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
                <div className="text-secondary text-[14px]">
                    &copy; {new Date().getFullYear()} Ishwar Awasthi. All rights reserved.
                </div>

                <div className="flex items-center gap-2 text-secondary text-[14px]">
                    Made with <FaHeart className="text-red-500" /> by Ishwar Awasthi
                </div>
            </div>
        </footer>
    );
};

export default Footer;

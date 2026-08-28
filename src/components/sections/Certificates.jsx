import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

const certificates = [
    {
        title: "Diploma in Office Management",
        provider: "Kirtipur Valley Institute — Department of Computer Technologies",
        duration: "2079-02-06 to 2079-05-10 (BS) | Date of Issue: 2079-08-12 (BS)",
        description: "Successfully completed the Diploma in Office Management covering Computer Fundamentals, Nepali/English Typing, Microsoft Office (Word, Excel, PowerPoint, Access), Adobe Pagemaker, Adobe Photoshop, and E-mail & Internet.",
        image: "/kirtipur_certificate.jpg",
        type: "Certificate",
        orientation: "portrait",
    },
    {
        title: "Git & GitHub Workshop",
        provider: "BCA Club of Etech Spark (BCES) with Advanced College of Engineering & Management (ACEM)",
        duration: "January 14 to 16, 2026",
        description: "Participated and completed the Git & GitHub Workshop — achieving hands-on experience in version control, collaborative development, and repository management using Git & GitHub.",
        image: "/git_github_certificate.jpg",
        type: "Certificate",
        orientation: "landscape",
    },
];

const CertificateCard = ({ index, title, provider, duration, description, image, type, orientation, onImageClick }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="w-full bg-white dark:bg-tertiary p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col relative overflow-hidden border-l-[6px] border-violet-600 dark:border-violet-500 group shadow-lg"
        >
            {/* Corner Badge / Ribbon */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
                <div className="absolute top-4 -right-8 w-28 py-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[9px] font-black text-center uppercase tracking-widest rotate-45 shadow-md">
                    {type}
                </div>
            </div>

            <div className="flex-1">
                {/* Title with dot */}
                <h3 className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-600 dark:bg-violet-400 inline-block animate-pulse"></span>
                    {title}
                </h3>

                {/* Details */}
                <div className="space-y-3 mb-6 text-left">
                    <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                        <span className="font-extrabold text-gray-900 dark:text-white">Provider: </span>
                        {provider}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                        <span className="font-extrabold text-gray-900 dark:text-white">Duration: </span>
                        {duration}
                    </p>
                    <p className="text-gray-600 dark:text-secondary text-[15px] leading-relaxed">
                        <span className="font-extrabold text-gray-900 dark:text-white">Description: </span>
                        {description}
                    </p>
                </div>
            </div>

            {/* Certificate Preview Image */}
            {image && (
                <div
                    onClick={() => onImageClick(image, title, orientation)}
                    className="relative mt-auto w-full h-72 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 cursor-pointer group/img shadow-sm bg-gray-50 dark:bg-gray-900"
                >
                    <img
                        src={image}
                        alt={`${title} Certificate`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="bg-white/95 dark:bg-black/90 p-3 rounded-full text-violet-600 dark:text-violet-400 shadow-lg transform scale-75 group-hover/img:scale-100 transition-transform duration-300">
                            <FaSearchPlus size={18} />
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const Certificates = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedOrientation, setSelectedOrientation] = useState("landscape");

    const handleImageClick = (img, title, orientation) => {
        setSelectedImg(img);
        setSelectedTitle(title);
        setSelectedOrientation(orientation);
    };

    return (
        <>
            <motion.div variants={textVariant()} className="text-center md:text-left">
                <p className={`${styles.sectionSubText}`}>My achievements & training</p>
                {/* Custom Heading to support Light/Dark visibility perfectly */}
                <h2 className="text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2 relative inline-block">
                    Trainings and Certificates
                    <span className="absolute bottom-[-10px] left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-violet-600 dark:bg-violet-400 rounded-full"></span>
                </h2>
            </motion.div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {certificates.map((cert, index) => (
                    <CertificateCard 
                        key={`cert-${index}`} 
                        index={index} 
                        {...cert} 
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)}
                >
                    <div 
                        className={`relative flex flex-col items-center cursor-default ${
                            selectedOrientation === "portrait"
                                ? "max-w-lg w-full max-h-[90vh]"
                                : "max-w-4xl w-full max-h-[85vh]"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors cursor-pointer"
                            onClick={() => setSelectedImg(null)}
                            aria-label="Close modal"
                        >
                            <FaTimes size={20} />
                        </button>
                        
                        {/* Certificate Image */}
                        <img 
                            src={selectedImg} 
                            alt={`${selectedTitle} Certificate`}
                            className={`rounded-lg shadow-2xl border border-white/10 ${
                                selectedOrientation === "portrait"
                                    ? "max-h-[80vh] w-auto object-contain"
                                    : "w-full max-h-[75vh] object-contain"
                            }`}
                        />
                        
                        {/* Caption */}
                        <p className="text-white text-lg font-bold mt-4 tracking-wide text-center">
                            {selectedTitle} Certificate
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionWrapper(Certificates, "certificates");

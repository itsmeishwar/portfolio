import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = ({ className = "" }) => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/ishwar-awasthi',
            color: 'hover:text-[#0077b5]'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/itsmeishwar',
            color: 'hover:text-gray-700 dark:hover:text-white'
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: 'https://twitter.com/IshwarAwasthi',
            color: 'hover:text-[#1DA1F2]'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:ishwarawasthi3@gmail.com',
            color: 'hover:text-[#EA4335]'
        }
    ];
    return (
        <div className={`flex gap-4 ${className}`}>
            {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-white-100/5 backdrop-blur-md border border-gray-300 dark:border-white-100/10 flex items-center justify-center text-gray-700 dark:text-white-100 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-white-100/10 hover:border-violet-500/50 group`}
                        aria-label={social.name}
                    >
                        <Icon className="w-5 h-5 group-hover:text-violet-500 transition-colors" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;

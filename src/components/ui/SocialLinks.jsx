import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = ({ className = "" }) => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/in/ishwar-awasthi',
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
            url: 'https://twitter.com/ishwar_awasthi',
            color: 'hover:text-[#1DA1F2]'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:ishwarawasthi@example.com',
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
                        className={`w-12 h-12 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/20 dark:hover:bg-white/10 group`}
                        aria-label={social.name}
                    >
                        <Icon className="w-5 h-5" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;

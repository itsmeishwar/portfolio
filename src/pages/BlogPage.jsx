import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { blogPosts } from '../data/blogData';
import { FaArrowLeft } from 'react-icons/fa';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-primary min-h-screen relative z-0'>
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-8 transition-colors">
                    <FaArrowLeft /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className={styles.sectionSubText}>My Thoughts & Tutorials</p>
                    <h2 className={styles.sectionHeadText}>Blog.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={post.id}
                            className="bg-tertiary rounded-2xl p-6 border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-violet-900/30 text-violet-300 px-3 py-1 rounded-full text-sm">
                                    {post.category}
                                </span>
                                <span className="text-secondary text-sm">{post.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-secondary mb-6 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-secondary text-sm">{post.readTime}</span>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="text-white hover:text-violet-400 transition-colors flex items-center gap-2"
                                >
                                    Read Article
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

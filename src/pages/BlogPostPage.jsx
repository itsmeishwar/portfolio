import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { blogPosts } from '../data/blogData';
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from 'react-icons/fa';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className='bg-primary min-h-screen relative z-0 pb-20'>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-violet-900/20 to-primary/0 pointer-events-none" />

            <div className={`${styles.padding} max-w-4xl mx-auto relative z-10`}>
                <Link to="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
                    <FaArrowLeft /> Back to Blog
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="flex items-center gap-2 text-violet-400 bg-violet-900/20 px-3 py-1 rounded-full text-sm">
                            <FaTag size={12} /> {post.category}
                        </span>
                        <span className="flex items-center gap-2 text-secondary text-sm">
                            <FaCalendar size={12} /> {post.date}
                        </span>
                        <span className="flex items-center gap-2 text-secondary text-sm">
                            <FaClock size={12} /> {post.readTime}
                        </span>
                    </div>

                    <h1 className={`${styles.heroHeadText} text-3xl md:text-5xl lg:text-6xl mb-8 !leading-tight`}>
                        {post.title}
                    </h1>

                    <div
                        className="text-secondary text-lg leading-relaxed space-y-6 blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.article>

                <div className="mt-16 pt-8 border-t border-white/10">
                    <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-6">Read Next</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPosts
                            .filter(p => p.id !== post.id)
                            .slice(0, 2)
                            .map(relatedPost => (
                                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                                    <div className="bg-tertiary rounded-xl p-5 border border-white/5 hover:border-violet-500/30 transition-all">
                                        <h4 className="text-gray-900 dark:text-white font-bold group-hover:text-violet-400 transition-colors mb-2">{relatedPost.title}</h4>
                                        <p className="text-secondary text-sm line-clamp-2">{relatedPost.excerpt}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

const BlogSection = () => {
    // Take only the first 3 posts for the homepage section
    const displayedPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest <span className="text-gradient">Blog Posts</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Sharing insights, tutorials, and thoughts on web development, design, and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group shadow-lg dark:shadow-none"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-sm">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-sm">{post.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">{post.readTime}</span>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-2"
                                >
                                    Read More
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        View All Blog Posts
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;